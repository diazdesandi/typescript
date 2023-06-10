(() => {
  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  };

  const avengers: Avengers = {
    nick: "Samuel L. Jackson",
    ironman: "Robert Downey Jr.",
    vision: "Paul Bettany",
    activo: true,
    poder: 1500,
  };

  /*
  const { poder, vision } = avengers;
  console.log(poder.toFixed(2), vision.toUpperCase());
  */

  const printAvenger = ({ vision, ...rest }: Avengers) => {
    console.log(vision, rest);
  };

  //   printAvenger(avengers);

  const avengersArr: string[] = ["Cap. América", "IronMan", "Hulk"];

  // const ironman = avengersArr[1]

  const [, ironman] = avengersArr;

  // console.log({ ironman });
})();
