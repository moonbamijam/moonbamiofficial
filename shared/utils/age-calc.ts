export const ageCalc = (birthday: string): number => {
  const today = new Date();
  const birthDate = new Date(birthday);
  const monthDiff = today.getMonth() - birthDate.getMonth();
  let age = today.getFullYear() - birthDate.getFullYear();

  // Adjust age if the birthday hasn't occurred yet this year
  if (
    monthDiff < 0 ||
    (monthDiff == 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};
