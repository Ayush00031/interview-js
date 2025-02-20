import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resposne = await fetch("");
      const data = resposne.json();
      setPosts(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>First Post:</h1>
      {posts.length > 0 ? <h2>{posts[0].title}</h2> : <p>Loading...</p>}
    </div>
  );
};

export default FetchData;
