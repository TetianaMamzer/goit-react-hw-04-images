  // const isFirstRender = useRef(true);
// export const searchImg = ({ nameImg = '', page = 1 }) => {
//   return axios
//     .get(
//       `https://pixabay.com/api/?q=${nameImg}&page=${page}&key=31894475-96e7d507169227daa5d3a3af7&image_type=photo&orientation=horizontal&per_page=12`
//     )
//     .then(response => response.data);
// };
//  useEffect(() => {
// if (isFirstRender.current) {
    //   isFirstRender.current = false;
    //   return;
    // }

    // setLoading(true);

    // searchImg({ nameImg, page })
    //   .then(data => {
    //     console.log(data)
    //     setGallery(gallery => [...gallery, ...data.hits]);
    //     setTotal(data.totalHits);
    //   })
    //   .catch(error => setError(error.message))
    //   .finally(() => setLoading(false));
//  }, [page. nameImg])