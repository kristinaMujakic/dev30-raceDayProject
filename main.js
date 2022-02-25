let raceNumber = Math.floor(Math.random() * 1000);
const regEarly = true;
const runnersAge = 28;

if (runnersAge >= 18) {
  console.log(raceNumber + 1000);
} else {
  console.log(raceNumber);
}

if (runnersAge >= 18 && regEarly === true) {
  console.log(
    `You will race at 9:30, your race number is: ${raceNumber + 1000}`
  );
} else if (runnersAge >= 18 && regEarly === false) {
  console.log(
    `You will race at 11:00, your race number is ${raceNumber + 1000}`
  );
} else {
  console.log(`You will race at 12:30, your race number is ${raceNumber}`);
}
