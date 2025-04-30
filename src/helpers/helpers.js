export function truncate(input, length = 5) {
  if (input.length > length) {
    return input.substring(0, length) + "...";
  }
  return input;
}