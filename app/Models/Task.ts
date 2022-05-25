import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Task extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public note: string

  @column()
  public due_date: DateTime

  @column()
  public completed: boolean

  @column()
  public archived: boolean

  @column()
  public priority: string

  @column()
  public related_to: number

  @column()
  public assigned_to: string

  @column()
  public created_by: string
  

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
