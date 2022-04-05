import {useState} from 'react';
import { useEffect } from 'react';
import PlayerDetails from './components/Details';
import Player from './components/Player';
function App() {
  const[songs,setSongs] = useState([
    {
      title:"Agar tum sath ho",
      artist:"Arijit Singh",
      img_src:"./images/ATSH.jpg",
      src:"./music/Agar Tum Saath Ho - Tamasha 128 Kbps.mp3"  
    },
    {
      title:"Duniyaa",
      artist:"Akhil,Dhwani Bhanushali",
      img_src:"./images/Duniyaa.jpg",
      src:"./music/Duniya - Luka Chuppi 128 Kbps.mp3"
    },
    {
      title:"Lag ja Gale",
      artist:"Lata Mangeshkar",
      img_src:"./images/lag ja gale.jpg",
      src:"./music/Lag Ja Gale Se Phir - Woh Kaun Thi  (1964) 128 Kbps.mp3"
    },
    {
      title:"Mehrama",
      artist:"Pritam,Darshan Raval,Antara Mitra",
      img_src:"./images/Mehrama.jpg",
      src:"./music/Mehrama - Love Aaj Kal 192 Kbps.mp3"
    }
  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;