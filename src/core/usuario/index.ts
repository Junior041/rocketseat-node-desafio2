import { randomUUID } from "crypto";
import { knex } from "../../database";

export class Usuario{
	async create(nome: string, email: string, sessionId: string | undefined){
		await knex("usuario").insert({
			id: randomUUID(),
			nome,
			email,
			session_id: sessionId,
		});
	}
	async getAll(){
		return await knex("usuario").select("*");
	}
	async findById(id: string){
		return await knex("usuario").where({id}).first();
	}
	async findByEmail(email: string){
		return await knex("usuario").where({email}).first();
	}
	async findBySessionId(session_id: string){
		return await knex("usuario").where({session_id}).first();
	}
	async updateSessionId(id: string, session_id: string){
		await knex("usuario").update({session_id}).where({id});
		return session_id;
	}
}