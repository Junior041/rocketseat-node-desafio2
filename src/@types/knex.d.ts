import "knex";

declare module "knex/types/tables" {
  export interface Tables {
    usuario: {
      id: string
      session_id: string
      nome: string
      email: string
      created_at: string
      updated_at: string
    }

    refeicao: {
        id: string
        usuario_id: string
        nome: string
        descricao: string
        esta_na_dieta: boolean
        data: Date
        created_at: Date
        updated_at: Date
    }
  }
}