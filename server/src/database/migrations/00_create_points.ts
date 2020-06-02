import Knex from 'knex';

// Notify typescript about the type of the param, so you can access all intelisense from it.
export async function up(knex: Knex) {
  // CREATE TABLE HERE
  return knex.schema.createTable('points', (table) => {
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.decimal('latitude').notNullable();
    table.decimal('longitude').notNullable();
    table.string('city').notNullable();
  });
}

export async function down(knex: Knex) {
  //DELETE THE TABLE
  return knex.schema.dropTable('point');
}
