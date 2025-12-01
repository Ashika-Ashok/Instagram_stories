export interface User {
  id: number;
  name: string;
  username: string;
  profileImage: string;
  verified: boolean;
  followersCount?: number;
}

export interface StoryItem {
  id: number;
  type: "image" | "video";
  url: string;
  duration: number; // in ms
  postedAt: string; // ISO timestamp
  thumbnail: string; // for Open Graph preview
}

export interface StoryGroup {
  userId: number;
  stories: StoryItem[];
  isArchived?: boolean;
  isLive?: boolean;
}

export interface StoryViews {
  [storyId: number]: string[]; // list of usernames who viewed
}
