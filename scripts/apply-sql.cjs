#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const { Client } = require('pg');

async function main() {
  // Permitir certificados autoassinados (ambiente Supabase)
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    console.error('Erro: DATABASE_URL não está definida no ambiente.');
    process.exit(1);
  }

  const sqlPath = path.resolve(__dirname, '..', 'supabase', 'schema.sql');
  if (!fs.existsSync(sqlPath)) {
    console.error(`Erro: arquivo SQL não encontrado em ${sqlPath}`);
    process.exit(1);
  }

  const sql = fs.readFileSync(sqlPath, 'utf8');

  const client = new Client({
    connectionString,
    ssl: { require: true, rejectUnauthorized: false },
  });

  console.log('Conectando ao banco...');
  await client.connect();
  try {
    console.log('Aplicando schema SQL no banco (Supabase)...');
    await client.query(sql);
    console.log('Schema aplicado com sucesso.');
  } finally {
    await client.end();
    console.log('Conexão encerrada.');
  }
}

main().catch((err) => {
  console.error('Falha ao aplicar schema:', err.message || err);
  process.exit(1);
});


