// PLEASE DON'T change function name
module.exports = function makeExchange(money) {
   if (money > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
   if (money === 0) return {};
 const result = {}
    if (money >= 50) {
      result["H"] = Math.floor(money / 50);
      money = money - Math.floor(money / 50)*50;
    }
    if (money >= 25) {
      result["Q"]= Math.floor(money/ 25);
      money = money - Math.floor(money/25)*25;
    }
    if (money >= 10) {
      result["D"] = Math.floor(money / 10);
      money = money - Math.floor(money / 10)*10;
    }
    if (money >= 5) {
      result["N"] = Math.floor (money / 5);
      money = money - Math.floor (money / 5)*5;
    }
    if (money >= 1){
      result["P"] = money;
    }
    return result;
}
