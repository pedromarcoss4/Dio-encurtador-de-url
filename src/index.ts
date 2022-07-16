import { URLController } from 'controller/URLController'
import express from 'express'
import { json } from 'stream/consumers'

const api = express()
api.use(express,json())

const database = new MongoConnection()
database.connect()

const urlController = new URLController()
api.post('/shorten', urlController.shorten)
api.get('/:hash',urlController.redirect)

//api.get('/test',(req:Request,res:Response)=>{
 //   res.json({success:true})
//}) fiquei com dó de apagar.... kkkkk deixar para aprendizado

api.listen(5000,() => console.log('Express listening'))