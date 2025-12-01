const mockUsers = {
    ashika1265: {
  username: "ashika1265",
  profilePic: "https://i.pravatar.cc/150?img=32",
  stories: [
    {
      id: 1,
      type: "image",
      url: "https://picsum.photos/id/1020/800/1200", // default lavender scenery
      thumbnail: "https://picsum.photos/id/1015/300/400",
      duration: 5000,
      postedAt: "2025-01-01T10:00:00Z",
      viewers: ["john", "rahul", "kavya", "sneha", "arjun"]
    }
  ]
},
  ashika: {
    username: "ashika",
    profilePic: "https://i.pravatar.cc/150?img=35",
    stories: [
      {
        id: 1,
        type: "image",
        url: "https://picsum.photos/id/1020/800/1200",
        thumbnail: "https://picsum.photos/id/1015/300/400",
        duration: 5000,
        postedAt: "2025-01-01T10:00:00Z",
        viewers: ["rahul", "john"]
      },
      {
        id: 2,
        type: "image",
        url: "https://picsum.photos/id/1021/800/1200",
        thumbnail: "https://picsum.photos/id/1016/300/400",
        duration: 8000,
        postedAt: "2025-01-02T08:00:00Z",
        viewers: ["john"]
      }
    ]
  },

  rahul: {
    username: "rahul",
    profilePic: "https://i.pravatar.cc/150?img=15",
    stories: [
      {
        id: 1,
        type: "image",
        url: "https://picsum.photos/id/1020/800/1200",
        thumbnail: "https://picsum.photos/id/1020/300/400",
        duration: 5000,
        postedAt: "2025-01-03T10:00:00Z",
        viewers: ["ashika"]
      },
      {
        id: 2,
        type: "image",
        url: "https://picsum.photos/id/1021/800/1200",
        thumbnail: "https://picsum.photos/id/1021/300/400",
        duration: 5000,
        postedAt: "2025-01-04T12:00:00Z",
        viewers: []
      }
    ]
  },

  john: {
    username: "john",
    profilePic: "https://i.pravatar.cc/150?img=7",
    stories: [
      {
        id: 1,
        type: "image",
        url: "https://picsum.photos/id/1020/800/1200",
        thumbnail: "https://picsum.photos/id/1031/300/400",
        duration: 5000,
        postedAt: "2025-01-05T08:00:00Z",
        viewers: ["ashika", "rahul"]
      },
      {
        id: 2,
        type: "image",
        url: "https://picsum.photos/id/1020/800/1201",
        thumbnail: "https://picsum.photos/id/1032/300/400",
        duration: 100,
        postedAt: "2025-01-06T14:00:00Z",
        viewers: []
      }
    ]
  },

  kavya: {
    username: "kavya",
    profilePic: "https://i.pravatar.cc/150?img=25",
    stories: [
      {
        id: 1,
        type: "image",
        url: "https://picsum.photos/id/1020/800/1200",
        thumbnail: "https://picsum.photos/id/1040/300/400",
        duration: 5000,
        postedAt: "2025-01-07T10:00:00Z",
        viewers: ["ashika"]
      }
    ]
  },

  sneha: {
    username: "sneha",
    profilePic: "https://i.pravatar.cc/150?img=30",
    stories: [
      {
        id: 1,
        type: "image",
        url: "https://picsum.photos/id/1020/800/1200",
        thumbnail: "https://picsum.photos/id/1050/300/400",
        duration: 5000,
        postedAt: "2025-01-08T08:00:00Z",
        viewers: []
      },
    ]
  },

  arjun: {
    username: "arjun",
    profilePic: "https://i.pravatar.cc/150?img=35",
    stories: [
      {
        id: 1,
        type: "image",
        url: "https://picsum.photos/id/1060/800/1200",
        thumbnail: "https://picsum.photos/id/1060/300/400",
        duration: 5000,
        postedAt: "2025-01-10T10:00:00Z",
        viewers: []
      }
    ]
  },

  meera: {
    username: "meera",
    profilePic: "https://i.pravatar.cc/150?img=40",
    stories: [
      {
        id: 1,
        type: "video",
        url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        thumbnail: "https://picsum.photos/id/1070/300/400",
        duration: 8000,
        postedAt: "2025-01-11T14:00:00Z",
        viewers: ["ashika"]
      }
    ]
  },

  vivek: {
    username: "vivek",
    profilePic: "https://i.pravatar.cc/150?img=45",
    stories: [
      {
        id: 1,
        type: "image",
        url: "https://picsum.photos/id/1080/800/1200",
        thumbnail: "https://picsum.photos/id/1080/300/400",
        duration: 5000,
        postedAt: "2025-01-12T09:00:00Z",
        viewers: []
      }
    ]
  },

  
  
};

export default mockUsers;
