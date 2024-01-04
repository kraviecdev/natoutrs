import Card from "../components/Card/index.jsx";
import customFetch from "../utils/customFetch.js";
import { useEffect, useState } from "react";

const Overview = () => {
  const [tours, setTours] = useState([]);

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
        console.error(error.statusText);
      }
    };

    fetchAllTours();
  }, []);

  return (
    <main className="main">
      <div className="card-container">
        {tours && tours.map((tour, index) => <Card key={index} tour={tour} />)}
      </div>
    </main>
  );
};

export default Overview;
