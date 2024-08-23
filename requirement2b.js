const { DATABASE_SCHEMA } = require('./config');




// receive the database connection
// query for the sum of the population of 2018, 2019 and 2020 and log the result
async function requirement2b(repository) {
  try {
    const queryString =
      "select doc_name, sum(population_by_year) " +
      " from ( " +
      " select doc_name, (json->>'Population')::bigint as population_by_year " +
      " from ( " +
      "   select doc_name, jsonb_array_elements(doc_record) as json " +
      "   from " + DATABASE_SCHEMA + ".api_data " +
      " ) as record_elements " +
      " where (json->>'Year')::int in (2018, 2019, 2020) " +
      ") where doc_name = '" + process.env.DOC_NAME + "' " +
      "group by doc_name;"
    const res = await repository.query(queryString);
    const { sum } = res[0];
    console.log('result2b >> sum of population', sum);

  } catch (e) {
    console.log(e);
  }
}

module.exports = requirement2b;