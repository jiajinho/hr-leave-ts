export type Status = "pending" | "approved" | "rejected";

export type Type = "casual" | "sick" | "emergency";

export type Schema = {
  type: Type,
  start: number,
  end: number,
  duration: number,
  status: {
    supervisor: Status,
    hr: Status
  }
}