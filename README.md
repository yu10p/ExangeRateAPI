# 匯率轉換 API

針對 USD、JPY、TWD 做匯率轉換

## 安裝說明

1. 安裝 Node.js v18.14.0，[下載連結](https://nodejs.org/en/blog/release/v18.14.0)

2. 在專案資料夾目錄下，開啟 Terminal，輸入"node app.js"，即可開始使用。
   <code>
   node app.js
   </code>

## 使用範例

GET /exchange 匯率轉換

請求範例:
<code>
http://localhost:3000/exchange?source=JPY&target=TWD&amount=$39,000
</code>

回應範例:
<code>
{
"msg": "success",
"amount": "$10,512.84"
}
</code>

## 功能說明

1. 匯率轉換
2. 轉換金額四捨五入
3. 輸出金額每三位數用逗號分隔，並在開頭加上'$'字符