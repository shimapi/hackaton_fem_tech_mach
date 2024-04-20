import React, { useState, useEffect } from "react";
import axios from "axios";

function Conextion() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost/puerto");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Conexión a Backend desde React</h1>
      {data ? (
        <div>
          <h2>¡Datos recibidos del backend!</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default Conextion;
