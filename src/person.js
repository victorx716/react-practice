export const isAdult = (n) =>  n >= 18;
export const canDrink = (n) => n >= 21;

const isSenior = (x) => { 
  if (x >= 65) {
    return true;
  } 
  return false;
}

export default isSenior;