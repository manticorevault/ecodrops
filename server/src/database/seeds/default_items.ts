import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('items').insert([
    { title: 'Lightbulbs', image: 'lampadas.svg' },
    { title: 'Batteries', image: 'baterias.svg' },
    { title: 'Paper', image: 'papeis-papelao.svg' },
    { title: 'Electronics', image: 'eletronicos.svg' },
    { title: 'Organics', image: 'organicos.svg' },
    { title: 'Cooking Oil', image: 'oleo.svg' }
  ]);
}
