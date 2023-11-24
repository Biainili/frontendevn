import React from "react";
import { BsCashCoin } from "react-icons/bs";

function ExchangesMarkets(props) {
  return (
    <div className="max-w-[1140px] m-auto py-[120px]">
      <div>
        <div className="flex justify-center items-center text-center mb-8">
          <BsCashCoin size={25} color="gold" />
          <h2 className="text-center m-2">Exchange rates for today</h2>
        </div>
        <div className="flex justify-center space-x-16">
          <button>Exchange Points</button>
          <button>Banks Non-Cash</button>
          <button>Banks Cash</button>
        </div>
        <div className="flex justify-between items-center text-white bg-[#26272b] [box-shadow:0px_0px_12px_#18191b] rounded-[8px] mx-4 my-8 px-4 py-[.7rem] font-bold text-sm">
          <p>Point</p>
          <p className="-mr-16">Data</p>
          <p>Buy USA</p>
          <p>Sell USA </p>
          <p>Buy EUR</p>
          <p>Sell EUR </p>
          <p>Buy RUB</p>
          <p>Sell RUB </p>
          <p>Buy GEL</p>
          <p>Sell GEL </p>
        </div>
        {
          <table>
            <tbody>
              <tr className="flex justify-between items-center text-white bg-[#26272b] [box-shadow:0px_0px_12px_#18191b] rounded-[8px] mx-4 my-8 px-4 py-[.7rem] space-x-4 font-bold text-xs">
                <td className="w-[120px]">Point</td>
                <td className="w-[120px]">Data</td>
                <td>Buy USA</td>
                <td>Sell USA</td>
                <td>Buy EUR</td>
                <td>Sell EUR</td>
                <td>Buy RUB</td>
                <td>Sell RUB</td>
                <td>Buy GEL</td>
                <td>Sell GEL</td>
              </tr>
              {props.exCurrency?.map((exchange) => (
                <tr
                  key={exchange.name}
                  className="flex flex-col md:flex-row justify-between items-center text-white bg-[#26272b] [box-shadow:0px_opx_12px_#18191b] rounded-[8px] text-sm mx-4 my-8 px-4 py-[.7rem]  space-x-20 hover:scale-[1.04] hover:[transition:.3s_ease-in-out] hover:cursor-pointer"
                >
                  <td className="w-[80px] mb-2 md:mb-0">{exchange.name}</td>
                  <td className="w-[80px] mb-2 md:mb-0">
                    {exchange.dataUpDate}
                  </td>
                  <td>{exchange.buyUSA}</td>
                  <td>{exchange.sellUSA}</td>
                  <td>{exchange.buyEUR}</td>
                  <td>{exchange.sellEUR}</td>
                  <td>{exchange.buyRUB}</td>
                  <td>{exchange.sellRUB}</td>
                  <td>{exchange.buyGEL}</td>
                  <td>{exchange.sellGEL}</td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      </div>
    </div>
  );
}

export default ExchangesMarkets;
