import { useState } from 'react'
import './categories.css'

const Categories: React.FC = () => {
    const [cat, setCat] = useState("Одяг");
    const item = ["Одяг", "Аксесуари", "Диски", "Касети", "Платівки"]
    return (
        <div className='container container-categories'>
            <ul className="cat-list">
                {item.map((el, index) => <li className={cat === el ? 'active' : ''} key={index} onClick={() => setCat(el)}>{el}</li>)}
            </ul>
        </div>
    )
}

export default Categories