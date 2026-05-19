import { create } from "zustand";

export type ProfileFor =
  | "Myself"
  | "My Son"
  | "My Daughter"
  | "My Brother"
  | "My Sister"
  | "My Friend"
  | "My Relative"
  | "";

export interface RegisterState {
  currentStep: number;

  // Step 0
  profileFor: ProfileFor;

  // Step 1
  currentCity: string;
  livesWithFamily: boolean | null;
  familyCity: string;
  community: string;
  subCommunity: string;
  openToAllCommunities: boolean;

  // Step 2
  maritalStatus: string;
  height: string;
  diet: string;
  manglik: string;
  smoking: string;
  drinking: string;

  // Step 3
  qualification: string;
  college: string;
  certifications: string;

  // Step 4
  occupation: string;
  industry: string;
  company: string;
  annualIncome: string;
  incomeVisibility: "private" | "visible" | "";

  // Step 5
  phone: string;
  otpVerified: boolean;

  // Step 6
  selfieUploaded: boolean;
  selfieSkipped: boolean;

  // Step 7
  aboutMe: string;

  // Actions
  setField: <K extends keyof RegisterState>(key: K, value: RegisterState[K]) => void;
  nextStep: () => void;
  prevStep: () => void;
  reset: () => void;
}

const initialState = {
  currentStep: 0,
  profileFor: "" as ProfileFor,
  currentCity: "",
  livesWithFamily: null,
  familyCity: "",
  community: "",
  subCommunity: "",
  openToAllCommunities: false,
  maritalStatus: "",
  height: "",
  diet: "",
  manglik: "",
  smoking: "",
  drinking: "",
  qualification: "",
  college: "",
  certifications: "",
  occupation: "",
  industry: "",
  company: "",
  annualIncome: "",
  incomeVisibility: "" as "" | "private" | "visible",
  phone: "",
  otpVerified: false,
  selfieUploaded: false,
  selfieSkipped: false,
  aboutMe:
    "I am a family-oriented individual who values tradition, spirituality, and meaningful relationships. I am seeking a compatible life partner for a sacred lifelong journey.",
};

export const useRegisterStore = create<RegisterState>((set) => ({
  ...initialState,

  setField: (key, value) => set((state) => ({ ...state, [key]: value })),

  nextStep: () =>
    set((state) => ({
      currentStep: Math.min(state.currentStep + 1, 8),
    })),

  prevStep: () =>
    set((state) => ({
      currentStep: Math.max(state.currentStep - 1, 0),
    })),

  reset: () => set(initialState),
}));
