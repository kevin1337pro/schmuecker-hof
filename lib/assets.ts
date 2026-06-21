const basePath = process.env.GITHUB_PAGES === "true" ? "/schmuecker-hof" : "";

export function assetPath(path: string) {
  return `${basePath}${path}`;
}
