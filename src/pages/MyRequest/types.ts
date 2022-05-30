export type Status = "pending" | "approved" | "rejected";

export type Type = "casual" | "sick" | "emergency";

export type Schema = {
  id: string,
  type: Type,
  start: number,
  end: number,
  duration: number,
  status: {
    supervisor: Status,
    hr: Status
  },
  approver: Mention[],
  recipients: Mention[],
  approverComment: string
};

export type Mention = {
  display: string,
  value: string
}