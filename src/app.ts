import fastify from "fastify";
import cookie from "@fastify/cookie";
import { usuarioRouter } from "./routes/usuario";
import { refeicaoRouter } from "./routes/refeicao";

export const app = fastify();
app.register(cookie);

app.register(usuarioRouter, { prefix: "/usuario" });
app.register(refeicaoRouter, { prefix: "/refeicao" });