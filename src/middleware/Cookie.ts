import { randomUUID } from "crypto";
import { FastifyReply, FastifyRequest } from "fastify";

export class CookieMiddleware {
	public async execute(request: FastifyRequest, reply: FastifyReply) {
		let sessionId = request.cookies.sessionId;
        
		if (!sessionId) {
			sessionId = randomUUID();

			reply.setCookie("sessionId", sessionId, {
				path: "/",
				maxAge: 1000 * 60 * 60 * 24 * 7,
			});
		}
		request.cookies.sessionId = sessionId;
        
	}
}