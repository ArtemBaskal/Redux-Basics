import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Stairway To Heaven", duration: "8:01" },
    { title: "Shine On You Crazy Diamond", duration: "30:04" },
    { title: "Imagine", duration: "3:02" },
    { title: "Femme Fatale", duration: "2:01" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
