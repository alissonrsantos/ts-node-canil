import { Request, Response } from 'express';
import * as Pet from '../models/Pet'
import { createMenuObject } from '../helpers/createMenuObject'

function search(request: Request, response: Response) {
  const petName = request.query.q as string

  const pet = Pet.getPetName(petName)

  response.render('pages/index', {
    menu: createMenuObject(''),
    petList: pet,
    petName
  })
}

export { search }
