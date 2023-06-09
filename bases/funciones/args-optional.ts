(() => {
  // Para que el argumento sea opcional se agrega ?
  // pero al no enviarse sería undefined
  const fullName = (firstName: string, lastName?: string): string => {
    return `${firstName} ${lastName || "Sin apellido"}`;
  };

  const name = fullName("Tony");

  console.log({ name });
})();
