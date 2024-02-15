export function getCheckInDate() {
  const today = new Date();
  today.setDate(today.getDate() + 1);
  const earliestCheckIn = today.toISOString().split("T")[0];
  return earliestCheckIn;
}

export function getCheckOutDate() {
  const today = new Date();
  today.setDate(today.getDate() + 2);
  const earliestCheckOut = today.toISOString().split("T")[0];
  return earliestCheckOut;
}

export function addOneDayToCheckInDate(checkInDate) {
  const date = new Date(checkInDate);
  date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
  const newCheckOutDate = date.toISOString().split("T")[0];
  return newCheckOutDate;
}

export function isMoreThanOneDay(checkInDate, checkOutDate) {
  const checkIn = new Date(checkInDate);
  const checkOut = new Date(checkOutDate);
  const timeDiff = checkOut.getTime() - checkIn.getTime();
  const diffDays = timeDiff / (1000 * 3600 * 24);
  return diffDays > 1 || diffDays < 0;
}
