import { FastifyReply, FastifyRequest } from "fastify";
import { Refeicao } from "../../core/refeicao";
import { z } from "zod";
const usuarioSchema = z.object({
	id: z.string()
});
export class GetAllByUserRefeicaoController {
	public async get(request: FastifyRequest, reply: FastifyReply) {
		const { id } = usuarioSchema.parse(request.usuario);

		return reply.status(200).send(await new Refeicao().findByUserId(id));
	}
}
