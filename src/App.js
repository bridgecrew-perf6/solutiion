import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
import "./components/Common/Common.scss";

import { Route, Switch } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService/TermsOfService";

console.log('app loaded')
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-service" component={TermsOfService} />
      </Switch>
    </div>
  );
}

export default App;
