// Convert time to hours and minutes
export const calcTime = time => {
  if (!time || time === 0) {
    return 'n/a';
  }
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};

// Convert a number to $ format
export const convertMoney = money => {
  if (!money || money === 0) {
    return 'n/a';
  }
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  });
  return formatter.format(money);
};

export const getAge = (birthString, deathString) => {
  var deathDate = deathString ? new Date(deathString) : new Date();
  var birthDate = new Date(birthString);
  var age = deathDate.getFullYear() - birthDate.getFullYear();
  var m = deathDate.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && deathDate.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};
