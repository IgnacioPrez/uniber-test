import { Router } from 'express'
import { deliveryRport, salesReport } from '../controller/manage.controller.js'

const route = Router()

route.get('/report-sales/:reportId', salesReport)
route.get('/movement-report/:deliveryId', deliveryRport)

export default route
