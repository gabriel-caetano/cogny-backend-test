DROP VIEW if exists ${schema:raw}.population_sum CASCADE;

CREATE OR REPLACE VIEW ${schema:raw}.population_sum AS (
  SELECT id, sum(population_by_year)
  FROM (
    SELECT id, (json_data->>'Population')::BIGINT AS population_by_year
    FROM (
      SELECT id, jsonb_array_elements(doc_record) AS json_data
      FROM ${schema:raw}.api_data
    ) AS record_elements
    WHERE (json_data->>'Year')::INT IN (2018, 2019, 2020)
  ) GROUP BY id
);