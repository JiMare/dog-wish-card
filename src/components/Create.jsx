import React, { useState } from "react";
import { Title } from "./Title";
import { CreateCard } from "./CreateCard";
import { useNavigate } from "react-router-dom";
import { Nav } from "./Nav";

export const Create = ({ config, setWishId }) => {
  const navigate = useNavigate();
  const [background, setBackground] = useState(null);
  const [color, setColor] = useState(null);
  const [cover, setCover] = useState(null);
  const [snow, setSnow] = useState(null);
  const [music, setMusic] = useState(null);
  const [text, setText] = useState("");
  const [sender, setSender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (background && color && cover && snow && music && text && sender) {
      fetch("https://xmas-api.itgirls.cz/cards", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          background,
          color,
          cover,
          snow,
          music,
          text,
          sender,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setWishId(data.data.id);
          navigate("/id");
        })
        .catch((e) => console.log(e));
    }
  };
  return (
    <>
      <Nav />
      <Title title="Vytvořit přáníčko" />
      <main className="content">
        <div className="box">
          <div className="box__inside">
            <form className="configurator" onSubmit={handleSubmit}>
              <CreateCard
                label="Pozadí stránky"
                createClassName="field__swatch-group field__swatch-group--round"
                config={config.backgrounds}
                configName="background"
                radio={false}
                set={setBackground}
              />
              <CreateCard
                label="Barva přáníčka"
                createClassName="field__swatch-group field__swatch-group--round"
                config={config.colors}
                configName="color"
                radio={false}
                set={setColor}
              />
              <CreateCard
                label="Obrázek na obálce"
                createClassName="field__swatch-group field__swatch-group--big"
                config={config.covers}
                configName="cover"
                radio={false}
                set={setCover}
              />
              <CreateCard
                label="Sníh na pozadí"
                className="field__radio-group"
                config={config.snow}
                configName="snow"
                radio={true}
                set={setSnow}
              />
              <CreateCard
                label="Hudba"
                className="field__radio-group"
                config={config.music}
                configName="music"
                radio={true}
                set={setMusic}
              />

              <div className="field">
                <label className="field__label" htmlFor="text">
                  Text uvnitř přáníčka
                </label>
                <textarea
                  className="field__input"
                  name="text"
                  id="text"
                  rows="3"
                  maxLength="100"
                  autoComplete="off"
                  onChange={(e) => setText(e.target.value)}
                  value={text}
                ></textarea>
                <p className="field__description">
                  Zbývá <strong>{text ? 100 - text.length : 100}</strong>/100
                  znaků.
                </p>
              </div>

              <div className="field">
                <label className="field__label" htmlFor="sender">
                  Odesílatel (podpis)
                </label>
                <input
                  className="field__input"
                  type="text"
                  name="sender"
                  id="sender"
                  rows="3"
                  maxLength="20"
                  autoComplete="off"
                  onChange={(e) => setSender(e.target.value)}
                  value={sender}
                />
              </div>

              <button type="submit" className="button button--big mt-30">
                Uložit přáníčko
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};
