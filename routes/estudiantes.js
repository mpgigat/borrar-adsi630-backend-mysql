const estudiantes=require('../controllers/students')

module.exports = (app)=>{
    app.get('/estudiantes',estudiantes.list)
    app.get('/estudiantes/:id',estudiantes.listById)
    app.post('/estudiantes/',estudiantes.create)
    app.put('/estudiantes/:id',estudiantes.update)
    app.delete('/estudiantes/:id',estudiantes.deleteRegister)

}