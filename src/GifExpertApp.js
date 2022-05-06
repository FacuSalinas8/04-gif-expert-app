import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'DBZ', 'Samurai X'];
    
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () =>{
        
    //     //1) Forma uno
    //     // setCategories ([...categories,'Caballeros del Zodiaco']);
        
    //     //2) Forma dos usando callbacks (...categor lo que hace es tener los obtener los datos
    //     // que ya vienen y agregar CDZ)
    //     setCategories(categor =>[...categor, 'Caballeros del Zodiaco']);
        
    // }


    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />


            <ol>
                {
                    categories.map((category,index) =>(
                        <GifGrid 
                        key={category}
                        category={category}/>))
                }

            </ol>
        </div>
    )
}
