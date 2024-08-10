import React, { useContext, useRef } from "react";
import { useState, useEffect } from "react";
// Context Component Connection
import { PlayerContext } from "./context/PlayerContext";
// Components Connection
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import Preloader from "./components/Preloader";
import "./index.css";

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);

  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <div className="h-screen bg-black">
          <div className="h-[90%] flex">
            <Sidebar />
            <Display />
          </div>
          <Player />
          <audio ref={audioRef} src={track.file} preload="auto"></audio>
        </div>
      </div>
    </>
  );
};

export default App;
