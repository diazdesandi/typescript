(() => {
  let avenger: any = 123;
  let exists;
  let power;

  avenger = "Dr Strange";

  //   console.log(avenger.charAt(0));
  // Type casting a as type
  console.log((avenger as string).charAt(0));

  avenger = 150.232564;
  //   console.log(avenger.toFixed(2));
  // Type casting <number>
  console.log(<number>avenger.toFixed(2));

  console.log(exists);
  console.log(power);
})();
