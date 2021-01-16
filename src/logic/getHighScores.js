import { firestore } from "../firebase";

// Create real-time subscription to the database
function getHighScores(setHighScores) {
  // Copy the database and put it into the state
  firestore.collection("high-scores").orderBy("timeInSeconds", "asc").onSnapshot(snapshot => {
    const newScores = snapshot.docs.map(doc => doc.data());
    setHighScores(newScores);
  });
}

export default getHighScores;