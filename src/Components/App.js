import React, { useEffect, useState } from "react";
import { TourList, Loading, NoTours } from "./index";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      setLoading(false);
      setTours(data);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTours = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
  };

  const refreshTours = () => {
    fetchTours();
  };

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if (tours.length === 0) {
    return (
      <div>
        <NoTours refreshPage={refreshTours} />
      </div>
    );
  }
  return (
    <div>
      <TourList tours={tours} handleChange={removeTours} />
    </div>
  );
}

export default App;
