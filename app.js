'use strict';
const axios = require('axios'); // axios: HTTPリクエストを送るライブラリ
axios.get('https://www.google.com').then(res => {
  // HTTPレスポンスを受け取った後の処理
  console.log(res.data);
});