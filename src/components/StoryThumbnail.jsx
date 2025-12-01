"use client";

export default function StoryThumbnail({ user, hasUnseen, onClick }) {
  return (
    <div
      onClick={() => onClick(user.username)}
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginRight: "10px",
      }}
    >
      <div
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          padding: "2px",
          background: hasUnseen
            ? "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)"
            : "gray",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={user.profilePic}
          alt={user.username}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            border: "2px solid #000",
          }}
        />
      </div>
      <span style={{ marginTop: "5px", fontSize: "12px" }}>{user.username}</span>
    </div>
  );
}
