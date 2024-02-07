import { FastifyReply, FastifyRequest } from "fastify";
import { Refeicao } from "../../core/refeicao";
import { z } from "zod";
const refeicaoSchema = z.object({
	id: z.string()
});
export class DeleteRefeicaoByIdController {
	public async delete(request: FastifyRequest, reply: FastifyReply) {
		const { id } = refeicaoSchema.parse(request.query);
		await new Refeicao().deleteRefeicao(id);
		return reply.status(200).send();
	}
}
