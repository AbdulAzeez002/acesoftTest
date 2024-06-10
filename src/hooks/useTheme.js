import { useState } from "react";
// import {useAppSelector} from 'react-redux'
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/slice";

const useTheme = () => {
  const dipatch = useDispatch();
  const themes = useSelector((state) => state.themes.theme);
  
  const onToggleTheme = () => {
    dipatch(toggleTheme());
  };

  return { themes, onToggleTheme };
};

export default useTheme;
