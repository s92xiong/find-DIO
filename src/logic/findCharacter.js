import { DIO, Edward, Spike } from "./coordinates";

const findCharacter = (x, y) => {
  if (x >= DIO.x1 && x <= DIO.x2 && y >= DIO.y1 && y <= DIO.y2) {
    return "DIO";
  } else if (x >= Spike.x1 && x <= Spike.x2 && y >= Spike.y1 && y <= Spike.y2) {
    return "Spike";
  } else if (x >= Edward.x1 && x <= Edward.x2 && y >= Edward.y1 && y <= Edward.y2) {
    return "Edward";
  } else {
    return "Keep trying";
  }
};

export default findCharacter;