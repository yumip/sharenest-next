export enum ItemStatus {
  Available = "available",
  Borrowed = "borrowed",
  Overdue = "overdue",
  Unavailable = "unavailable",
  Removed = "removed",
  Reserved = "reserved",
}

export interface Item {
  id: string;
  groupId: string;
  name: string;
  category: string;
  status: ItemStatus;
  description?: string;
  imageUrl?: string;
  borrower?: { id: string; name: string };
  readonly dueDate?: Date;
}
