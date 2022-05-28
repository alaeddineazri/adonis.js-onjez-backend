import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Task from 'App/Models/Task'

export default class TasksController {
    
    public async index() {
        return  Task.all()
    }

    public async store({request, response}: HttpContextContract) {
        const newTaskSchema= schema.create({
            name: schema.string({ trim: true }),
            note: schema.string({ trim: true }),
            due_date: schema.date(),
            completed: schema.boolean(),
            archived: schema.boolean(),
            priority: schema.string(),
            related_to: schema.number(),
            assigned_to: schema.string(),
            created_by: schema.string(),
        })
        const payload = await request.validate({schema: newTaskSchema})
        const task = await Task.create(payload)
        response.status(201)
        return task
    }

    public async show({ params }: HttpContextContract) {
        return Task.findOrFail(params.id);
    }

    public async update({ params, request }: HttpContextContract) {
        const body = request.body()
        const task = await Task.findOrFail(params.id)
        task.merge(body)
        return task.save()
    }

    public async destroy({ params, response }: HttpContextContract) {
        const task = await Task.findOrFail(params.id)
        response.status(204)
        await task.delete()
        return task;
    }

    
}
