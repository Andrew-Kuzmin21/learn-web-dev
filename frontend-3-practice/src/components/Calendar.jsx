import {
  MONTH_NAMES,
  WEEK_DAYS_SHORT,
  buildMonthCells,
  isSameDate,
} from '../utils/dates';

export default function Calendar({
  viewDate,
  today,
  selectedDate,
  onSelectDate,
  onPrevMonth,
  onNextMonth,
}) {
  const cells = buildMonthCells(viewDate.getFullYear(), viewDate.getMonth());

  return (
    <div className="main__content__block">
      <div className="main__date__header">
        <h3 className="main__date__header__title">
          {MONTH_NAMES[viewDate.getMonth()]} {viewDate.getFullYear()}
        </h3>

        <div className="main__date__header__buttons">
          <div
            className="main__date__header__buttons__button"
            onClick={onPrevMonth}
          >
            <img className="main__date__header__buttons__button__img" src="/img/prev.png" alt="" />
          </div>
          <div
            className="main__date__header__buttons__button"
            onClick={onNextMonth}
          >
            <img className="main__date__header__buttons__button__img" src="/img/next.png" alt="" />
          </div>
        </div>
      </div>

      <div className="main__date__grid">
        {WEEK_DAYS_SHORT.map((name) => (
          <div key={name} className="main__date__grid__name">{name}</div>
        ))}

        {cells.map((date, index) => {
          if (!date) {
            return (
              <div
                key={`empty-${index}`}
                className="main__date__grid__day main__date__grid__day_empty"
              />
            );
          }

          const isPast = date < today;
          const isToday = isSameDate(date, today);
          const isSelected = isSameDate(date, selectedDate);

          const className =
            'main__date__grid__day' +
            (isPast ? ' main__date__grid__day_disable' : '') +
            (isToday ? ' main__date__grid__day_today' : '') +
            (isSelected ? ' main__date__grid__day_selected' : '');

          return (
            <div
              key={date.getTime()}
              className={className}
              onClick={isPast ? undefined : () => onSelectDate(date)}
            >
              {date.getDate()}
            </div>
          );
        })}
      </div>
    </div>
  );
}
