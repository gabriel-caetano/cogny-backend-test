async function insert(data, repository) {
  const res = await repository.insert(data);

  return res;
}

async function findByName(name, repository) {
  const res = await repository.find({ doc_name: name });
  if (res.length === 0) return;
  return res[0];
}

async function update(data, repository) {
  return repository.update({ doc_name: data.doc_name }, data);
}

module.exports = { insert, findByName, update };