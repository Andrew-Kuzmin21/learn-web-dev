const STEPS = [
  { number: 1, text: 'Выбор мастера', status: 'done' },
  { number: 2, text: 'Выбор услуг', status: 'done' },
  { number: 3, text: 'Выбор даты', status: 'active' },
  { number: 4, text: 'Добавить контакты', status: 'disable' },
  { number: 5, text: 'Подтверждение', status: 'disable' },
];

export default function Steps() {
  return (
    <ul className="steps">
      {STEPS.map(({ number, text, status }) => {
        const isDisabled = status === 'disable';
        return (
          <li className="steps__step" key={number}>
            <p
              className={
                'steps__step__circle' +
                (status === 'active' ? ' steps__step__circle_active' : '') +
                (isDisabled ? ' steps__step__circle_disable' : '')
              }
            >
              {number}
            </p>

            <div className="steps__step__content">
              <div className="steps__step__content__lines">
                <div
                  className={
                    'steps__step__content__lines__right' +
                    (isDisabled ? ' steps__step__content__lines__right_disable' : '')
                  }
                />
                <div className="steps__step__content__lines__left" />
              </div>

              <p
                className={
                  'steps__step__content__text' +
                  (isDisabled ? ' steps__step__content__text_disable' : '')
                }
              >
                {text}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
