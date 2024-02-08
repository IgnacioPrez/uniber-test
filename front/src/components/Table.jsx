export const Table = (data) => {
  const newData = { ...data, letFac: data.let };
  const transformToMoney = (num) => num.toLocaleString('es-AR',{style:'currency',currency:'ARS'})
  const {pref,id,total,num,letFac} = newData

  return (
    <table className="table table-striped table-hover ">
      <thead>
        <tr>
          <th scope="col">Movimiento de venta</th>
          <th scope="col">Importe venta</th>
          <th scope="col">Prefijo factura</th>
          <th scope="col">Tipo de factura</th>
          <th scope="col">Numero factura</th>
        </tr>
      </thead>
      <tbody >
        <tr>
          <th scope="row">{id}</th>
          <td>{transformToMoney(total)}</td>
          <td>{pref}</td>
          <td>{letFac}</td>
          <td>{num}</td>
        </tr>
      </tbody>
    </table>
  )
}

