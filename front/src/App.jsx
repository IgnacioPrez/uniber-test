import { useRef, useState } from 'react'
import { SELECT_VALUES, endPoint } from '../utils/constants'
import { getRequest } from '../service/db.services'
import { Table } from './components/Table'
import { CardDelivery } from './components/CardDelivery'

function App() {
  const [searchSelected, setSearchSelected] = useState('')
  const [rpv, setRpv] = useState([])
  const [rpe, setRpe] = useState([])

  const inputRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (searchSelected === SELECT_VALUES.RPV) {
      const rpvData = await getRequest(endPoint.RPV, inputRef.current.value)
      if (Array.isArray(rpvData)) {
        setRpv(rpvData)
        inputRef.current.value = ''
        setRpe([])
        return
      }else{
        alert('Id incorrecto')
      }
    } else {
      const rpeData = await getRequest(endPoint.RPE, inputRef.current.value)
      if (Array.isArray(rpeData)) {
        setRpe(rpeData)
        inputRef.current.value = ''
        setRpv([])
      }else{
        alert('Id incorrecto')
      }
    }
  }
  console.log(rpe,rpv)
  console.log(SELECT_VALUES.RPV === searchSelected)
  return (
    <div className="vw-100 vh-100 row ">
      <aside className="shadow h-100 d-flex align-items-center gap-3  flex-column col-2 fw-bold ">
        <h2 className="fs-4 mh-25  w-100 text-center p-2 pt-4">Administración</h2>
        <nav className="w-100  h-100 container align-items-center">
          <ul className="w-100 d-flex flex-columm list-group align-items-center gap-5 ">
            <li className="w-100">
              <button className="list-group-item list-group-item-action active text-center fw-bold">Inicio</button>
            </li>
            <li className="w-100">
              <button className="list-group-item list-group-item-action text-center pe-auto">Listas</button>
            </li>
            <li className="w-100">
              <button className="list-group-item list-group-item-action text-center pe-auto">Calendario</button>
            </li>
            <li className="w-100">
              <button className="list-group-item list-group-item-action text-center pe-auto">Progreso</button>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="col-10 row ">
        <header className="w-100 mh-20 d-flex align-items-center ">
          <h2 className="fs-3">Hola, administrador 🖐!</h2>
        </header>
        <main className="col-10 col-start-2 mh-100 container d-flex w-100 flex-column " style={{height:550}}>
          <div className="w-100 gap-2 p-2 d-flex justify-content-center h-25 align-items-center">
            <select
              className="form-select w-25"
              defaultValue={searchSelected}
              onChange={(e) => setSearchSelected(e.target.value)}
            >
              <option value="" disabled>
                Seleccione su busqueda
              </option>
              <option value="rpv">Reporte de ventas</option>
              <option value="rpe">Reporte de entregas</option>
            </select>
            <form className="w-75" onSubmit={handleSubmit}>
              <input
                className="form-control "
                disabled={searchSelected === ''}
                placeholder="Reporte de ventas"
                name="search"
                ref={inputRef}
              />
            </form>
          </div>
          <article className="h-75 border container  w-100 d-flex  overflow-y-scroll flex-wrap  gap-5">
            {rpv.length > 0 &&
              rpv.map((data) => {
                return (
                  <div className="row  w-50  " key={crypto.randomUUID()}>
                    <Table {...data} />
                  </div>
                )
              })}
            {rpe.length > 0 &&
              rpe.map((value) => {
                return <CardDelivery key={crypto.randomUUID()} {...value} />
              })}
          </article>
        </main>
      </div>
    </div>
  )
}

export default App
