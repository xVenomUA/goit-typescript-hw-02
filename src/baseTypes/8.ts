/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/

type Gender = {
  male: boolean;
  female: boolean;
};
const myGender: Gender = {
  male: false,
  female: true,
};
export {};
