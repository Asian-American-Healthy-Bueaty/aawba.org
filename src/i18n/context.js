import { createContext } from 'react'

export const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'zh', label: '简体中文' },
]

export const STORAGE_KEY = 'aawba_language'

export const LanguageContext = createContext(null)

export function getPath(obj, path) {
  return path.split('.').reduce((acc, key) => (acc == null ? acc : acc[key]), obj)
}
