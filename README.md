# Find DIO - Documentation
A mini game based on "Where's Waldo?", a series of children's puzzle books. [Link to project](https://waldo-react-d81e7.firebaseapp.com/).


## About This Project
Find DIO is a fun mini game influenced by "Where's Waldo?", where users must find the character DIO (Dio Brando) from JoJo's Bizarre Adventure and his two minions: Edward Elric and Spike Spiegel. 

**How to play:**
Use the mouse cursor (crosshair) and left click on any location in the background image to prompt a popup box: then select the character you think you found. If you did not successfully find a character in the list of required characters, the program will let you know you missed, otherwise the program will tell you which character you successfully found!

**How to win:**
Users must successfully target and correctly select all 3 characters: Dio Brando, Spike Spiegel, and Edward Elric. They are all hidden on the map somewhere... But where could they be!? Only you can find them!

**Click on the "Help" button:**
If a user is having trouble finding the characters, the "Help" button provides images of what the characters look like and display whether or not they have been found.

Image Preview:
![imagePreview0](https://firebasestorage.googleapis.com/v0/b/waldo-react-d81e7.appspot.com/o/Screen%20Shot%202021-04-08%20at%208.34.18%20PM.png?alt=media&token=47129806-c707-4440-a10e-cc85051f4d65)

![imagePreview1](https://firebasestorage.googleapis.com/v0/b/waldo-react-d81e7.appspot.com/o/Screen%20Shot%202021-04-08%20at%209.03.04%20PM.png?alt=media&token=91bba6ac-aaef-4044-be10-d78860aa2a3c)


## Frameworks
This project was built using React (Create React App) and Firebase. The Firebase services used in this project are Firestore and Hosting.


## Features
* Custom cursor icon (crosshair)
* Timer
* Add high scores
* Works on web and mobile, accomodating different window sizes


## Project setup

### Dependencies
```
npm install dotenv
npm install firebase
npm install react-outside-click-handler
npm install -g firebase-tools
```

### Installation and Firebase setup
* Create a new Firebase project
* Go to *Project Overview* and register a web app
* Activate Firestore
  * Create a collection called ```high-scores```
* Fork & clone the repository
* Add Firebase credentials
  * ```npm install dotenv```
  * ```npm install firebase```
  * In the root folder of the respository, create a file called *.env.local*

The .env.local file should have the following:

```
REACT_APP_API_KEY=apiKeyValue
REACT_APP_AUTH_DOMAIN=authDomainValue
REACT_APP_DATABASE_URL=projectIdValue
REACT_APP_PROJECT_ID=storageBucketValue
REACT_APP_STORAGE_BUCKET=messagingSenderIdValue
REACT_APP_MESSAGING_SENDER_ID=appIdValue
```


## Reusable generic components

### Timer.jsx:

Implement a timer for a game that tracks time in the format of HH:MM:SS.

In order to properly use this component, the user must initialize some React State:

```
const [winTime, setWinTime] = useState({}); // Default empty object
const [timerOn, setTimerOn] = useState(true);
const [gameWon, setGameWon] = useState(false);
```

*Timer.jsx* takes four props: 
1. className - for styling purposes
2. setWinTime - updates state every second to be the "win time", determines the time the user wins the game
3. timerOn - boolean that determines if the timer is actively running
4. gameWon - boolean checks if the game is won

[CodeImage](https://firebasestorage.googleapis.com/v0/b/waldo-react-d81e7.appspot.com/o/Screen%20Shot%202021-04-08%20at%208.47.38%20PM.png?alt=media&token=57d8adcd-e5fd-4eae-a3b7-547ac83a76a9)

[timerImage](https://firebasestorage.googleapis.com/v0/b/waldo-react-d81e7.appspot.com/o/Screen%20Shot%202021-04-08%20at%208.48.47%20PM.png?alt=media&token=3ba81048-1299-4fdb-ac00-9cc445f3cd9b)