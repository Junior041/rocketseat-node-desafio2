import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { Usuario } from "../../core/usuario";

const usuarioSchema = z.object({
	nome: z.string(),
	email: z.string().email(),
});

export class CreateUsuarioController {
	public async create(request: FastifyRequest, reply: FastifyReply) {
		
		const sessionId = request.cookies.sessionId;
		const { email, nome } = usuarioSchema.parse(request.body);

		const UsuarioClass = new Usuario();
		const emailAlreadyExists = await UsuarioClass.findByEmail(email);
		
		if (emailAlreadyExists) {
			return reply.status(400).send("Email já registrado.");
		}
		
		await UsuarioClass.create(nome, email, sessionId);
		return reply.status(201).send();
	}
}
