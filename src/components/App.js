import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import fetchTours from "./ToursData";

const App = () => {

  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  useEffect(() => {
    setTours(fetchTours)
    setLoading(false)
  }, [])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const refreshTour = () => {
    setLoading(true)
    setTours(fetchTours)
    setLoading(false)
  }

  return (
    <div id="main">
    <h1>Tours</h1>
      {loading ? (
        <Loading />
      ) : tours.length === 0 ? (
        <div>
          <p>No tours left</p>
          <button onClick={refreshTour}>Refresh</button>
        </div>
      ) : (
        <Tours tours={tours} removeTour={removeTour} />
      )}
    </div>
  );
}
export default App;
