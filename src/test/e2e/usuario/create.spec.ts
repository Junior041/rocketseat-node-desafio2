import { afterAll, beforeAll, beforeEach, describe, it } from "vitest";
import { execSync } from "child_process";
import request from "supertest";
import { app } from "../../../app";

describe("USUARIO", async () => {
	beforeAll(async () => {
		await app.ready();
	});

	afterAll(async () => {
		await app.close();
	});

	beforeEach(() => {
		execSync("yarn knex migrate:rollback --all");
		execSync("yarn knex migrate:latest");
	});

	it("DEVE SER POSSIVEL CRIAR UM USUARIO", async () => {
		await request(app.server).post("/usuario").send({ nome: "teste", email: "ismaeljunior1508@gmail.com", senha: "123" }).expect(201);
	});
});
