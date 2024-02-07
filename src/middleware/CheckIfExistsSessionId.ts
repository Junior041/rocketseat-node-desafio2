import { FastifyReply, FastifyRequest } from "fastify";
import { Usuario } from "../core/usuario";

export class CheckSessionIdExists {
	async execute(request: FastifyRequest, reply: FastifyReply) {
		const sessionId = request.cookies.sessionId;

		if (!sessionId) {
			return reply.status(401).send({ error: "Unauthorized" });
		}
		const UsuarioClass = new Usuario();
		const usuario = await UsuarioClass.findBySessionId(sessionId);
		
		if (!usuario) {
			return reply.status(401).send({ error: "Unauthorized" });
		}		
		console.log(sessionId);
		request.usuario = usuario;
	}
}
