import "./App.css";
import HomePage from "./containers/HomeTemplate/HomePage";
import AboutPage from "./containers/HomeTemplate/AboutPage";
import ListMoviePage from "./containers/HomeTemplate/ListMoviePage";
import PageNotFound from "./containers/PageNotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./containers/HomeTemplate/_components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {/* <HomePage />
      <AboutPage />
      <ListMoviePage /> */}

        {/* Sử dụng bộ định tuyến Route */}
        {/* Trang chủ - localhost:3000 */}
        <Route exact path="/" component={HomePage} />

        {/* Trang about - localhost:3000/about */}
        <Route path="/about" component={AboutPage} />

        {/* Trang ListMoviePage - localhost:3000/list-movie */}
        <Route path="/list-movie" component={ListMoviePage} />

        {/* Trang không tồn tại nằm cuối */}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
