import { useContext, createContext, useState, useEffect } from "react";

export default function BoardProvider(props) {
  const [boardStyle, setBoardStyle] = useState({
    styleId: "",
    colorsArr: [],
    accessArr: [],
  });

  const steps = {
    STYLE: "Style",
    PALETTE: "Palette",
    ACCESSORIES: "Accesories",
    BOARD: "Board Details",
  };
  const [selectedStep, setSelectedStep] = useState(steps.STYLE);

  const setStyleId = function (styleId) {
    setBoardStyle((prev) => {
      return { ...prev, styleId };
    });
  };
  // TODO need to change the way to update colors
  const setColors = function (colors) {
    setBoardStyle((prev) => {
      return { ...prev, colors };
    });
  };
  // TODO need to create and and remove accessories helper functions
  const setAccessories = function (accessories) {
    setBoardStyle((prev) => {
      return { ...prev, accessories };
    });
  };

  const boardStyleData = {
    styleId: boardStyle.styleId,
    setStyleId,
    setColors,
    steps,
    selectedStep,
    setSelectedStep,
  };

  // We can use this component to wrap any content we want to share this context
  return (
    <boardCreateContext.Provider value={boardStyleData}>
      {props.children}
    </boardCreateContext.Provider>
  );
}

export const boardCreateContext = createContext();
