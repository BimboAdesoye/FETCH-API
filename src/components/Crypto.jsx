import { useEffect, useState } from "react";

const Crypto = () => {
  let [data, setData] = useState([]);
  let apiUrl = "https://api.coinlore.net/api/tickers/?start=0&limit=20";

  let fetcher = async () => {
    try {
      let fetchedData = await fetch(apiUrl);
      let response = await fetchedData.json();
      setData(response.data);
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
      <h2 className="text-center my-4">Cryptocurrency component</h2>
      <div>
        {data.map((datum) => {
          const {
            id,
            symbol,
            name,
            nameid,
            rank,
            price_usd,
            percent_change_24h,
            percent_change_1h,
            percent_change_7d,
            price_btc,
            market_cap_usd,
            volume24,
            volume24a,
            csupply,
            tsupply,
            msupply,
          } = datum;
          return (
            <div className="d-flex shadow rounded mb-5 p-3 align-items-center" key={id}>
              <p className="mx-2">{symbol}</p>
              <p className="mx-2">{name}</p>
              <p className="mx-2">{nameid}</p>
              <p className="mx-2">{rank}</p>
              <p className="mx-2">{price_usd}</p>
              <p className="mx-2">{percent_change_24h}</p>
              <p className="mx-2">{percent_change_1h}</p>
              <p className="mx-2">{percent_change_7d}</p>
              <p className="mx-2">{price_btc}</p>
              <p className="mx-2">{market_cap_usd}</p>
              <p className="mx-2">{volume24}</p>
              <p className="mx-2">{volume24a}</p>
              <p className="mx-2">{csupply}</p>
              <p className="mx-2">{tsupply}</p>
              <p className="mx-2">{msupply}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Crypto;

