export const load = async ({ fetch }) => {
  const url = "https://apod.ellanan.com/api";
  let count = 20;
  let result = await fetch(`${url}?count=${count}`);
  let data = await result.json();

  // quick and dirty way remove videos, this should be a Promise w/ a catch
  // and should clear out all the unused data, but again, quick and dirty
  // also this isn't checking for duplicates, FINE, maybe I'll circle back
  let filtered = data.filter(function (e) {
    return e.media_type != "video";
  });
  filtered.length = 10;

  return { content: filtered };
};
