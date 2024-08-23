const axios = require('axios');

async function getData() {
  const res = await axios.get('https://datasa.io/api/data?drilldowns=Nation&measures=Population');

  return res.data?.data ? res.data.data : {};
}

module.exports = { getData };