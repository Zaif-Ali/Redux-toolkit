import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { iconSun } from "../Redux/Slices/iconSlice";
const Index = () => {
  const [Value, setValue] = useState(67);
  const value = useSelector((state) => state.icon);
  console.log(value);
  const dispatch = useDispatch();
  dispatch(iconSun());
  return (
    <div>
      <button>Click</button>
      <div>{Value}</div>
      <span>Hello</span>
    </div>
  );
};

export default Index;
