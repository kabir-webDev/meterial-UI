import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Fetch() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data.results);
        setUser(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      Walah
      <h1>
        {user.map((human) => (
          <li>{human[0].gender}</li>
        ))}
      </h1>
    </div>
  );
}
