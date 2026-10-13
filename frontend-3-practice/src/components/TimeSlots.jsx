export default function TimeSlots({ slots, selectedTime, onSelectTime }) {
  return (
    <div className="main__content__block">
      <h3 className="main__time__title">Доступное время</h3>

      <div className="main__time__grid">
        {slots.map(({ time, available }) => {
          const className =
            'main__time__grid__cell' +
            (!available ? ' main__time__grid__cell_disable' : '') +
            (time === selectedTime ? ' main__time__grid__cell_selected' : '');

          return (
            <div
              key={time}
              className={className}
              onClick={available ? () => onSelectTime(time) : undefined}
            >
              {time}
              {!available && (
                <>
                  {' '}
                  <span className="main__time__grid__cell__span main__time__grid__cell__span_disable">
                    Занято
                  </span>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
