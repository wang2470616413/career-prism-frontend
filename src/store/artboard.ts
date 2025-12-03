import type { ResumeData } from "@reactive-resume/schema";
import { create } from "zustand";
import sampleResume from '../../sample.json';
export type ArtboardStore = {
  resume: ResumeData;
  setResume: (resume: ResumeData) => void;
};

export const useArtboardStore = create<ArtboardStore>()((set) => ({
 // resume: null as unknown as ResumeData,
  resume : sampleResume,
  setResume: (resume) => {
    set({ resume });
  },
}));
