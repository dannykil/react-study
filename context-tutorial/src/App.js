import React from "react";
import Colorbox from "./components/Colorbox";
import SelectColors from "./components/SelectColors";
import { ColorProvider } from "./contexts/color";

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <Colorbox />
      </div>
    </ColorProvider>
  );
};

export default App;
