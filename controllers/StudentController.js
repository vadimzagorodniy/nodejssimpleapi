import Student from '../models/students.js'

class StudentController {
    async create(req , res) {
        const {firstname , lastname} = req.body
        const student = await Student.create({
            firstname , lastname
        });
        res.json(student)
    }
    async getAll(req , res) {
        const students = await Student.findAll()
        res.json(students);
    }
    async getOne(req , res) {
        const {id} = req.params
        const students = await Student.findByPk(id)
        res.json(students);
    }
    async delete(req , res) {
        const {id} = req.params
        const student = await Student.findByPk(id);
        res.json(student);
        await student.destroy();

    }
    async update(req , res) {
        const {id , firstname , lastname} = req.body
        const student = await Student.findByPk(id);
        student.update(req.body , {
            where: {
                id: id
            }
        })
        res.json(student)
    }
}

export default new StudentController