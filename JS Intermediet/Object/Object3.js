// dibawah ini merupakan history transasksi yang telah kalian lakukan
const items = [
  {
    btc: { buy: 10, sell: 9 },
    eth: { buy: 8, sell: 7.5 },
    doge: { buy: 7, sell: 6.5 },
    day: 1,
  },
  {
    btc: { buy: 9, sell: 5 },
    eth: { buy: 7, sell: 4 },
    doge: { buy: 6, sell: 3 },
    day: 2,
  },
  {
    btc: { buy: 5, sell: 10 },
    eth: { buy: 4, sell: 6 },
    doge: { buy: 3, sell: 4 },
    day: 3,
  },
];

const calculateIncome = (items) => {
  return items.reduce((acc, cur) => {
      const btcSum = cur.btc.sell - cur.btc.buy
      const dogeSum = cur.doge.sell - cur.doge.buy
      const ethSum = cur.eth.sell - cur.eth.buy

      return {
          btc: acc.btc + btcSum,
          doge: acc.doge + dogeSum,
          eth: acc.eth + ethSum
      }
      
  },

  {
      btc: 0, 
      doge: 0,
      eth: 0
  })

}

console.log(calculateIncome(items))