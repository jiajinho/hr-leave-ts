export type Row = { [k: string]: any };

export type Value = string | number | boolean;

export type CellRender<T> = ((row: T) => JSX.Element | Value)

export type Column<T extends Row> = {
  title: string | JSX.Element,
  render: CellRender<T>
}