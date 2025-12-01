"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import mockUsers from "@/data/mockUsers";
import StoryThumbnail from "@/components/StoryThumbnail";
import { FaInstagram, FaHeart, FaPaperPlane, FaPlusSquare } from "react-icons/fa";

export default function Home() {
  const router = useRouter();
  const [viewedStories, setViewedStories] = useState({});

  // Load viewed stories from sessionStorage
  useEffect(() => {
    const stored = {};
    Object.keys(mockUsers).forEach((username) => {
      const viewed = JSON.parse(sessionStorage.getItem(username)) || [];
      stored[username] = viewed;
    });
    setViewedStories(stored);
  }, []);

  const handleClickStory = (username) => {
    router.push(`/stories/${username}?username=${username}`);
  };

  const handleAddStory = () => {
    const newStory = {
      id: Date.now(),
      type: "image",
      url: "https://picsum.photos/800/1200?random=" + Date.now(),
      thumbnail: "https://picsum.photos/300/400?random=" + Date.now(),
      duration: 5000,
      postedAt: new Date().toISOString(),
      viewers: [],
    };
    mockUsers["ashika"].stories.push(newStory);
    setViewedStories({ ...viewedStories });
  };

  return (
    <div style={{ background: "#000", minHeight: "100vh", color: "#fff" }}>
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          borderBottom: "1px solid #333",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <FaInstagram size={28} />
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>Instagram</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <div
            onClick={handleAddStory}
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30px",
              height: "30px",
              borderRadius: "5px",
              backgroundColor: "#444",
              color: "#fff",
            }}
            title="Add Story"
          >
            <FaPlusSquare size={20} />
          </div>
          <FaHeart size={24} style={{ cursor: "pointer" }} title="Likes" />
          <FaPaperPlane size={24} style={{ cursor: "pointer" }} title="Direct Messages" />
        </div>
      </nav>

      <div style={{ padding: "20px" }}>
        <h2 style={{ marginBottom: "15px" }}>Stories</h2>

        <div style={{ display: "flex", gap: "15px", overflowX: "auto", paddingBottom: "20px" }}>
          {/* Add Story Button */}
          <div
            onClick={handleAddStory}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "#444",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              fontSize: "30px",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            +
          </div>

          {/* User Stories */}
          {Object.values(mockUsers).map((user) => {
            const hasUnseen = user.stories.some(
              (story) => !viewedStories[user.username]?.includes(story.id)
            );
            return (
              <StoryThumbnail
                key={user.username}
                user={user}
                hasUnseen={hasUnseen}
                onClick={handleClickStory}
              />
            );
          })}
        </div>

        {/* Feed placeholder */}
        <div>
          <h2 style={{ marginTop: "30px", color: "#fff" }}>Suggested For You</h2>
          {Object.values(mockUsers).map((user, idx) => (
            <div
              key={idx}
              style={{
                margin: "20px 0",
                background: "#111",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", padding: "10px", gap: "10px" }}>
                <img
                  src={user.profilePic}
                  alt={user.username}
                  style={{ width: "35px", height: "35px", borderRadius: "50%" }}
                />
                <span style={{ color: "#fff", fontWeight: "bold" }}>{user.username}</span>
              </div>
              {user.stories.map((story) =>
                story.type === "image" ? (
                  <img
                    key={story.id}
                    src={story.url}
                    alt="story"
                    style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
                  />
                ) : (
                  <video
                    key={story.id}
                    src={story.url}
                    style={{ width: "100%", maxHeight: "400px" }}
                    autoPlay
                    muted
                    loop
                    controls
                  />
                )
              )}
              <p style={{ padding: "10px", color: "#aaa" }}>Description & comments in Instagram style...</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
