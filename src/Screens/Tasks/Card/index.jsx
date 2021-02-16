import { api } from '../../../utils/api'
//import './tasks.css'

const Card = ({ id, titulo, fecha, descripcion, asignada, estado, onTaskStatusChange }) => {

    const handleClick = (newStatus) => {
        api.patch(`/tasks/${id}.json`, { estado: newStatus })
            .then(response => {
                if (response.statusText === 'OK') {

                    onTaskStatusChange()
                }
            })
    }

    const colorearCard = () => {
        switch (estado) {
            case 'pendiente':
                return 'bg-info';
            case 'realizada':
                return 'bg-success';
            default:
                return 'bg-danger'
        }
    }

    return (
        <div key={id} className='card border-dark mb-2' >
            <div className='card-header border-dark text-center' >
                <button className='btn btn-outline-info btn-sm me-2' onClick={() => handleClick('pendiente')} >Pendiente</button>
                <button className='btn btn-outline-success btn-sm me-2' onClick={() => handleClick('realizada')} >Realizada</button>
                <button className='btn btn-outline-danger btn-sm' onClick={() => handleClick('cancelada')} >Cancelada</button>
            </div>
            <div className={`card-body p-3 ${colorearCard()}`}>
                <h5 className="card-title mt-2 mb-2">Titulo: {titulo}</h5>
                <h6 className="float-right"><b>Fecha:</b>{fecha}</h6>
                <p className=" card-text mb-0 pr-2 mb-2 d-inline-block"><b>Descripción:</b> {descripcion}</p>
                <p className=" card-text align-middle"><b>Asignada a: {asignada}</b></p>
            </div>
        </div>
    )
}

export { Card }