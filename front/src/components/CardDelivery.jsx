export const CardDelivery = ({id,des,fecha_ent,tipcom_des,red,sorstock,trial045,sorsaldo,facturador}) => {
    const formatData = (date) => {
      const newDate = new Date(date)
      return newDate.toLocaleString()
    }
  return (
    <div className="card w-25 h-65 d-flex flex-column gap-3">
      <div className="d-flex aling-item-center justify-content-between border border-botttom">
        <p className="ps-2 fw-bold">ID:{id}</p>
        <p className="pe-2 fw-bold">{formatData(fecha_ent)}</p>
      </div>
      <div className="text-body-secondary ">
        <p className="ps-2">Des: {des}</p>
      </div>
      <div className="d-flex  aling-item-center justify-content-between   text-body-secondary">
        <p className="ps-2 ">Tipcom: {tipcom_des}</p>
        <p className="pe-2 ">red: {red?red:'---'}</p>
      </div>
      <div className="d-flex  aling-item-center justify-content-between text-body-secondary   ">
        <p className="ps-2 ">facturador: {facturador ? facturador : '---'}</p>
        <p className="pe-2 ">trial: {trial045? trial045:'---'}</p>
      </div>
      <div className="d-flex  aling-item-center justify-content-between text-body-secondary">
        <p className="ps-2 ">sorsaldo: {sorsaldo?sorsaldo : '---'}</p>
        <p className="pe-2 ">sorstock: {sorstock? sorstock : '---'}</p>
      </div>
    </div>
  )
}
