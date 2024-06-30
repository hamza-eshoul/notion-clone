import { create } from "zustand";

interface User {
  name: string;
  email: string;
  picture: string | null;
}

interface AuthState {
  user: User | null;
  setUser: (user: User) => void;
}

const fakeUser = {
  name: "Hamza Eshoul",
  email: "hamza.eshoul.pro@gmail.com",
  picture: null,
};

export const useAuthStore = create<AuthState>((set) => ({
  // initial state
  user: fakeUser,

  // actions
  setUser: (user: User) => set({ user }),
}));
