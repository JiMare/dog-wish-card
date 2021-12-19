import React from "react";
import { Title } from "./Title";
import { ActionCard } from "./ActionCard";
import { Nav } from "./Nav";

export const Home = () => {
  return (
    <>
      <Nav />
      <Title title="Vánoční přáníčko" />
      <main className="actions">
        <ActionCard
          actionPath="/create"
          actionName="Vytvořit"
          actionText="Vytvoř si přáníčko na míru a&nbsp;pošli ho svým blízkým."
        />
        <ActionCard
          actionPath="/get"
          actionName="Vyzvednout"
          actionText="Zadej kód a vyzvedni si svoje vánoční přáníčko."
        />
      </main>
    </>
  );
};
