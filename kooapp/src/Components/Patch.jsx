import React, { useState, useEffect } from "react";
const PeoplePost = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3004/Feeds`)
      .then(response => response.json())
      .then(posts => {
        setPosts(posts);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleLikeClick = (id) => {
    const updatedPosts = posts.map(post => {
      if (post.id === id) {
        return { ...post, Likes: post.Likes + 1 };
      }
      return post;
    });
    setPosts(updatedPosts);
    fetch(`http://localhost:3004/Feeds/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ Likes: updatedPosts.find(post => post.id === id).Likes })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to update likes count");
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <button onClick={() => handleLikeClick(post.id)}>Like</button>
          <p>Likes: {post.Likes}</p>
        </div>
      ))}
    </div>
  );
};

export default PeoplePost;
