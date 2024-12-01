import logo from "./logo.svg";
import "./App.css";
import UserDetails from "./user/UserDetails";
import Search from "./search/search";
import CityInfo from "./City_info/CityInfo";
import Subscribe from "./Subscribe/Subscribe";
import Forecast from "./Forecast/Forecast";
import Cities from "./cities/Cities";
import Sidebar from "./Sidebar/Sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function App() {

  
  return (
    <div className="main-page">
      <div>
        <Sidebar />
      </div>
      <div>
        <div className="topsection">
          <UserDetails />
          <Search />
        </div>
        <div className="second">
          <CityInfo />
        </div>

        <div className="third">
          <Subscribe />
          <Forecast />
          <Cities />
        </div>
      </div>
    </div>
  );
}

export default App;
