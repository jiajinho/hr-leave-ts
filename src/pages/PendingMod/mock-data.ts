import type { User } from "./types";

const pending: User[] = [
  {
    id: "c83bf53a-ef1d-464f-9d30-cc676a7e5dc8",
    username: "John Doe",
    supervisor: "Floyd Rich",
    start: 1652236608,
    end: 1652236608,
    type: "Medical",
    duration: 3,
    reason: "Medical checkup schedule",
    comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, vel!",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
    status: "approved"
  },
  {
    id: "b0f1b56c-b7ae-4de7-9ebb-647ba132c7c2",
    username: "Richard Hoss",
    supervisor: "Floyd Rich",
    start: 1652236608,
    end: 1652236608,
    type: "Medical",
    duration: 2,
    reason: "Medical checkup schedule",
    comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, vel!",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/74.jpg",
    status: "approved"
  }
];

export default pending;