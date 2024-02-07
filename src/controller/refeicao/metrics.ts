import { FastifyReply, FastifyRequest } from "fastify";
import { Refeicao } from "../../core/refeicao";
import { z } from "zod";
const usuarioSchema = z.object({
	id: z.string(),
});
export class MetricsByUserRefeicaoController {
	public async get(request: FastifyRequest, reply: FastifyReply) {
		const { id } = usuarioSchema.parse(request.usuario);
		const RefeicaoClass = new Refeicao();
		const allRefeicoes = await RefeicaoClass.findByUserId(id);
		const onDietRefeicoes = await RefeicaoClass.findRefeicoesOnDietByUserId(id);
		const offDietRefeicoes = await RefeicaoClass.findRefeicoesOffDietByUserId(id);
		const { bestOnDietSequence } = allRefeicoes.reduce(
			(acc, refeicao) => {
				if (refeicao.esta_na_dieta) {
					acc.currentSequence += 1;
				} else {
					acc.currentSequence = 0;
				}

				if (acc.currentSequence > acc.bestOnDietSequence) {
					acc.bestOnDietSequence = acc.currentSequence;
				}

				return acc;
			},
			{ bestOnDietSequence: 0, currentSequence: 0 }
		);
		const response = {
			allRefeicoes: allRefeicoes.length,
			onDietRefeicoes: onDietRefeicoes.length,
			offDietRefeicoes: offDietRefeicoes.length,
			bestOnDietSequence
		};
		return reply.status(200).send(response);
	}
}
