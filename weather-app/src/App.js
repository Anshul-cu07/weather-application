import logo from './logo.svg';
import './App.css';
import UserDetails from './user/UserDetails';
import Search from './search/search';
import CityInfo from './City_info/CityInfo';

function App() {
  return (
    <div className="App" >
      <div className='topsection'>
        <UserDetails />
        <Search />
      </div>
      <CityInfo />
    </div>
  );
}

export default App;
