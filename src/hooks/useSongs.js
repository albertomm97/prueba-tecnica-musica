import results from "../mocks/results.json";

export function useSongs() {
  return { songs: results.data };
}
