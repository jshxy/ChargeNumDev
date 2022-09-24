import defaultSettings from '@/settings'

const title = defaultSettings.title || '满天星共济平台'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
