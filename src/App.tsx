import './App.scss';
import {Header} from "./components/Header/Header";
import {useState} from "react";
import {Routes , Route } from "react-router-dom";
import { ThemeContext } from './context/themeContext';
import {getDefaultTheme} from "./utils/theme.utils";
import {BrowserRouter} from "react-router-dom";
import {AgeCheckScreen} from "./screens/AgeCheck/AgeCheckScreen";
import {HonestCheckScreen} from "./screens/HonestCheck/HonestCheckScreen";
import {HONEST_CHECK_ROUTE, TEST_BEGINNING_ROUTE} from "./constants/routes.constants";
import {TestBeginningScreen} from "./screens/TestBeginningScreen/TestBeginningScreen";
import {ProgressBar} from "./components/ProgressBar/ProgressBar";

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
                      </Routes>
                  </div>
              </div>
          </BrowserRouter>
      </ThemeContext.Provider>
  );
}

export default App;
