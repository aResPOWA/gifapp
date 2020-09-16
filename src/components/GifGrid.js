import React, { Fragment } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categoria}) => {

    // const [gifs, setGifs] = useState(['']);

    // useEffect(() => {
    //     getGifs(categoria)
    //         .then((gifs) => {setGifs(gifs)})
    // }, [categoria]);
    
    
    // getGifs();
    
    const {data, loading} = useFetchGifs();

    return (
        <Fragment>
            <h3>{categoria}</h3>
            {loading && <p className='animate__animated animate__flash'>Cargando...</p>}
            <div className='card-grid'>
                {
                    data.map((gif) => {
                        return (
                            <GifGridItem 
                                key={gif.id} 
                                {...gif} 
                            ></GifGridItem>
                        );
                    })
                }

            </div>
        </Fragment>
    )
}
