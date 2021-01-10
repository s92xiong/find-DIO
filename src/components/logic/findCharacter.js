import { DIO, Edward, Spike } from "./coordinates";

const findCharacter = (x, y) => {
  if (x >= DIO.x1 && x <= DIO.x2 && y >= DIO.y1 && y <= DIO.y2) {
    console.log("You found DIO!");
  } else if (x >= Spike.x1 && x <= Spike.x2 && y >= Spike.y1 && y <= Spike.y2) {
    console.log("You found Spike Spiegel!");
  } else if (x >= Edward.x1 && x <= Edward.x2 && y >= Edward.y1 && y <= Edward.y2) {
    console.log("You found Edward Elric!");
  } else {
    console.log("Keep trying!");
  }
};

export default findCharacter;