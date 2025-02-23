import requests

data = requests.get("https://serpapi.com/search.json?engine=google_hotels&q=Hyderabad+Resorts&check_in_date=2025-02-23&check_out_date=2025-02-24&adults=2&currency=USD&gl=us&hl=en",{
    "api_key":"010a3402db41cbf63222d4a2432478ec9c3cabcfbb714de65f34c2fc55971cdf"
})
"""
properties [{
   type : hotels
   name :The Ritz-Carlton, Bali
   description:"Zen-like quarters, some with butler service, in an upscale property offering refined dining & a spa." 
   logo:""
    "gps_coordinates": {
        "latitude": -8.830670999999999,
        "longitude": 115.21533099999999
      },
    prices:[
        {
            
        }
    ]
    nearby_places:[
         {
          "name": "I Gusti Ngurah Rai International Airport",
          "transportations": [
            {
              "type": "Taxi",
              "duration": "29 min"
            }
          ]
        },
    ]
    "images": [
        {
          "thumbnail": "https://lh3.googleusercontent.com/proxy/3GU0rF7c5y00MbsWRPAkzdY0Mql0YhH7coFNK9nRDE8GwlzsRbc7xHB8lu8ZN6ApPUiuM7GvjB4RWoJaQCcD4kjARaoyDitH27WhWiAdz8dfG4TCY6pafMo52UQH5W76rgH3JESuGN3ohZ20fEwSgBKGmdQZOA=s287-w287-h192-n-k-no-v1",
          "original_image": "https://d2hyz2bfif3cr8.cloudfront.net/imageRepo/7/0/151/470/91/rz-dpssw-private-pool-29237_Classic-Hor_O.jpg"
        },
        {
          "thumbnail": "https://lh5.googleusercontent.com/proxy/IUakfiu-4guLHoPdx1ippkGtRxwdDW9pxf3j8kRq8FtIKOnnCepdr1DBB1vDftDvbY1IDqTCsgzrvgXdzBB6sJU8-z-7yawWRg-tsLlqSy9XI9mbudAurUnJBm9tmF4sJJFZXkuiyUc7zaNMZ6XPZ3MJDhEzWw=s287-w287-h192-n-k-no-v1",
          "original_image": "https://d2hyz2bfif3cr8.cloudfront.net/imageRepo/7/0/147/874/299/dpssw-villa-0105-hor-clsc_O.jpg"
        },
        {
          "thumbnail": "https://lh6.googleusercontent.com/proxy/MWhomwXIPhVXgnq1drMsEuPzTr2FB1f5ePbnpGxtyxwOcB0zr7xKrN34pDzJQVEPRJxFtaSFKfGngytJW4jO2c_9jiVCQuOb6OgRBqn-TEAI172VO2Ptx3G1bx1OpnvBsIcIhTk4ZoNH4EWwUIRxEgVoYQg2EQ=s287-w287-h192-n-k-no-v1",
          "original_image": "https://d2hyz2bfif3cr8.cloudfront.net/imageRepo/7/0/147/874/243/dpssw-villa-0107-hor-clsc_O.jpg"
        },
        ...
      ],
       "overall_rating": 4.6,
       "amenities": [
        "Free Wi-Fi",
        "Free parking",
        "Pools",
        "Hot tub",
        "Air conditioning",
        "Fitness centre",
        "Spa",
        "Beach access",
        "Bar",
        "Restaurant",
        "Room service",
        "Kitchen in some rooms",
        "Airport shuttle",
        "Full-service laundry",
        "Accessible",
        "Business centre",
        "Child-friendly",
        "Smoke-free property"
      ],
      
}] 
""" 

print(data.json())

