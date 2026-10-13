import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Steps from './components/Steps';
import Calendar from './components/Calendar';
import TimeSlots from './components/TimeSlots';
import Summary from './components/Summary';
import Footer from './components/Footer';

import { addMonths, startOfDay } from './utils/dates';
import { getSlotsForDate } from './data/slots';

// «Сегодня» считаем один раз, вне компонента
const TODAY = startOfDay(new Date());

export default function App() {
  // СОСТОЯНИЕ
  const [viewDate, setViewDate] = useState(
    new Date(TODAY.getFullYear(), TODAY.getMonth(), 1)
  );
  const [selectedDate, setSelectedDate] = useState(TODAY); // день по умолчанию
  const [selectedTime, setSelectedTime] = useState(null);

  // Слоты — производное значение, отдельно в state хранить не нужно
  const slots = getSlotsForDate(selectedDate);

  // ОБРАБОТЧИКИ
  function handleSelectDate(date) {
    setSelectedDate(date);
    setSelectedTime(null); // время сбрасывается
  }

  return (
    <div className="page">
      <Header />

      <main>
        <Steps />

        <section className="main">
          <h1>Выберите дату и время</h1>

          <div className="main__content">
            <Calendar
              viewDate={viewDate}
              today={TODAY}
              selectedDate={selectedDate}
              onSelectDate={handleSelectDate}
              onPrevMonth={() => setViewDate(addMonths(viewDate, -1))}
              onNextMonth={() => setViewDate(addMonths(viewDate, 1))}
            />

            <TimeSlots
              slots={slots}
              selectedTime={selectedTime}
              onSelectTime={setSelectedTime}
            />
          </div>

          <Summary selectedDate={selectedDate} selectedTime={selectedTime} />

          <div className="main__back">
            <div className="main__back__button">Назад</div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
