import { useState } from 'react';
import './App.css';
import Form from './components/form';
import WatchList from './components/watch-list';

function App() {
  const [watchList, setWatchList] = useState([])
  const addWatch = (watch) => {
    let indexData = watchList.findIndex(el => el.city === watch.city)
    if (indexData !== -1) {
      return
    } else {
      setWatchList(() => [...watchList, watch])
    }
  }
  const deleteWatch = (city) => {
    const newWatchList = watchList.filter(el => el.city !== city)
    setWatchList(() => newWatchList)
  }
  return (
    <div className="App">
      <Form addWatch={addWatch}/>
      <WatchList watchList={watchList} deleteWatch={deleteWatch}/>
    </div>
  );
}

export default App;
