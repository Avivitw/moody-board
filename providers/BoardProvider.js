import { useContext, createContext, useState, useEffect } from "react";

export default function BoardProvider(props) {
  const [boardStyle, setBoardStyle] = useState({
    styleId: "",
    colorsArr: [],
    accessArr: [],
  });

  const [selectedStep, setSelectedStep] = useState(["0", "1", "2", "3"]);

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
