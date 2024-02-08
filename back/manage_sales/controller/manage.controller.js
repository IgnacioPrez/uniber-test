import { ManageService } from '../service/manage.service.js'

const service = new ManageService()

export const salesReport = async (req, res) => {
  const { reportId } = req.params
  try {
    if (!reportId) {
      res.status(404).json({
        message: 'Non-existent report'
      })
    }
    const data = await service.getReport(reportId)
    if (!Array.isArray(data) && data.length > 0) {
      res.status(404).json({ status: 404, err: data })
      return
    }
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({
      message: 'Non-existent report'
    })
  }
}

export const deliveryRport = async (req, res) => {
  const { deliveryId } = req.params
  try {
    if (!deliveryId) {
      res.status(404).json({
        message: 'Error delivery ID'
      })
      return
    }

    const data = await service.getDelivery(deliveryId)
    if (!Array.isArray(data) && data.length > 0) {
      res.status(404).json({ status: 404, err: data })
      return
    }

    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({
      message: 'Server error'
    })
  }
}
