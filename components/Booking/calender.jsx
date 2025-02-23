import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import moment from 'moment';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(moment());
  const startOfMonth = selectedDate.clone().startOf('month').startOf('week');
  const endOfMonth = selectedDate.clone().endOf('month').endOf('week');

  const days = [];
  let day = startOfMonth.clone();
  while (day.isBefore(endOfMonth, 'day')) {
    days.push(day.clone());
    day.add(1, 'day');
  }

  const renderDays = () => {
    return days.map((day, index) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.date,
          day.isSame(moment(), 'day') && styles.currentDay,
          day.isSame(selectedDate, 'day') && styles.selectedDay,
        ]}
        onPress={() => setSelectedDate(day)}
      >
        <Text style={[day.isSame(selectedDate, 'day') && styles.selectedText]}>
          {day.format('D')}
        </Text>
      </TouchableOpacity>
    ));
  };

  const renderWeekDays = () => {
    const weekDays = moment.weekdaysShort();
    return weekDays.map((day, index) => (
      <Text key={index} style={styles.day}>
        {day}
      </Text>
    ));
  };

  return (
    <View style={styles.calendar}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => setSelectedDate(selectedDate.clone().subtract(1, 'month'))}
        >
          <Text style={styles.arrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.month}>{selectedDate.format('MMMM YYYY')}</Text>
        <TouchableOpacity
          onPress={() => setSelectedDate(selectedDate.clone().add(1, 'month'))}
        >
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.weekdays}>{renderWeekDays()}</View>
      <ScrollView contentContainerStyle={styles.dates}>{renderDays()}</ScrollView>
      {/* Display the selected date */}
      <Text style={styles.selectedDateText}>
        Selected Date: {selectedDate.format('MMMM D, YYYY')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  calendar: {
    padding: 16,
    backgroundColor: '#FDFDFD',
    borderRadius: 10,
    width: '100%',
    boxShadow: '0 0 2px 0 rgba(0,0,0, .2), 0 5px 10px 0 rgba(0,0,0, .1)',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  arrow: {
    fontSize: 18,
    fontWeight: '600',
  },
  month: {
    fontSize: 18,
    fontWeight: '600',
  },
  weekdays: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  day: {
    width: '14.285%',
    textAlign: 'center',
    fontWeight: '600',
    color: '#999FA6',
  },
  dates: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  date: {
    width: 36,
    height: 36,
    margin: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  currentDay: {
    backgroundColor: '#FF6F00',
  },
  selectedDay: {
    borderColor: '#008FFD',
  },
  selectedText: {
    color: 'black',
  },
  selectedDateText: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default Calendar;