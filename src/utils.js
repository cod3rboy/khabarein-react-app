export function toTitleCase(str = "") {
  const parts = str.split(" ");
  for (let i = 0; i < parts.length; i++) {
    if (parts[i] === "") continue;
    parts[i] = parts[i][0].toUpperCase() + parts[i].slice(1);
  }
  return parts.join(" ");
}
