import { Status } from "components/common/Tag/types"

export type User = {
  id: string,
  username: string,
  supervisor: string,
  start: number,
  end: number,
  type: string,
  duration: number,
  reason: string,
  comments: string,
  thumbnail: string,
  status: Status
}

