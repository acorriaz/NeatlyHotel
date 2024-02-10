export default function getUserDataFromLocalStorage() {
  const dataFromLocalStorage = localStorage.getItem(
    "sb-aqbgthzlroeplhhywlst-auth-token"
  );
  const parseData = JSON.parse(dataFromLocalStorage);
  const userData = {
    id: parseData.user.id,
    username: parseData.user.user_metadata.username,
    email: parseData.user.email,
    fullName: parseData.user.user_metadata.full_name,
    country: parseData.user.user_metadata.country,
    birthDate: parseData.user.user_metadata.date_of_birth,
    idNumber: parseData.user.user_metadata.id_number,
    card: {
      cardNumber: parseData.user.user_metadata.card_number,
      cardName: parseData.user.user_metadata.card_name,
      cardExpire: parseData.user.card_expire,
    },
  };
  return userData;
}
