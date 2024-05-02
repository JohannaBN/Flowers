import React from "react";
import { FlowersList } from "components/FlowersList";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <div>
      <Header />
      <FlowersList />
    </div>
  );
};
