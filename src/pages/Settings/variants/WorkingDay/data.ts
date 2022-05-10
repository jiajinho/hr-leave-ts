import type { Option } from "components/common/PrunableCheckbox/types";

type Days = {
  monday: Option,
  tuesday: Option,
  wednesday: Option,
  thursday: Option,
  friday: Option,
  saturday: Option,
  sunday: Option
}

const days: Option[] = [
  { id: "0", display: "Monday" },
  { id: "1", display: "Tuesday" },
  { id: "2", display: "Wednesday" },
  { id: "3", display: "Thursday" },
  { id: "4", display: "Friday" },
  { id: "5", display: "Saturday" },
  { id: "6", display: "Sunday" },
]

export default {
  days
}