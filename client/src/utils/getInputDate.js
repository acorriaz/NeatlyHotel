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
