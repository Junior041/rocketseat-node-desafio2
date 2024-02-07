import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable("refeicao", (table) => {
		table.uuid("id").primary();
		table.uuid("usuario_id").references("usuario.id").notNullable();
		table.string("nome").notNullable();
		table.string("descricao").notNullable();
		table.boolean("esta_na_dieta").notNullable();
		table.date("data").notNullable();
		table.timestamps(true, true);
	});
}


export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTable("refeicao");
}

