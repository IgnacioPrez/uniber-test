import { pool } from '../../config/db.js'

export class ManageService {
  async getReport (reportId) {
    try {
      const res = await pool.query(`
        SELECT 
          st_movivta_c.id, 
          st_movivta_c.let, 
          st_movivta_c.pref, 
          st_movivta_c.num, 
          st_movivta_c.total
        FROM 
          st_movivta_c
        INNER JOIN 
          st_movivta_i ON st_movivta_i.id = st_movivta_c.id
        WHERE 
          st_movivta_i.id = ${reportId} AND 
          st_movivta_c.id = ${reportId};
      `)

      return res.rows
    } catch (err) {
      return err
    }
  }

  async getDelivery (deliveryId) {
    try {
      const res = await pool.query(`
      SELECT 
        lg_entrega_i.id, 
        lg_entrega_i.des, 
        lg_entrega_c.fecha_ent,
        lg_entrega_c.deposito_id,
        st_tipcomp.des AS tipcomp_des,
        st_tipcomp.red,
        st_tipcomp.sorstock,
        st_tipcomp.sorsaldo,
        st_tipcomp.facturador,
        st_tipcomp.trial045
      FROM 
        lg_entrega_i
      LEFT JOIN 
        lg_entrega_c ON lg_entrega_c.id = lg_entrega_i.id
      LEFT JOIN 
        st_tipcomp ON lg_entrega_c.deposito_id = st_tipcomp.id
      WHERE 
        lg_entrega_i.id = ${deliveryId};
    `)
      return res.rows
    } catch (err) {
      return err
    }
  }
}
