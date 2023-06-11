namespace Validations {
  export const validateText = (text: string): boolean => {
    return text.length > 3 ? true : false;
  };

  const validateDate = (myDate: Date): boolean => {
    return isNaN(myDate.valueOf()) ? false : true;
  };
}

// Para usar las funciones fuera del namespace es necesario agregar un export
console.log(Validations.validateText("Fer"));
