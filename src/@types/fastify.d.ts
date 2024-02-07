import "fastify";

declare global {
  interface FastifyRouteConfig {
    sessionId: string;
  }
}
declare module "fastify" {
  export interface FastifyRequest {
    usuario?: {
      id: string
      session_id: string
      nome: string
      email: string
      created_at: string
      updated_at: string
    }
  }
}