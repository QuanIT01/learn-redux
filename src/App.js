import React from "react";
import "./App.css";
import HackerNews from "./components/HackerNews";

function App() {
  /**redux toolkit :
   *  const count = useSelector((state) => state.counter.count);
    <h2>The count from App is: {count}</h2>
      <Counter></Counter>
   */
  //const hits = useSelector((state) => state.news.hits);
  //console.log(hits);

  return (
    <div>
      <HackerNews></HackerNews>
    </div>
  );
}

export default App;
