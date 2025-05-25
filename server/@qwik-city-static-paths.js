const staticPaths = new Set(["/_astro/ClientRouter.astro_astro_type_script_index_0_lang.CtSceO8m.js","/_astro/index.4b0h8sX7.css","/_astro/onest-cyrillic-wght-normal.DXI_y_WF.woff2","/_astro/onest-latin-ext-wght-normal.CnNj8hVb.woff2","/_astro/onest-latin-wght-normal.CUIqqgP9.woff2","/favicon.svg","/images/projects/i2tec/poster.webp","/images/projects/metflix/poster.webp","/theme/moonlight-ii.json"]);
function isStaticPath(method, url) {
  if (method.toUpperCase() !== 'GET') {
    return false;
  }
  const p = url.pathname;
  if (p.startsWith("/build/")) {
    return true;
  }
  if (p.startsWith("/assets/")) {
    return true;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  if (p.endsWith('/q-data.json')) {
    const pWithoutQdata = p.replace(/\/q-data.json$/, '');
    if (staticPaths.has(pWithoutQdata + '/')) {
      return true;
    }
    if (staticPaths.has(pWithoutQdata)) {
      return true;
    }
  }
  return false;
}
export { isStaticPath };