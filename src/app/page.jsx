"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import mockUsers from "@/data/mockUsers";
import StoryThumbnail from "@/components/StoryThumbnail";
import {
  FaInstagram,
  FaHeart,
  FaPaperPlane,
  FaPlusSquare,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";

export default function Home() {
  const router = useRouter();
  const [viewedStories, setViewedStories] = useState({});
  const [videos, setVideos] = useState([
    { file: "video1.mp4", title: "Traditional Dress", username: "channel1" },
    { file: "video2.mp4", title: "Dance, Full Energy", username: "channel2" },
    { file: "video3.mp4", title: "Kodagu Style", username: "channel3" },
    { file: "video4.mp4", title: "Happy Birthday Deepz", username: "channel4" },
  ]);
  const videoRefs = useRef([]);
  const [muted, setMuted] = useState(true);

  // Load viewed stories
  useEffect(() => {
    const stored = {};
    Object.keys(mockUsers).forEach((username) => {
      const viewed = JSON.parse(sessionStorage.getItem(username)) || [];
      stored[username] = viewed;
    });
    setViewedStories(stored);
  }, []);

  const handlePlay = (index) => {
    videoRefs.current.forEach((vid, i) => {
      if (i !== index && vid) vid.pause();
    });
  };

  const handleClickStory = (username) => {
    router.push(`/stories/${username}`);
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

      {/* Stories Carousel */}
      <div style={{ padding: "20px" }}>
        <h1 style={{ marginBottom: "20px" }}>Stories</h1>

        <div
          style={{
            display: "flex",
            gap: "15px",
            overflowX: "auto",
            paddingBottom: "20px",
          }}
        >
          {/* REMOVED the big + icon here */}

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

        {/* Feed Section */}
        <div style={{ marginTop: "30px" }}>
          <h2
            style={{
              marginBottom: "15px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Suggested for You
          </h2>

          {videos.map((video, index) => (
            <div
              key={index}
              style={{
                marginBottom: "30px",
                background: "#111",
                borderRadius: "10px",
                overflow: "hidden",
                maxWidth: "500px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <div style={{ position: "relative" }}>
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={`/videos/${video.file}`}
                  controls
                  muted={muted}
                  onPlay={() => handlePlay(index)}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    maxHeight: "80vh",
                    objectFit: "contain",
                  }}
                />

                {/* Overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    right: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span style={{ color: "#fff", fontWeight: "bold" }}>
                    {video.username}
                  </span>
                  <button
                    style={{
                      background: "#3897f0",
                      border: "none",
                      borderRadius: "5px",
                      color: "#fff",
                      padding: "5px 10px",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Follow
                  </button>
                </div>

                {/* Mute Button */}
                <button
                  onClick={() => setMuted(!muted)}
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    background: "#000a",
                    border: "none",
                    borderRadius: "50%",
                    padding: "8px",
                    cursor: "pointer",
                    color: "#fff",
                  }}
                >
                  {muted ? <FaVolumeMute /> : <FaVolumeUp />}
                </button>
              </div>

              <div style={{ padding: "10px" }}>
                <p style={{ color: "#ccc", marginBottom: "5px" }}>
                  {video.title}
                </p>
                <p style={{ color: "#888", fontSize: "14px" }}>
                  123k likes • 45 comments
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
