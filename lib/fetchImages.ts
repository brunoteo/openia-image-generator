const fetchImages = () =>
  fetch("/api/mongodb", {
    method: "GET",
    cache: "no-store",
  }).then((res) => res.json());

export default fetchImages;
