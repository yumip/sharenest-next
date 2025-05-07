import { DashboardStats } from "@/shared/types/stats";

export const mockSummary: DashboardStats[] = [
  {
    groupId: "cassiegroup",
    stats: {
      totalUsers: 24,
      totalItems: 128,
      borrowed: 17,
      reserved: 5,
      overdue: 5,
      unavailable: 0,
    },
  },
];
