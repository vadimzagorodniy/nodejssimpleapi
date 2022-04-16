import Router from 'express'
import StudentsController from '../controllers/StudentController.js'

const router = new Router();

router.post('/students' , StudentsController.create)
router.get('/students' , StudentsController.getAll)
router.get('/students/:id' , StudentsController.getOne)
router.delete('/students/:id' , StudentsController.delete)
router.put('/students' , StudentsController.update)

export default router;