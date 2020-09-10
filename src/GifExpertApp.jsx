import React, { useState } from "react"; //rafc (Atajo para crear un componente en react)
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([
        "One Punch",
        "Samurai X",
        "Dragon Ball",
    ]);

    // const handleAdd = () => {
    // setCategories((cats) => [...categories, "HunterXHunter"]);
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory />
            <hr />
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {categories.map((category) => {
                    return <li key={category}>{category}</li>;
                })}
            </ol>
        </>
    );
};
