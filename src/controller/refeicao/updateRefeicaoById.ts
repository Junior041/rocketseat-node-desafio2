import { FastifyReply, FastifyRequest } from "fastify";
import { Refeicao } from "../../core/refeicao";
import { z } from "zod";

const refeicaoSchema = z.object({
	nome: z.string(),
	descricao: z.string(),
	esta_na_dieta: z.coerce.boolean(),
	data: z.coerce.date(),
});
const idSchema = z.object({
	id: z.string(),
});
export class UpdateRefeicaoByIdController {
	public async update(request: FastifyRequest, reply: FastifyReply) {
		const { data, descricao, esta_na_dieta, nome } = refeicaoSchema.parse(request.query);
		const { id } = idSchema.parse(request.query);

		await new Refeicao().updateRefeicao(id,nome, descricao, esta_na_dieta, data);
		return reply.status(200).send();
	}
}
