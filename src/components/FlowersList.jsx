import React, { useState, useEffect } from "react";

export const FlowersList = () => {
  const [flowers, setFlowers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://project-express-api-d46hrd5loa-lz.a.run.app/flowers")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not get flower data");
        }
        return response.json();
      })
      .then((data) => {
        setFlowers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Flowers List</h1>
      <ul>
        {flowers.map((flower) => (
          <li key={flower.id}>{flower.name}</li>
        ))}
      </ul>
    </div>
  );
};
