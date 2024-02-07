import { randomUUID } from "crypto";
import { knex } from "../../database";

export class Refeicao {
	async create(usuario_id: string, nome: string, descricao: string, esta_na_dieta: boolean, data: Date) {
		await knex("refeicao").insert({
			id: randomUUID(),
			usuario_id,
			nome,
			descricao,
			esta_na_dieta,
			data,
		});
	}
	async findById(id: string) {
		return await knex("refeicao").where({ id });
	}
	async getAll() {
		return await knex("refeicao").select();
	}
	async findByUserId(usuario_id: string) {
		return await knex("refeicao").where({usuario_id});
	}
}