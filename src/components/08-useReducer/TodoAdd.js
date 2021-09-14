import React from 'react';
import {useForm} from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {

    //estado del formulario
    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        //evito que el input se grabe vacío
        if(description.trim().length <=1)
            {return;}

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddTodo(newTodo);

        reset();
    }

    return (
        <>

            <h4>Agregar Todo</h4>
            <hr />
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="Aprender.."
                        autoComplete="off"
                        autoCapitalize="on"
                        onChange={handleInputChange}
                        value={description}
                    />

                    <button
                        type="submit"
                        className="btn btn-outline-primary mt-1 btn-block">
                                    Agregar
                    </button>

                </form>
            
        </>
    )
}
