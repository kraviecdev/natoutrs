import Card from "../components/Card/index.jsx";
import customFetch from "../utils/customFetch.js";
import { useEffect, useState } from "react";

const Overview = () => {
  const [tours, setTours] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllTours = async () => {
      try {
        const {
          data: {
            data: { data: results },
          },
        } = await customFetch.get("/tours");

        if (results) {
          setTours(results);
        }
      } catch (error) {
        setError(error.statusText);
      }
    };

    fetchAllTours();
  }, []);

  console.log(tours);

  return (
    <div className="card-container">
      {tours && tours.map((tour, index) => <Card key={index} tour={tour} />)}
    </div>
  );
};

export default Overview;
