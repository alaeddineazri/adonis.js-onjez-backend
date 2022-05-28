import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import TaskMilestone from 'App/Models/TaskMilestone'



export default class TasksMilestonesController {
    public async index() {
        return TaskMilestone.all();

    }

    public async store({request, response}: HttpContextContract) {
        const newTaskMilestoneSchema= schema.create({
            task_id: schema.number(),
            milestone_id: schema.number(),
        })
        const payload = await request.validate({schema: newTaskMilestoneSchema})
        const taskMilestone = await TaskMilestone.create(payload)
        response.status(201)
        return taskMilestone
    }

    public async show({ params }: HttpContextContract) {
        return TaskMilestone.findOrFail(params.id);

    }

    public async update({ params, request }: HttpContextContract) {
        const body = request.body()
        const taskMilestone = await TaskMilestone.findOrFail(params.id)
        taskMilestone.merge(body)
        return taskMilestone.save()
    }

    public async destroy({ params, response }: HttpContextContract) {
        const taskMilestone = await TaskMilestone.findOrFail(params.id)
        response.status(204)
        await taskMilestone.delete()
        return taskMilestone;
    }

    
}
