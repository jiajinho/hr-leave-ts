import { User, Department } from './types';

const departments: Department[] = [
  {
    id: "1",
    display: 'Finance'
  },
  {
    id: "2",
    display: 'SCM'
  },
  {
    id: "3",
    display: 'Accounting'
  },
  {
    id: "4",
    display: 'Software'
  },
  {
    id: "5",
    display: 'Warehouse'
  },
  {
    id: "6",
    display: 'HR'
  },
  {
    id: "7",
    display: 'CRM'
  },
  {
    id: "8",
    display: 'Marketing'
  }
];

const pendingUsers: User[] = [
  {
    id: "1",
    name: "Jerry Wilson",
    type: "casual",
    start: 1650984424,
    end: 1650984424,
    duration: 1,
    reason: "This is a example reason",
    comments: "",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg"
  },
  {
    id: "2",
    name: "Simon Biles",
    type: "casual",
    start: 1650984424,
    end: 1650984424,
    duration: 1,
    reason: "This is a example reason",
    comments: "",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/1.jpg"
  },
  {
    id: "3",
    name: "Jasmine Tookes",
    type: "sick",
    start: 1650984424,
    end: 1650984424,
    duration: 1,
    reason: "This is a example reason",
    comments: "",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/2.jpg"
  },
  {
    id: "4",
    name: "Randy Brandy",
    type: "emergency",
    start: 1650984424,
    end: 1650984424,
    duration: 1,
    reason: "This is a example reason",
    comments: "",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/3.jpg"
  },
  {
    id: "5",
    name: "Elon Musk",
    type: "casual",
    start: 1650984424,
    end: 1650984424,
    duration: 1,
    reason: "This is a example reason",
    comments: "",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/14.jpg"
  },
  {
    id: "6",
    name: "Larry Boebert",
    type: "casual",
    start: 1650984424,
    end: 1650984424,
    duration: 1,
    reason: "This is a example reason",
    comments: "",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/30.jpg"
  },
  {
    id: "7",
    name: "Hubart Higgs",
    type: "sick",
    start: 1650984424,
    end: 1650984424,
    duration: 1,
    reason: "This is a example reason",
    comments: "",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/31.jpg"
  },
  {
    id: "8",
    name: "Alexandra James",
    type: "sick",
    start: 1650984424,
    end: 1650984424,
    duration: 1,
    reason: "This is a example reason",
    comments: "",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/45.jpg"
  }
];

const approvedUsers: User[] = [
  {
    id: "1",
    name: "Jerry Hitchiker",
    type: "casual",
    start: 1650984424,
    end: 1650984424,
    duration: 1,
    reason: "This is a example reason",
    comments: "Approved reason",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/80.jpg"
  },
  {
    id: "2",
    name: "Simon Casey",
    type: "casual",
    start: 1650984424,
    end: 1650984424,
    duration: 1,
    reason: "This is a example reason",
    comments: "Another reason",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/65.jpg"
  },
  {
    id: "3",
    name: "Jasmine Palvin",
    type: "sick",
    start: 1650984424,
    end: 1650984424,
    duration: 1,
    reason: "This is a example reason",
    comments: "",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/56.jpg"
  },
  {
    id: "4",
    name: "Randy Ronaldo",
    type: "emergency",
    start: 1650984424,
    end: 1650984424,
    duration: 1,
    reason: "This is a example reason",
    comments: "",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/47.jpg"
  },
  {
    id: "5",
    name: "Elon Eddie",
    type: "casual",
    start: 1650984424,
    end: 1650984424,
    duration: 1,
    reason: "This is a example reason, testing",
    comments: "",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/72.jpg"
  },
  {
    id: "6",
    name: "Larry Barry",
    type: "casual",
    start: 1650984424,
    end: 1650984424,
    duration: 1,
    reason: "This is a example reason",
    comments: "",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/91.jpg"
  },
  {
    id: "7",
    name: "Hubart Helcurt",
    type: "sick",
    start: 1650984424,
    end: 1650984424,
    duration: 1,
    reason: "This is a example reason",
    comments: "",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/20.jpg"
  },
  {
    id: "8",
    name: "Alexandra Amy",
    type: "sick",
    start: 1650984424,
    end: 1650984424,
    duration: 1,
    reason: "This is a example reason",
    comments: "No comments",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/67.jpg"
  }
];

export default {
  departments,
  pendingUsers,
  approvedUsers
}