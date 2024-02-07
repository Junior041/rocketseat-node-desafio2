import { FastifyReply, FastifyRequest } from "fastify";
import { Refeicao } from "../../core/refeicao";
import { z } from "zod";
const refeicaoSchema = z.object({
	id: z.string()
});
export class FindRefeicaoByIdController {
	public async find(request: FastifyRequest, reply: FastifyReply) {
		const { id } = refeicaoSchema.parse(request.params);
		return reply.status(200).send(await new Refeicao().findById(id));
	}
}
