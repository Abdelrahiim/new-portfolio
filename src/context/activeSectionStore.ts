import { create } from "zustand";

import { type SectionName } from "~/lib/types";

interface ActiveSectionState {
  activeSection: SectionName;
  timeOfLastClick: number;
  setActiveSection: (section: SectionName) => void;
  settimeOfLastClick: (time: number) => void;
}

const useActiveSectionStore = create<ActiveSectionState>((set) => ({
  activeSection: "Home",
  timeOfLastClick: 0,
  setActiveSection: (section: SectionName) => set({ activeSection: section }),
  settimeOfLastClick: (time: number) => set({ timeOfLastClick: time }),
}));

export default useActiveSectionStore;
