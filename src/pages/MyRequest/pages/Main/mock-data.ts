import { Status, Type, Schema } from './types';

export default <Schema[]>[
  {
    type: "casual",
    start: 1648275370,
    end: 1648275370,
    duration: 1,
    status: {
      supervisor: "pending",
      hr: "approved"
    }
  },
  {
    type: "sick",
    start: 1648275370,
    end: 1648275370,
    duration: 1,
    status: {
      supervisor: "pending",
      hr: "approved"
    }
  },
  {
    type: "emergency",
    start: 1648275370,
    end: 1648275370,
    duration: 1,
    status: {
      supervisor: "pending",
      hr: "rejected"
    }
  },
  {
    type: "casual",
    start: 1648275370,
    end: 1648275370,
    duration: 1,
    status: {
      supervisor: "approved",
      hr: "approved"
    }
  },
  {
    type: "rejected",
    start: 1648275370,
    end: 1648275370,
    duration: 1,
    status: {
      supervisor: "rejected",
      hr: "approved"
    }
  },
  {
    type: "pending",
    start: 1648275370,
    end: 1648275370,
    duration: 1,
    status: {
      supervisor: "pending",
      hr: "rejected"
    }
  },
]