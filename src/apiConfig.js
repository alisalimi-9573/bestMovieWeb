export const baseUrl = "https://api.themoviedb.org";
export const apiKey = "59f5436394f6c62aaf0669fe1d77453f";
export const imgBaseUrl = "https://image.tmdb.org/t/p";

export function posterImg(path, size = "w780") {
  return `${imgBaseUrl}/${size}/${path}`;
}
