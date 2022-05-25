import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Project from 'App/Models/Project'

export default class ProjectsController {
    public async index() {
        return Project.all();

    }

    public async store({request, response}: HttpContextContract) {
        const newProjectSchema= schema.create({
            name: schema.string({ trim: true }),
            summary: schema.string({ trim: true }),
            description: schema.string({ trim: true }),
            owner_id: schema.number(),
            office_id: schema.number(),
            team_id: schema.number(),
        })
        const payload = await request.validate({schema: newProjectSchema})
        const project = await Project.create(payload)
        response.status(201)
        return project
    }

    public async show({ params }: HttpContextContract) {
        return Project.findOrFail(params.id);
    }

    public async update({ params, request }: HttpContextContract) {
        const body = request.body()
        const project = await Project.findOrFail(params.id)
        project.merge(body)
        return project.save()
    }

    public async destroy({ params, response }: HttpContextContract) {
        const project = await Project.findOrFail(params.id)
        response.status(204)
        await project.delete()
        return project;
    }

}
