import { Tarea } from "./Tarea"

type ListaTareas = {
    listaTareas: string[]
    borrarTarea: (id: number) => void
}

export const ListaTareas = ({ listaTareas, borrarTarea }: ListaTareas) => {
    return (
        <div className="taskList">
            <h1>Lista Tareas Pendientes</h1>
            <ul>
                {listaTareas.map((tarea, index) => (
                    <Tarea key={index} tarea={tarea} borrarTarea={() => borrarTarea(index)}></Tarea>
                ))}
            </ul>
        </div>
    )
}

