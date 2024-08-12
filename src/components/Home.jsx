import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllPosts();
  }, []);

  async function fetchAllPosts(limit = 100) {
    try {
      const response = await fetch(`http://localhost:5050/posts`);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  }

  function filterPosts(e) {
    const filter = e.target.value.toUpperCase();
    const filteredPosts = posts.filter((post) => post.name.toUpperCase().startsWith(filter));
    if (filteredPosts.length === 0) {
      alert("No Post found");
    } else {
      setPosts(filteredPosts);
    }
  }

  function handleDetailsClick(postId) {
    navigate("/Details/${postId}");
  }

  return (
    <div>
      <div className="my-4 w-full p-4">
        <input id="search" type="text" placeholder="Search" onChange={filterPosts} className="rounded-lg border-2 p-2 w-full" />
      </div>

      <ul id="postList" className="flex flex-wrap justify-center">
        {posts.map((post, index) => (
          <Card key={index} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
