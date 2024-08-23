
// Recebe dados no formato retornado pela api
// Retorna dados no formato que deve ser inserido na tabela
function format(data) {
  return {
    is_active: data.data ? true : false,
    is_deleted: false,
    deleted_at: null,
    api_name: 'datausa.io',
    doc_id: null,
    doc_name: data.source[0].name,
    doc_record: JSON.stringify(data.data),
  }
}

module.exports = format;