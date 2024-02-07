import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { Usuario } from "../../core/usuario";
import { randomUUID } from "crypto";

const usuarioSchema = z.object({
	id: z.string(),
});

export class SesionIdController {
	public async execute(request: FastifyRequest, reply: FastifyReply) {
		const { id } = usuarioSchema.parse(request.body);

		const UsuarioClass = new Usuario();
		const usuarioExists = await UsuarioClass.findById(id);
		if (!usuarioExists) {
			return reply.status(400).send("Usuario não existe.");
		}
		
		const sessionId = randomUUID();

		reply.setCookie("sessionId", sessionId, {
			path: "/",
			maxAge: 1000 * 60 * 60 * 24 * 7,
		});
		
		request.cookies.sessionId = sessionId;
		await UsuarioClass.updateSessionId( usuarioExists.id, String(sessionId));
		return reply.status(200).send(sessionId);
	}
}
