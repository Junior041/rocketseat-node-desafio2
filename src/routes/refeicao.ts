import { FastifyInstance } from "fastify";
import { CheckSessionIdExists } from "../middleware/CheckIfExistsSessionId";
import { CreateRefeicaoController } from "../controller/refeicao/create";
import { GetAllByUserRefeicaoController } from "../controller/refeicao/getAllByUser";
import { FindRefeicaoByIdController } from "../controller/refeicao/findRefeicaoById";
import { MetricsByUserRefeicaoController } from "../controller/refeicao/metrics";
import { DeleteRefeicaoByIdController } from "../controller/refeicao/delete";

export const refeicaoRouter = async(app: FastifyInstance) => {
	app.post("/", {preHandler: new CheckSessionIdExists().execute}, new CreateRefeicaoController().create);
	app.get("/", {preHandler: new CheckSessionIdExists().execute} ,new GetAllByUserRefeicaoController().get);
	app.get("/:id", {preHandler: new CheckSessionIdExists().execute} ,new FindRefeicaoByIdController().find);
	app.get("/metrics", {preHandler: new CheckSessionIdExists().execute} ,new MetricsByUserRefeicaoController().get);
	app.get("/delete", {preHandler: new CheckSessionIdExists().execute} ,new DeleteRefeicaoByIdController().delete);
};