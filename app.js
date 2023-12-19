const express = require("express");
const app = express();
const port = 3000;

const exchangeRate = {
    currencies: {
        TWD: {
            TWD: 1,
            JPY: 3.669,
            USD: 0.03281,
        },
        JPY: {
            TWD: 0.26956,
            JPY: 1,
            USD: 0.00885,
        },
        USD: {
            TWD: 30.444,
            JPY: 111.801,
            USD: 1,
        },
    },
};

function exchange(source, target, amount) {
    //將amount中多餘的符號去除
    const cleanAmount = amount.replace(/[,$]/g, "");

    //計算匯率
    const exchangeResult =
        exchangeRate.currencies[source][target] * cleanAmount;

    //將結果四捨五入至小數點後兩位
    const roundResult = Math.round(exchangeResult * 100) / 100;

    //將結果格式化
    const formatResult = new Intl.NumberFormat("en-US").format(roundResult);

    //回傳結果並加上'$'
    return `$${formatResult}`;
}

app.get("/exchange", (req, res) => {
    //解析出URL上的參數
    const { source, target, amount } = req.query;

    //判斷輸入的貨幣是否存在
    if (!exchangeRate.currencies[source] || !exchangeRate.currencies[target]) {
        return res.status(400).json({ msg: "Invalid currency" });
    }

    const finalResult = exchange(source, target, amount);

    //輸出
    res.status(200).json({
        msg: "success",
        amount: finalResult,
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
