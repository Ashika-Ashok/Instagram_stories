import { StoryGroup } from "@/types/schema";

export const storyGroups: StoryGroup[] = [
  {
    userId: 1,
    stories: [
      {
        id: 101,
        type: "image",
        url: "/stories/riya1.jpg",
        duration: 5000,
        postedAt: "2025-11-21T10:15:00Z",
        thumbnail: "/stories/riya1-thumb.jpg"
      },
      {
        id: 102,
        type: "video",
        url: "/stories/riya2.mp4",
        duration: 7000,
        postedAt: "2025-11-21T10:20:00Z",
        thumbnail: "/stories/riya2-thumb.jpg"
      }
    ]
  },

  {
    userId: 2,
    stories: [
      {
        id: 201,
        type: "image",
        url: "/stories/karan1.jpg",
        duration: 4000,
        postedAt: "2025-11-21T08:40:00Z",
        thumbnail: "/stories/karan1-thumb.jpg"
      }
    ]
  },

  {
    userId: 3,
    stories: [
      {
        id: 301,
        type: "image",
        url: "/stories/aisha1.jpg",
        duration: 6000,
        postedAt: "2025-11-20T22:10:00Z",
        thumbnail: "/stories/aisha1-thumb.jpg"
      },
      {
        id: 302,
        type: "image",
        url: "/stories/aisha2.jpg",
        duration: 5000,
        postedAt: "2025-11-20T22:30:00Z",
        thumbnail: "/stories/aisha2-thumb.jpg"
      }
    ]
  }
];
