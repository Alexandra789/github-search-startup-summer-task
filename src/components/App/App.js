import './App.css';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import Repository from '../Repository/Repository';
import SearchResult from '../SearchResult/SearchResult';
import { useState } from 'react';

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const [reposInfo, setReposInfo] = useState([[], [], []]);
  const [searchResult, setSearchResult] = useState(false);
  const [searchNotFound, setSearchNotFound] = useState(false);
  const [loader, setLoader] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  console.log(userInfo);
  // console.log(reposInfo);

  return (
    <div className="App">
      <Header setUserInfo={setUserInfo} setSearchNotFound={setSearchNotFound} setReposInfo={setReposInfo} setSearchResult={setSearchResult} setLoader={setLoader} />
      <SearchResult loader={loader} searchResult={searchResult} searchNotFound={searchNotFound} />
      <div className={loader ? "loader-wrapper" : 'd-none'}>
        <div className="loader" ></div>
      </div>
      <div className={userInfo  && !loader ? "d-flex flex-wrap" : "d-none"}>
        <Profile userInfo={userInfo} />
        <Repository reposInfo={reposInfo} currentPage={currentPage} setCurrentPage={setCurrentPage} userInfo={userInfo}/>
        {/* <ReactPaginate/> */}
      </div>

    </div>
  );
}

export default App;
