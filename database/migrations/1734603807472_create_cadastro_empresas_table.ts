import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'cadastro_empresas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
      .integer('user_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

      table.string('nome')
      table.string('email')
      table.string('endereco')
      table.bigInteger('cnpj')
      table.string('descricao')
      table.string('senha')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}