const { DATABASE_SCHEMA } = require('./config');




// receive the database connection
// query for the sum of the population of 2018, 2019 and 2020 and log the result
async function requirement2b(repository) {
  try {
    const queryString =
      "select id, sum(population_by_year) " +
      " from ( " +
      " select id, (json->>'Population')::bigint as population_by_year " +
      " from ( " +
      "   select id, jsonb_array_elements(doc_record) as json " +
      "   from " + DATABASE_SCHEMA + ".api_data " +
      " ) as record_elements " +
      " where (json->>'Year')::int in (2018, 2019, 2020) " +
      ") where id = '" + process.env.API_DATA_ID + "' " +
      "group by id;"
    const res = await repository.query(queryString);
    const { sum } = res[0];
    console.log('result2b >> sum of population', sum);

  } catch (e) {
    console.log(e);
  }
}

module.exports = requirement2b;