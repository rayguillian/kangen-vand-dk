import { create } from 'zustand';

// Define the state's shape
interface AppState {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  // Add other global state properties here as needed
}

// Create the store
const useAppStore = create<AppState>((set) => ({
  // Initial state
  isMobileMenuOpen: false,

  // Actions
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),

  // Add other actions here
}));

export default useAppStore;