import { Request, Response } from 'express'
import { createMenuObject } from '../helpers/createMenuObject'
import * as Pet from '../models/Pet'

function home(request: Request, response: Response) {
  const petList = Pet.getAllPets()

  response.render('pages/index', {
    menu: createMenuObject('all'),
    banner: {
      title: 'Todos os animais',
      background: 'allanimals.jpg',
    },
    petList
  })
}

function dogs(request: Request, response: Response) {
  const dogs = Pet.getPetType('dog')

  response.render('pages/index', {
    menu: createMenuObject('dog'),
    banner: {
      title: 'Cachorros',
      background: 'banner_dog.jpg'
    },
    petList: dogs
  })
}

function cats(request: Request, response: Response) {
  const cats = Pet.getPetType('cat')

  response.render('pages/index', {
    menu: createMenuObject('cat'),
    banner: {
      title: 'Gatos',
      background: 'banner_cat.jpg'
    },
    petList: cats
  })
}

function fishes(request: Request, response: Response) {
  const fishes = Pet.getPetType('fish')

  response.render('pages/index', {
    menu: createMenuObject('fish'),
    banner: {
      title: 'Peixes',
      background: 'banner_fish.jpg'
    },
    petList: fishes
  })
}

export { home, dogs, cats, fishes}
