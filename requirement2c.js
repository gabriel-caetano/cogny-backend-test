// receive the database connection
// query for the sum of the population of 2018, 2019 and 2020 and log the result
async function requirement2c(repository) {
  try {
    const res = await repository.population_sum.find({ doc_name: process.env.DOC_NAME });
    const { sum } = res[0];
    console.log('result2c >> sum of population', sum);

  } catch (e) {
    console.log(e);
  }
}

module.exports = requirement2c;