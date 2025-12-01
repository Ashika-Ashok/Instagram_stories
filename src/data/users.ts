import { User } from "@/types/schema";

export const users: User[] = [
  {
    id: 1,
    name: "Riya Sharma",
    username: "riya_sharma",
    profileImage: "/profiles/riya.jpg",
    verified: true,
    followersCount: 28400,
  },
  {
    id: 2,
    name: "Karan Verma",
    username: "karan_v",
    profileImage: "/profiles/karan.jpg",
    verified: false,
    followersCount: 9200,
  },
  {
    id: 3,
    name: "Aisha Khan",
    username: "aishaa_k",
    profileImage: "/profiles/aisha.jpg",
    verified: false,
    followersCount: 1500,
  }
];
