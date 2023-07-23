import axios from "axios";
import { DAY_IN_MS, LOCALLY_STORED_EXCHANGE_RATE } from "consts";
import { useEffect, useState } from "react";

const useCurrencyRate = () => {
  const [rubToUsdExchangeRate, setRubToUsdExchangeRate] = useState<
    number | undefined
  >(undefined);

  const isOneDayPassedSinceLastChecked = () => {
    if (localStorage.getItem(LOCALLY_STORED_EXCHANGE_RATE)!) {
      const storedRate = JSON.parse(
        localStorage.getItem(LOCALLY_STORED_EXCHANGE_RATE)!
      );
      const needRefreshedData =
        new Date().getTime() -
          new Date(storedRate.lastDateTimeChecked).getTime() >=
        DAY_IN_MS;
      return needRefreshedData;
    }
  };

  useEffect(() => {
    if (
      !localStorage.getItem(LOCALLY_STORED_EXCHANGE_RATE) ||
      isOneDayPassedSinceLastChecked()
    ) {
      axios
        .get(
          `https://api.apilayer.com/exchangerates_data/${
            new Date().toISOString().split("T")[0]
          }?symbols=RUB&base=USD`,
          {
            method: "GET",
            headers: {
              apikey: process.env.REACT_APP_EXCHANGE_RATES_API_KEY,
            },
          }
        )
        .then(({ data }) => {
          setRubToUsdExchangeRate(data.rates.RUB);
          localStorage.setItem(
            LOCALLY_STORED_EXCHANGE_RATE,
            JSON.stringify({
              rate: data.rates.RUB,
              lastDateTimeChecked: new Date(),
            })
          );
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      const rateData = JSON.parse(
        localStorage.getItem(LOCALLY_STORED_EXCHANGE_RATE)!
      );
      setRubToUsdExchangeRate(rateData.rate);
    }
  }, []);

  return { currencyRate: rubToUsdExchangeRate };
};

export default useCurrencyRate;
