import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Milestone from 'App/Models/Milestone'

export default class MilestonesController {
        
        public async index() {
            return Milestone.all();
    
        }
    
        public async store({request, response}: HttpContextContract) {
            const newMilestoneSchema= schema.create({
                name: schema.string({ trim: true }),
                description: schema.string({ trim: true }),
                due_date: schema.date(),
            })
            const payload = await request.validate({schema: newMilestoneSchema})
            const milestone = await Milestone.create(payload)
            response.status(201)
            return milestone
        }
    
        public async show({ params }: HttpContextContract) {
            return Milestone.findOrFail(params.id);
    
        }
    
        public async update({ params, request }: HttpContextContract) {
            const body = request.body()
            const milestone = await Milestone.findOrFail(params.id)
            milestone.merge(body)
            return milestone.save()
        }
    
        public async destroy({ params, response }: HttpContextContract) {
            const milestone = await Milestone.findOrFail(params.id)
            response.status(204)
            await milestone.delete()
            return milestone;
        }
    
        
}
