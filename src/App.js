import { Switch, Route } from "react-router-dom";
import LandingPageLayout from "./layouts/LandingPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Switch>
      <Route path="/">
        <LandingPageLayout heading="Tailwind CSS">
          <HomePage />
        </LandingPageLayout>
      </Route>
    </Switch>
  );
};

export default App;
