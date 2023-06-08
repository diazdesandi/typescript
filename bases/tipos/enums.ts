(() => {
  enum AudioLevel {
    /*
    Si no se asigna un valor se asigna del 0 a n
        min = 0, medium = 1, max = 2
    mientras que si se asigna un valor determinado
    la siguiente variable tendría el número siguiente
        min = 1, medium es 2, max = 10
    */
    min = 3,
    medium = 5,
    max = 7,
  }

  let currentAudio: AudioLevel = AudioLevel.max;

  console.log(currentAudio);
  console.log(AudioLevel);
})();
