const Storage = require('./services/storage');

async function requirement2a(repository) {
  try {
    console.log(process.env.DOC_NAME);
    const api_data = await Storage.findByName(process.env.DOC_NAME, repository);
    console.log({ api_data });

    const records = api_data.doc_record
    console.log({ records });
    const filtered = records.filter((r) => {
      const year = parseInt(r.Year);
      return [2020, 2019, 2018].includes(year);
    })
    console.log({ filtered });
    const sum = filtered.reduce((acc, r) => { return acc + parseInt(r.Population) }, 0);
    console.log({ sum });
  } catch (e) {
    console.log(e);
  }
}

module.exports = requirement2a;