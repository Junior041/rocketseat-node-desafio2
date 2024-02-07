import { FastifyReply, FastifyRequest } from "fastify";
import { Usuario } from "../../core/usuario";


export class GetAllUsuarioController {
	public async execute(request: FastifyRequest, reply: FastifyReply) {
		
		const UsuarioClass = new Usuario();
		
		return reply.status(200).send(await UsuarioClass.getAll());
	}
}
