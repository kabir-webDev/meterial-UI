import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Fetch() {
  const [posts, setPosts] = useState("");
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => {
  //       console.log(res.data.results);
  //       setUser(res.data.results);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  useEffect(() => {
    fetch("https://api.randomuser.me/")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data); // new
        console.log(data);
      });
  }, []);

  return (
    <div>
      {/* Walah
      <h1>
        {user.map((human) => (
          <li>{human[0].gender}</li>
        ))}
      </h1> */}
      <h1>Cool app</h1>
      {posts.map((item) => (
        <ul>
          <h2>{item.email}</h2>
        </ul>
      ))}
    </div>
  );
}
