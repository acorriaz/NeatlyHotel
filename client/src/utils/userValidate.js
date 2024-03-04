export const ageOver18 = (dateOfBirth) => {
  const birthday = new Date(dateOfBirth);
  const today = new Date();
  let age = today.getFullYear() - birthday.getFullYear();
  const month = today.getMonth() - birthday.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }
  return age >= 18;
};

export const checkIfFullName = (fullName) => {
  fullName = fullName.trim();
  const nameParts = fullName.split(/\s+/);

  if (nameParts.length < 2) {
    console.log("Must include atleast full name and last name.");
    return false;
  }

  return true;
};
