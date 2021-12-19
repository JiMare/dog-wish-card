import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Nav } from "./Nav";
import { Title } from "./Title";

export const Get = () => {
  const [id, setId] = useState('');

  const handleChange = (e) => {
     setId(e.target.value);
  }
  return (
    <>
      <Nav />
      <Title title="Vyzvednout přáníčko" />
      <main className="content">
        <form className="pickup" autoComplete="off">
          <label htmlFor="pickup-code" className="pickup__label">
            Zadej šestimístný kód přáníčka
          </label>

          <div className="box shadow mb-30">
            <div className="box__inside pt-0 pb-0">
              <input
                id="pickup-code"
                className="pickup__code"
                type="text"
                maxLength="6"
                autoComplete="off"
                onChange={handleChange}
                value={id}
              />
            </div>
          </div>

          <Link to={`/card/${id}`} className="button button--big">
            Vyzvednout přáníčko
          </Link>
        </form>
      </main>
    </>
  );
};
