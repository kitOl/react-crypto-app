# О проекте

Работа выполнена по материалам канала Минина. [здесь](https://youtu.be/S4HOy6yTclU?list=PLqKQF2ojwm3l6OE4-tjLBhUNtJXLebHXP)

## Этапы

`npm create vite@latest react-crypto-app`
`cd react-crypto-app`
`npm install`
`npm install antd --save`

- установка Ant 5
  `npm run dev`

[React ChartJS](https://react-chartjs-2.js.org/)

`npm i react-chartjs-2`

## Как развернуть локальный сервер бэкэнд

`rm -rf node_modules`
create folder `frontend` and move content to that
`cd frontend`
`npm i`
create server.js in corner
`cd ..`
`npm init -y`
`npm i express`

In server.js insert code:

```js
const express = require("express");
const app = express();
const port = 80;

app.use(express.static("frontend/dist"));

app.listen(port, () => console.log("Server has been started on port 80"));
```

`cd frontend`
`npm run build`
`cd ..`
`node server.js`
