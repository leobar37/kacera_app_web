import create from "zustand";

interface CartStore {
  openModal: boolean;
  // actions
  toogleModal: () => void;
}

export const useCartStore = create<CartStore>((set, get, api) => {
  return {
    openModal: false,
    toogleModal: () => {
      set((state) => {
        return {
          ...state,
          openModal: !state.openModal,
        };
      });
    },
  };
});
