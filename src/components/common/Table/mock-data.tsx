import { Column } from "./types";

export type Schema = {
  name: string,
  age: number,
  hobby: string,
  occupation: string
}

export const mock: Schema[] = [
  {
    name: "Joy",
    age: 20,
    hobby: "Football",
    occupation: "Teacher"
  },
  {
    name: "Boy",
    age: 21,
    hobby: "Basketball",
    occupation: "Trek",
  },
  {
    name: "Summer",
    age: 18,
    hobby: "Skateboard",
    occupation: "Youtuber"
  }
];

export const columns: Column<Schema>[] = [
  {
    title: "Name",
    render: r => r.name
  },
  {
    title: "Age",
    render: r => r.age
  },
  {
    title: "Another Hobby",
    render: r => <button>{r.hobby}</button>
  },
  {
    title: <button>New</button>,
    render: r => <button>Edit</button>
  }
];