/* function moneybox(coins){
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}

moneybox(5);
moneybox(5); */

function moneybox(){
    let saveCoins= 0;
    function countCoins(coins){
        saveCoins += coins;
        console.log(`Moneybox: $${saveCoins}`)
    }
    return countCoins;
}
const myMoneyBox = moneybox();
myMoneyBox(5);
myMoneyBox(24);
myMoneyBox(10);

const moneyBoxLolo = moneybox();
moneyBoxLolo(100);
moneyBoxLolo(10);