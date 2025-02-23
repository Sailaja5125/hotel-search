import assemblyai as aai
from flask import Flask, request, jsonify
from rake_nltk import Rake
import nltk
from PIL import Image
import requests
from transformers import AutoProcessor, BlipForConditionalGeneration

app = Flask(__name__)
nltk.download('stopwords')
nltk.download('punkt')

# Initializing the Rake instance
rake = Rake()

# Loading the image captioning model and tokenizer
processor = AutoProcessor.from_pretrained("Salesforce/blip-image-captioning-base")
model = BlipForConditionalGeneration.from_pretrained("Salesforce/blip-image-captioning-base")

@app.route('/voice-to-text', methods=['POST'])
def voice_to_text():
    aai.settings.api_key = "10c48c7aaa5f47098820aec2720ae017"
    # Check if the POST request has the file part
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
    file = request.files['file']
    # If the user does not select a file, the browser submits an empty file without a filename
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    # Save the file to a temporary location
    file_path = "./recorded_audio.wav"
    file.save(file_path)
    # Transcribe the audio file
    transcriber = aai.Transcriber()
    transcript = transcriber.transcribe(file_path)
    # Get the transcribed text
    transcribed_text = transcript.text
    # Clean up the transcript object
    del transcript
    # feature extraction from the transcribed text 
    rake.extract_keywords_from_text(transcribed_text) 
    keywords = rake.get_ranked_phrases()
    keywords = [keyword.capitalize() for keyword in keywords]
    return jsonify({"transcription": transcribed_text , "keywords": keywords}), 200


@app.route('/process-text',methods=['POST'])
def process_text():
    # Get the text from the POST request
    data = request.get_json()
    try:
        # Extract text data from JSON object
        req = data['text']
        rake.extract_keywords_from_text(req) 
        keywords = rake.get_ranked_phrases()
        keywords = [keyword.capitalize() for keyword in keywords]

        # Return the extracted text data
        return jsonify({
            "keywords": keywords
        }), 200

    except KeyError as e:
        return jsonify({"error": f"Missing key: {e}"}), 400
    
@app.route('/process-image', methods=['POST']) # working
def process_image():
    # Check if an image file is provided in the request
    if 'file' not in request.files:
        return jsonify({"error": "No image file provided"}), 400

    file = request.files['file']

    # If the user does not select a file, the browser submits an empty file without a filename
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    try:
        # Reading the image using PIL
        image = Image.open(file)
    except Exception as e:
        return jsonify({"error": f"Failed to read the image: {e}"}), 500

    # Processing the image
    inputs = processor(images=image, return_tensors="pt")

    # Generating the caption
    outputs = model.generate(**inputs)

    # Decoding the generated caption
    input_text = processor.decode(outputs[0], skip_special_tokens=True)

    # Extracting keywords and phrases using RAKE
    rake.extract_keywords_from_text(input_text) 
    keywords = rake.get_ranked_phrases() 
    keywords = [keyword.capitalize() for keyword in keywords]
    return jsonify({"caption": input_text, "keywords": keywords})

if __name__ == '__main__':
    app.run(debug=True)
 