import { create } from "zustand";
import { persist } from "zustand/middleware";

type AccountStore = {
  groupId: string | null;
  setGroupId: (groupId: string) => void;
  clearGroupId: () => void;
};

export const useAccountStore = create<AccountStore>()(
  persist(
    (set) => ({
      groupId: null,
      setGroupId: (groupId) => set({ groupId }),
      clearGroupId: () => set({ groupId: null }),
    }),
    {
      name: "account-store", // localStorage key
    },
  ),
);
