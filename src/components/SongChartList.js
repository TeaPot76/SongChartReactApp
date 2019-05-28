import React from 'react';
import Song from './Song';

const SongChartList = ({songs}) => {

  const theSongs = songs.map((song) => {
    return <li><Song song={song}/></li>
  })

  return (
    <ul className="song-chart-list">
      {theSongs}
    </ul>
  );
}

export default SongChartList;
