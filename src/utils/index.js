export function createPageUrl(pageName) {
  if (!pageName || pageName === 'home' || pageName === 'Home') return '/';
  if (pageName.startsWith('/')) return pageName;
  return '/' + pageName;
}
