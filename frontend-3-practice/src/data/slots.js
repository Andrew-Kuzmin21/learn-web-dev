// ДАННЫЕ: слотов с сервера пока нет, поэтому генерируем детерминированно.
// Формат слота: { time: "10:00", available: true }

const HOURS = [10, 11, 12, 13, 14, 15, 16, 17];

export function getSlotsForDate(date) {
  return HOURS.map((hour, i) => ({
    time: `${hour}:00`,
    // для разных дней — разный набор занятых слотов
    available: (date.getDate() + i) % 3 !== 0,
  }));
}
