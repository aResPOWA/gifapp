import React, {Fragment, useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    // const categorias = ['Super man', 'Batman', 'Green Lantern'];

    const [categorias, setCategorias] = useState(['Random']);

    // const handleAdd = () => {
    //     setCategorias([
    //         ...categorias,
    //         'Flash'
    //     ]);
    // }

    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory
                setCategorias = {setCategorias}
                // categorias = {categorias}
            ></AddCategory>
            <hr/>
            {/* <button
                onClick={handleAdd}
            >Agregar nuevo</button> */}
            {
                categorias.map((categoria) => {
                    return (
                        <GifGrid
                            key = {categoria} 
                            categoria = {categoria}
                        ></GifGrid>
                    )
                })
            }
        </Fragment>
    )
}
