export type FormArrayFormValues<
  TItem = unknown,
  TKey extends string = "rows",
> = {
  [K in TKey]: TItem[];
};

export type FormValues<T> = FormArrayFormValues<T, "rows">;

export type FormWithRows = {
  rows: Object[];
}