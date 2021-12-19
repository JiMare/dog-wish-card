import React, {useState} from 'react';
import Snowfall from "react-snowfall";
import { useAudio } from "../hooks/useAudio";

export const WishCard = ({wishData}) => {

     const [open, setOpen] = useState(false);
     const [isPlaying, play, pause] = useAudio(`/assets/audio/${wishData.music}.mp3`);

     const toggleOpen = () => {
       setOpen(!open);
       if (!open) {
         play();
       } else {
         pause();
       }
     };

    return (
      <div className={`background background--${wishData.background}`}>
        <div className="snow">
          <Snowfall snowflakeCount={wishData.snow} />
        </div>

        <div
          className={
            open
              ? `card card--${wishData.color} card--open`
              : `card card--${wishData.color}`
          }
          onClick={toggleOpen}
        >
          <div className="cover">
            <img
              className="cover__image"
              src={`/assets/images/covers/${wishData.cover}.svg`}
            />
          </div>

          <div className="inside-left">
            <div className="inside-left__content">
              <div className="inside-left__text">{wishData.text}</div>
              <div className="inside-left__sender">{wishData.sender}</div>
            </div>
            <img
              className="inside-left__logo"
              src="/assets/images/czechitas.svg"
              alt="Czechitas"
            />
          </div>

          <div className="inside-right">
            <div className="photo photo1">
              <img src="/assets/images/photos/photo1.jpg" />
            </div>
            <div className="photo photo2">
              <img src="/assets/images/photos/photo2.jpg" />
            </div>
            <div className="photo photo3">
              <img src="/assets/images/photos/photo3.jpg" />
            </div>
            <div className="photo photo4">
              <img src="/assets/images/photos/photo4.jpg" />
            </div>
          </div>
        </div>

        <p className="instructions">Kliknutím mě {open ? "zavři" : "otevři"}</p>
      </div>
    );
}
