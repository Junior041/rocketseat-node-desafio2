import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { Refeicao } from "../../core/refeicao";

const refeicaoSchema = z.object({
	nome: z.string(),
	descricao: z.string(),
	esta_na_dieta: z.coerce.boolean(),
	data: z.coerce.date(),
});


export class CreateRefeicaoController {
	public async create(request: FastifyRequest, reply: FastifyReply) {
		const { data, descricao, esta_na_dieta, nome } = refeicaoSchema.parse(request.body);
		const usuario = request.usuario;
		new Refeicao().create(usuario!.id, nome, descricao, esta_na_dieta, data);
		return reply.status(200).send();
		
	}
}
