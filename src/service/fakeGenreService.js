export const genres = [
  { name: "currentlyReading", header: "Currently Reading" },
  { name: "wantToRead", header: "Want to Read" },
  { name: "read", header: "Read" },
];

export function getGenres() {
  return genres.filter((g) => g);
}
