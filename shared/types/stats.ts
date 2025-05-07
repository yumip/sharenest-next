export type DashboardStats = {
  groupId: string;
  stats: {
    totalUsers: number;
    totalItems: number;
    borrowed: number;
    reserved: number;
    overdue: number;
    unavailable: number;
  };
};
