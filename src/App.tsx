import './App.scss';
import {Header} from "./components/Header/Header";
import {useState} from "react";
import {Routes , Route } from "react-router-dom";
import { ThemeContext } from './context/themeContext';
import {getDefaultTheme} from "./utils/theme.utils";
import {BrowserRouter} from "react-router-dom";
import {AgeCheckScreen} from "./screens/onboarding/AgeCheck/AgeCheckScreen";
import {HonestCheckScreen} from "./screens/onboarding/HonestCheck/HonestCheckScreen";
import {
    CONFIDENT_CHECK_ROUTE,
    CURRENT_RELATIONSHIP_ROUTE,
    HONEST_CHECK_ROUTE,
    TEST_BEGINNING_ROUTE
} from "./constants/routes.constants";
import {TestBeginningScreen} from "./screens/onboarding/TestBeginningScreen/TestBeginningScreen";
import {ProgressBar} from "./components/ProgressBar/ProgressBar";
import {ConfidentCheckScreen} from "./screens/onboarding/ConfidentCheckScreen/ConfidentCheckScreen";
import {CurrentRelationshipScreen} from "./screens/onboarding/currentRelationshipScreen/CurrentRelationshipScreen";

function App() {
    const [theme, setTheme] = useState(getDefaultTheme);

  return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
          <BrowserRouter>
              <div className={`app ${theme}`}>
                  <div className={`appContainer ${theme}`}>
                      <div>
                          <Header />
                          <ProgressBar />
                      </div>
                      <Routes>
                          <Route path="/" element={<AgeCheckScreen/> } />
                          <Route path={HONEST_CHECK_ROUTE} element={<HonestCheckScreen/> } />
                          <Route path={TEST_BEGINNING_ROUTE} element={<TestBeginningScreen/> } />
                          <Route path={CONFIDENT_CHECK_ROUTE} element={<ConfidentCheckScreen/> } />
                          <Route path={CURRENT_RELATIONSHIP_ROUTE} element={<CurrentRelationshipScreen/> } />
                      </Routes>
                  </div>
              </div>
          </BrowserRouter>
      </ThemeContext.Provider>
  );
}

export default App;
