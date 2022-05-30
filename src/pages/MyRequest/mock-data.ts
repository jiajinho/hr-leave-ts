import { Schema, Mention } from './types';

const requests: Schema[] = [
  {
    id: "d6f44506-2cda-4bdb-b077-205495910545",
    type: "casual",
    start: 1648275370,
    end: 1648275370,
    duration: 1,
    status: {
      supervisor: "pending",
      hr: "approved"
    },
    approver: [
      { display: "Joey", value: "joey" },
      { display: "Amy", value: "amy" }
    ],
    recipients: [
      { display: "Joey", value: "joey" }
    ],
    approverComment: `This is a sample comment`
  },
  {
    id: "3beef785-9b44-43fd-8e6e-abb1c4da4e3b",
    type: "sick",
    start: 1648275370,
    end: 1648275370,
    duration: 1,
    status: {
      supervisor: "pending",
      hr: "approved"
    },
    approver: [
      { display: "Joey", value: "joey" }
    ],
    recipients: [
      { display: "Joey", value: "joey" }
    ],
    approverComment: `This is a sample comment`

  },
  {
    id: "40718f18-6999-4789-b7e0-53a953912240",
    type: "emergency",
    start: 1648275370,
    end: 1648275370,
    duration: 1,
    status: {
      supervisor: "pending",
      hr: "rejected"
    },
    approver: [
      { display: "Joey", value: "joey" }
    ],
    recipients: [
      { display: "Joey", value: "joey" }
    ],
    approverComment: `This is a sample comment`

  },
  {
    id: "586d4654-3fb7-48cf-b121-aceca2d1a6f8",
    type: "casual",
    start: 1648275370,
    end: 1648275370,
    duration: 1,
    status: {
      supervisor: "approved",
      hr: "approved"
    },
    approver: [
      { display: "Joey", value: "joey" }
    ],
    recipients: [
      { display: "Joey", value: "joey" }
    ],
    approverComment: `This is a sample comment`

  },
  {
    id: "0d718ad2-b9b7-4080-b6ce-ec735ebcaa74",
    type: "emergency",
    start: 1648275370,
    end: 1648275370,
    duration: 1,
    status: {
      supervisor: "rejected",
      hr: "approved"
    },
    approver: [
      { display: "Joey", value: "joey" }
    ],
    recipients: [
      { display: "Joey", value: "joey" }
    ],
    approverComment: `This is a sample comment`

  },
  {
    id: "a44aacfb-fbcd-4298-b68e-c6943e1836d9",
    type: "sick",
    start: 1648275370,
    end: 1648275370,
    duration: 1,
    status: {
      supervisor: "pending",
      hr: "rejected"
    },
    approver: [
      { display: "Joey", value: "joey" }
    ],
    recipients: [
      { display: "Joey", value: "joey" }
    ],
    approverComment: `This is a sample comment`

  },
];

const mentions: Mention[] = [
  {
    display: "Amelia",
    value: "amelia"
  },
  {
    display: "Amy",
    value: "amy"
  },
  {
    display: "Joey",
    value: "joey"
  },
  {
    display: "Vincent",
    value: "vin"
  },
  {
    display: "Bradley",
    value: "brad"
  }
];

export default {
  requests,
  mentions
};