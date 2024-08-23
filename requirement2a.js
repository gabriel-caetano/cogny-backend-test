const Storage = require('./services/storage');

async function requirement2a(repository) {
  try {
    const api_data = await Storage.findByName(process.env.DOC_NAME, repository);

    const records = api_data.doc_record;
    const filtered = records.filter((r) => {
      const year = parseInt(r.Year);
      return [2020, 2019, 2018].includes(year);
    });
    const sum = filtered.reduce((acc, r) => { return acc + parseInt(r.Population) }, 0);
    console.log('result2a >> sum of population', sum);

  } catch (e) {
    console.log(e);
  }
}

module.exports = requirement2a;