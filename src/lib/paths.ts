export const withBase = (path = "") => {
  const rawBase = import.meta.env.BASE_URL;
  const base = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;
  return `${base}${path.replace(/^\/+/, "")}`;
};
