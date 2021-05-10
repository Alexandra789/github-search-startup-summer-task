import './App.css';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import SearchNotFound from '../SearchNotFound/SearchNotFound';

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchNotFound/>
      {/* <Profile/> */}
    </div>
  );
}

export default App;
