"use client";

import { useParams } from "next/navigation";
import StoryViewer from "@/components/StoryViewer";
import mockUsers from "@/data/mockUsers";

export default function Page() {
  const params = useParams();
  const username = params.username; // read from dynamic route

  if (!username) {
    return <div style={{ padding: "20px", color: "white" }}>❌ No username provided</div>;
  }

  const user = mockUsers[username];

  if (!user) {
    return (
      <div style={{ padding: "20px", color: "white", fontSize: "20px" }}>
        ❌ User not found
      </div>
    );
  }

  return (
    <div style={{ background: "black", height: "100vh" }}>
      <StoryViewer initialUsername={username} />
    </div>
  );
}
