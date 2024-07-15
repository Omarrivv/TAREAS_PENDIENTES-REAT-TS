import { useState } from 'react';
import { ListaTareas } from './listaTareas';

export const TodoApp = () => {
    const [nuevaTarea, setNuevaTarea] = useState('');
    const [listaTareas, setListaTareas] = useState<string[]>([]);  // Especifica que es un array de strings

    const handleAddTask = () => {
        if (nuevaTarea.trim() === '') return;  // Verificar que la tarea no esté vacía
        setListaTareas(tareaAnterior => [...tareaAnterior, nuevaTarea]);  // Añadir la nueva tarea a la lista
        setNuevaTarea('');  // Limpiar el campo de entrada
    };

    const handleDeleteTask = (index: number) => {
        setListaTareas(tareaAnterior => tareaAnterior.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h1>Lista Tareas Pendientes</h1>
            <div>
                <input
                    type="text"
                    placeholder="Ingrese el nombre de la tarea"
                    value={nuevaTarea}
                    onChange={(e) => setNuevaTarea(e.target.value)}
                />
                <button onClick={handleAddTask}>Agregar Tarea</button> {/* Agregar texto al botón */}
            </div>
            <ListaTareas listaTareas={listaTareas} borrarTarea={handleDeleteTask} />
        </div>
    );
};
