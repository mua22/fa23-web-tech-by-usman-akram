import axios from "axios";
import React, { useEffect, useState } from "react";
const ListUniversities = () => {
  const [universities, setUniversities] = useState([]);
  const getData = () => {
    axios
      .get("http://localhost:5000/api/universities")
      .then((res) => {
        // console.log(res.data);
        setUniversities(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    console.log("Use Effect Called");
  });
  useEffect(() => {
    getData();
    return () => {
      console.log("Component Unmounted");
    };
  }, []);
  return (
    <div>
      <h2>Universities</h2>
      <button onClick={getData}>Fetch Data</button>
      {universities.map((u) => (
        <div>
          <h4>{u.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default ListUniversities;
