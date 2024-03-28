import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { path } from "./utils/constant"
import { HomePage } from "./pages/HomePage"
import AuthModal from "./components/authForm/AuthModal"
import DetailPage from "./pages/DetailPage"
import SystemPage from "./pages/SystemPage"

const App = () =>
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index path={path.HOME} exact element={<HomePage />} />
          <Route path={path.LOGIN} element={<AuthModal />} />
          <Route path={path.ABC} element={<DetailPage />} />
          <Route path={path.SYSTEM} element={<SystemPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
