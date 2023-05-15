import { useState, useEffect } from "react";

const Countries = () => {
  const [data, setData] = useState([]);
  let apiUrl =
    "https://restcountries.com/v3.1/subregion/Northern%20Africa?=name,capital,currencies";

  let fetcher = async () => {
    try {
      let fetchedApi = await fetch(apiUrl);
      let response = await fetchedApi.json();
      console.log(response);
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetcher();
  }, []);

  return (
    <div>
      <h2 className="text-center text-uppercase my-4">North African Countries</h2>
      <div className="d-flex container flex-wrap justify-content-center">
        {data.map((datum) => {
          const {
            cca2,
            name,
            capital,
            currencies,
            region,
            languages,
            flags,
            population,
            timezones,
          } = datum;
          return (
            <div className="w-25 shadow rounded mx-5 my-4 p-3 text-white bg-black" key={cca2}>
              <h2 className="">{name.common}</h2>
              <p><span className="text-uppercase fw-bold">Capital</span>: {capital}</p>
              <p><span className="text-uppercase fw-bold">Currency</span>: {currencies.name}</p>
              <p><span className="text-uppercase fw-bold">Region</span>: {region}</p>
              <p><span className="text-uppercase fw-bold">Language</span>: {languages.ara}</p>
              <img className="w-50" src={flags.svg} alt={flags.alt} />
              <p><span className="text-uppercase fw-bold">Population</span>: {population}</p>
              <p><span className="text-uppercase fw-bold">Timezone</span>: {timezones}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Countries;
