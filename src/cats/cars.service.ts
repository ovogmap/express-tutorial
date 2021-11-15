import { Cat } from './cats.models'
import { Router, Request, Response } from 'express'

export const readAllcat = (req: Request, res: Response) => {
  try {
    const cats = Cat

    res.status(200).send({ success: true, data: cats })
  } catch (e) {
    res.status(400).send({
      success: false,
      error: e.message,
    })
  }
}

export const readOnecat = (req: Request, res: Response) => {
  try {
    const id: string = req.params.id

    if (!isNaN(parseInt(id, 10))) {
      res.status(400).send({
        success: false,
        error: 'id is not string',
        displayErrorMessage: '잘못된 아이디 값입니다.',
      })
    }
    console.log(isNaN(parseInt(id, 10)))

    const cat = Cat.find((v) => v.id === id)

    res.status(200).send({ success: true, data: cat })
  } catch (e) {
    res.status(400).send({
      success: false,
      error: e.message,
    })
  }
}

export const createCat = (req: Request, res: Response) => {
  try {
    const data = req.body
    console.log('data', data)
    Cat.push(data)
    res.status(200).send({ success: true, data: data })
  } catch (e) {
    res.status(400).send({
      success: false,
      error: e.message,
    })
  }
}

export const updateCat = (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const body = req.body

    let result

    Cat.forEach((item) => {
      if (item.id === id) {
        item = body
        result = item
      }
    })
    res.send({
      success: true,
      data: {
        cat: result,
      },
    })
  } catch (e) {
    res.status(400).send({
      success: false,
      error: e.massage,
    })
  }
}

export const deleteCat = (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const filterCats = Cat.filter((item) => item.id !== id)

    res.send({
      success: true,
      data: filterCats,
    })
  } catch (e) {
    res.status(400).send({
      success: false,
      error: e.massage,
    })
  }
}
