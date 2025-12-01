"use client";

import { useState, useEffect, useRef } from "react";
import mockUsers from "@/data/mockUsers"; // your mockUsers file

export default function StoryViewer({ initialUsername = "ashika1265" }) {
  const userList = Object.keys(mockUsers);
  const [currentUserIndex, setCurrentUserIndex] = useState(
    Math.max(userList.indexOf(initialUsername), 0)
  );
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [mediaLoaded, setMediaLoaded] = useState(false);
  const [showViewers, setShowViewers] = useState(false);
  const progressRef = useRef(null);

  const currentUser = mockUsers[userList[currentUserIndex]];
  const stories = currentUser.stories;
  const lastStoryIndex = stories.length - 1;

  // Progress animation
  useEffect(() => {
    if (!mediaLoaded) return;
    setProgress(0);
    const duration = stories[currentStoryIndex].duration || 5000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const percent = Math.min((elapsed / duration) * 100, 100);
      setProgress(percent);

      if (percent < 100) {
        progressRef.current = requestAnimationFrame(animate);
      } else {
        handleNext();
      }
    };

    progressRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(progressRef.current);
  }, [currentStoryIndex, mediaLoaded]);

  const handleNext = () => {
    cancelAnimationFrame(progressRef.current);
    if (currentStoryIndex < lastStoryIndex) {
      setCurrentStoryIndex(currentStoryIndex + 1);
      setMediaLoaded(false);
      setProgress(0);
    } else {
      const nextUserIndex = (currentUserIndex + 1) % userList.length;
      setCurrentUserIndex(nextUserIndex);
      setCurrentStoryIndex(0);
      setMediaLoaded(false);
      setProgress(0);
    }
  };

  const handlePrev = () => {
    cancelAnimationFrame(progressRef.current);
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
      setMediaLoaded(false);
      setProgress(0);
    } else {
      const prevUserIndex = (currentUserIndex - 1 + userList.length) % userList.length;
      const prevUser = mockUsers[userList[prevUserIndex]];
      setCurrentUserIndex(prevUserIndex);
      setCurrentStoryIndex(prevUser.stories.length - 1);
      setMediaLoaded(false);
      setProgress(0);
    }
  };

  const currentStory = stories[currentStoryIndex];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Story */}
      {currentStory.type === "image" ? (
        <img
          src={currentStory.url}
          alt="story"
          style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "cover" }}
          onLoad={() => setMediaLoaded(true)}
        />
      ) : (
        <video
          src={currentStory.url}
          style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
          autoPlay
          muted
          onLoadedData={() => setMediaLoaded(true)}
        />
      )}

      {/* Progress Bar */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          right: "10px",
          display: "flex",
          gap: "5px",
        }}
      >
        {stories.map((story, idx) => (
          <div
            key={story.id}
            style={{
              flex: 1,
              height: "4px",
              backgroundColor: "rgba(255,255,255,0.3)",
              borderRadius: "2px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width:
                  idx === currentStoryIndex
                    ? `${progress}%`
                    : idx < currentStoryIndex
                    ? "100%"
                    : "0%",
                height: "100%",
                backgroundColor: "white",
                transition:
                  idx === currentStoryIndex ? "none" : "width 0.3s linear",
              }}
            />
          </div>
        ))}
      </div>

      {/* Tap areas */}
      <div
        onClick={handlePrev}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "30%",
          cursor: "pointer",
        }}
      />
      <div
        onClick={handleNext}
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "30%",
          cursor: "pointer",
        }}
      />

      {/* Profile photo ONLY (NO + icon now) */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "10px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div style={{ position: "relative" }}>
          <img
            src={currentUser.profilePic}
            alt="profile"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              border: "2px solid #fff",
            }}
            onClick={() => setShowViewers(true)}
          />
        </div>

        <span style={{ color: "white", fontWeight: "bold" }}>
          {currentUser.username}
        </span>
      </div>

      {/* Viewers List */}
      {showViewers && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            color: "white",
            zIndex: 10,
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>Viewed by</h2>
          {currentStory.viewers.map((viewer, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "10px",
                width: "100%",
                maxWidth: "300px",
              }}
            >
              <img
                src={`https://i.pravatar.cc/150?img=${idx + 10}`}
                alt={viewer}
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
              <span>{viewer}</span>
            </div>
          ))}
          <button
            onClick={() => setShowViewers(false)}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#0095f6",
              border: "none",
              borderRadius: "5px",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
