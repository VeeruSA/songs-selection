import { combineReducers } from 'redux';

const songsReducer = () => {
    return  [
        { title: 'A Star', duration: '4:15' },
        { title: 'Dhoom', duration: '4:44' },
        { title: 'Jugrafiya', duration: '3:20' },
        { title: 'Question Mark', duration: '5:05' },
        { title: 'Bang Bang', duration: '4:25' },
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});