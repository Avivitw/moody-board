import { useContext, createContext, useState, useEffect } from "react";

export default function BoardProvider(props) {
  const [boardStyle, setBoardStyle] = useState({
    step: 0,
    styleId: "",
    colorsArr: [],
    accessArr: [],
  });

  const setStyleId = function (id) {
    setBoardStyle((prev) => {
      return { ...prev, id };
    });
  };

  const setColors = function (colors) {
    setBoardStyle((prev) => {
      return { ...prev, colors };
    });
  };

  const setAcess = function (accessories) {
    setBoardStyle((prev) => {
      return { ...prev, accessories };
    });
  };

  const boardStyleData = {
    setBoardStyle,
    boardStyle,
  };

  // We can use this component to wrap any content we want to share this context
  return (
    <boardContext.Provider value={boardStyleData}>
      {props.children}
    </boardContext.Provider>
  );
}

export const searchContext = createContext();
