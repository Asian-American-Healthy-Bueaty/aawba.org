import { useEffect, useMemo, useState } from 'react'
import { LanguageContext, LANGUAGES, STORAGE_KEY, getPath } from './context.js'
import { STRINGS } from './strings.js'

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') return 'en'
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return LANGUAGES.some((lang) => lang.code === stored) ? stored : 'en'
  })

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en'
  }, [language])

  const value = useMemo(() => {
    const t = (path) => getPath(STRINGS[language], path) ?? getPath(STRINGS.en, path) ?? path
    return { language, setLanguage, t }
  }, [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
