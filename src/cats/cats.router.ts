import { Cat } from './cats.models'
import { Router } from 'express'
import {
  createCat,
  deleteCat,
  updateCat,
  readAllcat,
  readOnecat,
} from './cars.service'

const router = Router()

router.get('/cats', readAllcat)

router.get('/cats/:id', readOnecat)

router.post('/cat', createCat)

router.put('/cats/:id', updateCat)

router.delete('cats/:id', updateCat)

export default router
