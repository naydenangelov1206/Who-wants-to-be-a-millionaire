import { useState } from "react";
import mute from "./soundIcons/mute.png";
import unmute from "./soundIcons/unmute.png";

const BackgroundMusic = () => {
  const [isMusicMuted, setIsMusicMuted] = useState(false);

  const toggleMusic = () => {
    setIsMusicMuted(prevState => !prevState);
  };

  return (
    <>
      <button onClick={toggleMusic}>
        {isMusicMuted ? (
          <img src={mute} width={20} className="mute" />
        ) : (
          <img src={unmute} width={20} className="unmute" />
        )}
      </button>
      <audio
        autoPlay
        loop
        muted={isMusicMuted}
        src="/backgroundMusic/whoWantsToBeAMillionaireBackgroundMusic.mp3"
        type="audio/mpeg"
      ></audio>
    </>
  );
};

export default BackgroundMusic;
