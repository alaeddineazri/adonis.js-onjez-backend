// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProjectsController {
    public async index() {
        return 'Get projects ';
    }

    public async store() {
        return 'post projects ';
    }

    public async show() {
        return 'get project by id ';
    }

    public async update() {
        return 'update project '
    }

    public async destroy() {
        return ' delete project ';
    }

}
