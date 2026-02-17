import { create } from 'zustand'

interface State {
  loading: boolean
  scrollProgress: number
  activeProjectIndex: number
  setLoading: (loading: boolean) => void
  setScrollProgress: (progress: number) => void
  setActiveProjectIndex: (index: number) => void
}

export const useStore = create<State>((set) => ({
  loading: true,
  scrollProgress: 0,
  activeProjectIndex: 0,
  setLoading: (loading) => set({ loading }),
  setScrollProgress: (scrollProgress) => set({ scrollProgress }),
  setActiveProjectIndex: (activeProjectIndex) => set({ activeProjectIndex }),
}))
