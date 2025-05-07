export enum Status {
  Available = "available",
  Borrowed = "borrowed",
  OverDue = "overdue",
  Unavailable = "unavailable",
  Removed = "removed",
}

export interface Item {
  id: string;
  groupId: string;
  name: string;
  category: string;
  status: Status;
  description?: string;
  imageUrl?: string;
  borrower?: { id: string; name: string };
  dueDate?: Date;
}
