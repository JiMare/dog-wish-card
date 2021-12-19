import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "./Nav";
import { Title } from "./Title";

export const GetID = ({ wishId }) => {
  return (
    <>
      <Nav />
      <Title title="Přáníčko je připravené" />
      <main className="content">
        <div className="pickup">
          <p className="pickup__label">Přímý odkaz na přáníčko</p>

          <div className="box shadow mb-30">
            <div className="box__inside pt-0 pb-0">
              <Link to={`/card/${wishId}`} className="pickup__url">
                https://your-christmas-card.netlify.app/card/{wishId}
              </Link>
              <p className="pickup__description">
                Tento odkaz pošli emailem, přes messenger nebo ho dej na
                sociální sítě. Po kliknutí na odkaz se zobrazí tvoje přáníčko.
              </p>
            </div>
          </div>

          <p className="pickup__label">Kód tvého přáníčka</p>

          <div className="box shadow mb-30">
            <div className="box__inside pt-0 pb-0">
              <div className="pickup__code">{wishId}</div>
              <p className="pickup__description">
                S tímto kódem si kdokoliv může vyzvednout tvoje uložené
                přáníčko. Hodí se, když chceš přáníčko poslat třeba SMSkou a
                nechceš opisovat celou adresu.
              </p>
            </div>
          </div>

          <Link className="button button--big" to="/create">
            Vytvořit další přáníčko
          </Link>
        </div>
      </main>
    </>
  );
};
