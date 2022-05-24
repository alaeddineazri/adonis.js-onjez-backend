import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'tasks'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.text('note').notNullable()
      table.dateTime('due_date').notNullable()
      table.boolean('completed').notNullable()
      table.boolean('archived').notNullable()
      table.string('priority').notNullable()
      table.integer('related_to').notNullable()
      table.string('assigned_to').notNullable()
      table.string('created_by').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
