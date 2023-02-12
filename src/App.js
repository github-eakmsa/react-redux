
// import './App.css';
import { add, sub } from "./actions/";
import { useSelector, useDispatch } from "react-redux";

function App() {

const counter = useSelector(state => state.counter)
const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <h1>counter: {counter}</h1>
        <button onClick={()=>dispatch(sub())}>- sub</button>
        <button onClick={()=>dispatch(add())}>+ add</button>
      </header>
    </div>
  );
}

export default App;
