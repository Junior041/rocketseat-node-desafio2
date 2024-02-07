import { FastifyInstance } from "fastify";
import { CreateUsuarioController } from "../controller/usuario/create";
import { CookieMiddleware } from "../middleware/Cookie";
import { SesionIdController } from "../controller/usuario/sessionId";
import { GetAllUsuarioController } from "../controller/usuario/getAll";

export const usuarioRouter = async(app: FastifyInstance) => {
	app.post("/", {preHandler: new CookieMiddleware().execute}, new CreateUsuarioController().create);
	app.post("/sessionId",new SesionIdController().execute);
	app.get("/", new GetAllUsuarioController().execute);
};