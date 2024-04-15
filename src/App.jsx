import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { path } from "./utils/constant"
import { HomePage } from "./pages/HomePage"
import AuthModal from "./components/authForm/AuthModal"
import DetailPage from "./pages/DetailPage"
import SystemPage from "./pages/SystemPage"
import IntroducePage from "./pages/IntroducePage"

const App = () =>
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index path={path.HOME} exact element={<HomePage />} />
          <Route path={path.LOGIN} element={<AuthModal />} />
          <Route path={path.PRODUCT_DETAIL} element={<DetailPage />} />
          <Route path={path.SYSTEM} element={<SystemPage />} />
          <Route path={path.INTRODUCE} element={<IntroducePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
