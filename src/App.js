import { useState, useEffect } from "react";
import Header from "./component/Header";
import HomePage from "./component/HomePage";
import movieData from "./utils/data";
import WatchList from "./component/WatchList";
import SubNavbar from "./components/SubNavbar";
function App() {
  const [page, setPage] = useState("home");
  const [isWatchFill, setIsWatchFill] = useState(false);
  const [homeData, setHomeData] = useState([]);
  const [watchListData, setWatchListData] = useState([]);

  useEffect(() => {
    setHomeData(movieData);
  }, []);

  const filterMovies = (genre) => {
    const data =
      genre === "all" ? movieData : movieData.filter((movie) => movie.genres.includes(genre));
    setHomeData(data);
  };

  const addToList = (movie) => {
    if (watchListData.length < 5 ) {
      const updatedWatchlist = [...watchListData, movie];
      setWatchListData(updatedWatchlist);
    } else {
      setIsWatchFill(true);
    }
  };

  const checkIsInWatchList = (id) => {
    return watchListData.some((movie) => movie.id === id);
  };

  const removeMovie = (id) => {
    const newData = watchListData.filter((movie) => movie.id !== id);
    setWatchListData(newData);
  };

  return (
    <>
    <SubNavbar />     
      {/* <Header setPage={setPage} />
      {page === "home" ? (
        <HomePage
          isWatchFill={isWatchFill}
          setIsWatchFill={setIsWatchFill}
          homeData={homeData}
          filterMovies={filterMovies}
          checkIsInWatchList={checkIsInWatchList}
          addToList={addToList}
        />
      ) : (
        <WatchList watchListData={watchListData} removeMovie={removeMovie} />
      )} */}
    </>
  );
}
export default App;