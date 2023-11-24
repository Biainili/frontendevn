import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Coins from "./crypto/Coins";
import ExchangesMarkets from "./rateExchanges/ExchangesMarkets"

function Finance() {
  const [currency, setCurrency] = useState([]);
  const [coins, setCoins] = useState([]);
  const [listCoin, setListCoin] = useState(10);

  useEffect(() => {
    fetch("/api")
      .then(respons => respons.json())
      .then((data) => setCurrency(data.exchangeData));
  }, []);

  const changeListForCoin = () => {
    setListCoin(listCoin + 10);
    console.log(listCoin);
  };

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${listCoin}&page=1&sparkline=false&locale=en`;
  useEffect(() => {
    axios
      .get(url)
      .then((respons) => {
        setCoins(respons.data);
        // console.log(respons.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [listCoin]);
  return (
    <div className="flex-col bg-gray-400/80">
      <Navbar />
      <ExchangesMarkets exCurrency={currency}/>
      <Coins coins={coins} updateUser={changeListForCoin} />
      <div className="flex justify-center">
        <p>{!currency ? 'Loading' : currency[4]?.name}</p>
        <p
          className="hover:cursor-pointer hover:text-white text-center text-xl font-bold"
          onClick={changeListForCoin}
        >
          +10 coins
        </p>
      </div>
    </div>
  );
}

export default Finance;
