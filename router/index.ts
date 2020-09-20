import { Router, Request, Response } from 'express';

const router: Router = Router()
router.get('/api/getTest', (req: Request, res:Response) => {
  console.log('----------');
  res.send(req.query)
})
router.post('/api/postTest', (req:Request, res:Response) => {
  res.send(req.body)
})

export default router;