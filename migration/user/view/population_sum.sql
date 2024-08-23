DROP VIEW if exists ${schema:raw}.population_sum CASCADE;

CREATE OR REPLACE VIEW ${schema:raw}.population_sum AS (
  SELECT doc_name, sum(population_by_year)
  FROM (
    SELECT doc_name, (json_data->>'Population')::BIGINT AS population_by_year
    FROM (
      SELECT doc_name, jsonb_array_elements(doc_record) AS json_data
      FROM ${schema:raw}.api_data
    ) AS record_elements
    WHERE (json_data->>'Year')::INT IN (2018, 2019, 2020)
  ) GROUP BY doc_name
);