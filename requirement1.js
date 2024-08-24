const Api = require('./services/api');
const Storage = require('./services/storage');
const format = require('./utils/format');

async function requirement1(repository) {
  try {
    const apiData = await Api.getData();
    if (!apiData.data) throw new Error('fail to fetch data from the api');
    const formattedData = format(apiData);
    // saving reference to the record to use it on requirement2
    const exist = await Storage.findByName(formattedData.doc_name, repository);
    let result;
    if (exist) {
      result = await Storage.update(formattedData, repository);
    } else {
      result = await Storage.insert(formattedData, repository);
    }
    process.env.API_DATA_ID = result[0].id;
    console.log('result1 >> ', result);

  } catch (e) {
    console.log(e);
  }
}

module.exports = requirement1;