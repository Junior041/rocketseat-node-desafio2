import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable("usuario", (table) => {
		table.uuid("id").primary();
		table.string("session_id").notNullable().unique().index();
		table.string("nome").notNullable();
		table.string("email").notNullable().unique();
		table.timestamps(true, true);
	});
}


export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTable("usuario");
}

