import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Wind of Change", duration: "4:05" },
    { title: "Whatever It Takes", duration: "2:30" },
    { title: "November rain", duration: "3:15" },
    { title: "Ocean", duration: "1:45" }
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
