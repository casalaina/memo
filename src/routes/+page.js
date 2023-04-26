export const load = async ({ fetch }) => {
  const url = "https://apod.ellanan.com/api";
  let count = 20;
  let result = await fetch(`${url}?count=${count}`);
  let data = await result.json();

  // quick and dirty way remove videos, this should be a Promise w/ a catch
  // but again, quick and dirty. also this isn't checking for duplicates
  // FINE, maybe I'll circle back
  let filtered = data.filter(function (e) {
    return e.media_type != "video";
  });

  // take the first 10, and duplicate all the array items to a new array (to avoid deep cloning)
  let limited = [];

  let limitToTen = () => {
    for (let i = 0; i < 10; i++) {
      limited[i] = JSON.parse(JSON.stringify(filtered[i]));
    }
  };

  // loop through and duplicate, again avoiding deep clones
  let duplicate = () => {
    for (let i = 10; i < 20; i++) {
      limited[i] = JSON.parse(JSON.stringify(filtered[i - 10]));
    }
  };

  // add selected and hidden values, and sanitize data
  let cleanUpData = () => {
    for (let i = 0; i < limited.length; i++) {
      limited[i].selected = false;
      limited[i].hidden = false;

      let deleteList = ["copyright", "date", "hdurl", "credit", "media_type", "service_version", "title"];
      for (let o = 0; o < deleteList.length; o++) {
        delete limited[i][deleteList[o]];
      }
    }
  };

  // randomize array in-place
  let shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  limitToTen();
  duplicate();
  cleanUpData();
  shuffleArray(limited);
  return { content: limited };
};
