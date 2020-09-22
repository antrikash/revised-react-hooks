import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchingData = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, SetIdFromButtonClick] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);

  const handleClick = () => {
    SetIdFromButtonClick(id);
  };

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" value={idFromButtonClick} onClick={handleClick}>
        Fetch Data
      </button>
      <div>{post.title}</div>
      {/* {post.map((elem) => (
        <li key={elem.id}>{elem.title}</li>
      ))} */}
    </div>
  );
};

export default FetchingData;
