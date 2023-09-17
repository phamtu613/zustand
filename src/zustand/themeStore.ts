import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface ThemStore {
  themeState: {
    dark: boolean
    bgColor: string
    txtColor: string
  }
  toggleDarkMode: (darkMode: boolean) => void
}

export const themeStore = create<ThemStore>()(
  devtools(
    persist(
      (set) => ({
        themeState: {
          dark: false,
          bgColor: '#fff',
          txtColor: '#111'
        },
        toggleDarkMode: (darkMode: boolean) =>
          set((state) => {
            return {
              ...state,
              themeState: {
                // ...state.themeState,
                dark: darkMode,
                bgColor: darkMode ? 'black' : 'white',
                txtColor: darkMode ? 'white' : 'black'
              }
            }
          })
      }),
      {
        name: 'zustand',
        version: 1
        // partialize: (state) => return {}
        // getStorage: () => localStorage
      }
    )
  )
)
