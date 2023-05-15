import { useEffect, useState } from "react";

const Goods = () => {
  const [data, setData] = useState([]);
  let apiUrl = "https://example-data.draftbit.com/sneakers?_limit=10";

  let fetcher = async () => {
    try {
      let fetchedApi = await fetch(apiUrl);
      let response = await fetchedApi.json();
      setData(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetcher();
  }, []);

  return (
    <div>
      <h2 className="text-center my-4">Goods component</h2>
      <div className="d-flex flex-wrap container justify-content-center">
        {data.map((datum) => {
          const {
            id,
            brand,
            colorway,
            gender,
            media,
            releaseDate,
            retailPrice,
            styleId,
            title,
            year,
          } = datum;
          return (
            <div className="p-4 w-25 text-center shadow rounded mb-5 mx-5" key={id}>
              <h4>{brand}</h4>
              <h4>{colorway.slice(0, 12)}</h4>
              <h4>{gender}</h4>
              <img className="w-50" src={media.imageUrl} alt="" />
              <h4>{releaseDate}</h4>
              <h4>{retailPrice}</h4>
              <h4>{styleId}</h4>
              <h4>{title.slice(0, 12)}</h4>
              <h4>{year}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Goods;
