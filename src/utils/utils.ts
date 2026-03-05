export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // remove non-word chars
    .replace(/[\s_-]+/g, "-") // swap spaces/underscores for hyphens
    .replace(/^-+|-+$/g, ""); // remove leading/trailing hyphens
}
