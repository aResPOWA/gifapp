import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategorias}) => {
    
    const [valorInput, setValorInput] = useState('');
    
    const handleInputChange = (e) => {
        setValorInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(valorInput.trim().length <= 0) {
            console.log('Debes agregar algún valor');
            return;
        } else {
            //De esta forma tenemos un callback, en donde traemos la referencia 
            //de los valores que trae la función por parámetro
            setCategorias((categorias) => [valorInput, ...categorias]);
            setValorInput('');
            
        }
    }

    return (
        <form
            onSubmit = {handleSubmit}
        >
            <input 
                type = 'text'
                value = {valorInput}
                onChange = {handleInputChange}
                placeholder = 'Agrega un nuevo héroe'
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategorias : PropTypes.func.isRequired
}