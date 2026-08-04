export function localize(item, language) {
  if (item && language === 'zh' && item.zh) {
    return { ...item, ...item.zh }
  }
  return item
}
