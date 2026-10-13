import { DAY_NAMES, MONTH_NAMES } from '../utils/dates';

export default function Summary({ selectedDate, selectedTime }) {
  const day = selectedDate.getDate();
  const month = MONTH_NAMES[selectedDate.getMonth()];
  const year = selectedDate.getFullYear();
  const weekDay = DAY_NAMES[selectedDate.getDay()];

  const title = `${weekDay}, ${day} ${month} ${year}` + (selectedTime ? ` — ${selectedTime}` : '');

  return (
    <div className="main__next">
      <h3 className="main__next__title">{title}</h3>

      <div
        className={
          'main__next__button' + (selectedTime ? '' : ' main__next__button_disable')
        }
      >
        Далее
      </div>
    </div>
  );
}
