import {Router} from 'express'

//importar o apiController
import * as apiController from '../controllers/apiController'

const router = Router()

router.get('/ping',apiController.ping)

router.get('/random', apiController.random)

router.get('/nome',apiController.nome)

/*nossa API vai esperar uma requisição
GET para /ping e quando eu executar /ping ele
vai retornar um objeto pong como true */

//gerando um número aleatorio

//criando o endpoint phrases

router.post('/frases',apiController.createPhrase)

router.get('/frases',apiController.listPhrases)

router.get('/frases/:id',apiController.getPhrase)

router.put('/frases/:id',apiController.updatePhrase)

router.delete('/frases/:id',apiController.deletePhrase)

export default router