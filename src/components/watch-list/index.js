import Watch from "../watch";
import './style.css'

export default function WatchList({watchList, deleteWatch}) {

  return (
    <ul className="watch-list">
      {watchList?.map((el, i) => (<li key={el.city + i}>
        <button onClick={() => deleteWatch(el.city)}>x</button>
        <h2>{el.city}</h2>
        <Watch bias={el['time-zone']}/>
      </li>))}
    </ul>
  )
}