const axios = require('axios');

async function getData() {
  const res = await axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population');

  return res.data ? res.data : {};
}

module.exports = { getData };