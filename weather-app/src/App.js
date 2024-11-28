import logo from "./logo.svg";
import "./App.css";
import UserDetails from "./user/UserDetails";
import Search from "./search/search";
import CityInfo from "./City_info/CityInfo";
import Subscribe from "./Subscribe/Subscribe";
import Forecast from "./Forecast/Forecast";
import Cities from "./cities/Cities";
function App() {
  return (
    <div className="App">
      <div className="topsection">
        <UserDetails />
        <Search />
      </div>
      <div className="second">
        <CityInfo />
      </div>
      <Subscribe />
      <Forecast />
      <Cities />
    </div>
  );
}

export default App;
