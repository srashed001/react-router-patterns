import { Switch, Route, Redirect } from "react-router-dom";
import ColorHomePage from "./ColorHomePage";
import AddNewColorForm from "./AddColorForm";
import ColorDetails from "./ColorDetails";
import { useState, useEffect } from "react";

const ColorRoutes = () => {
  const INITIAL_STATE = JSON.parse(localStorage.getItem("colors")) || [
    {
      name: "red",
      hexidecimal: "#ff0000",
    },
    {
      name: "green",
      hexidecimal: "#00fe00",
    },
    {
      name: "blue",
      hexidecimal: "#0000fe",
    },
  ];

  const [colors, setColors] = useState(INITIAL_STATE);

  useEffect(
    () => localStorage.setItem("colors", JSON.stringify(colors)),
    [colors]
  );

  const addColor = (newColor) => {
    setColors((colors) => [...colors, {...newColor}]);
  };
  return (
    <Switch>
      <Route exact path="/colors">
        <ColorHomePage colors={colors} />
      </Route>
      {colors.map((color) => (
        <Route path={`/colors/${color.name}`}>
          <ColorDetails key={color.name} color={color} />
        </Route>
      ))}
      <Route exact path="/colors/new">
        <AddNewColorForm addColor={addColor} />
      </Route>
      <Redirect to="/colors" />
    </Switch>
  );
};

export default ColorRoutes;
