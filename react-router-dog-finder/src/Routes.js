import { Switch, Route, Redirect } from "react-router-dom";
import DogDetails from "./DogDetails";
import DogList from "./DogList";

const Routes = ({ dogs }) => {
  return (
    <Switch>
      <Route exact path="/dogs">
        <DogList dogs={dogs} />
      </Route>
      {dogs.map((dog) => {
        return (
          <Route path={`/dogs/${dog.name.toLowerCase()}`}>
            <DogDetails dog={dog}/>
          </Route>
        );
      })}
      <Redirect to="/dogs" />
    </Switch>
  );
};

export default Routes;
