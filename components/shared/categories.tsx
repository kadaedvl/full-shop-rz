"use client"
import './categories.css'
import { useCategoryStore } from '@/store/category';
const item =
    [
        {
            id: 1,
            name: "Одяг",
        },
        {
            id: 2,
            name: "Аксесуари",
        },
        {
            id: 3,
            name: "Диски",
        },
        {
            id: 4,
            name: "Касети",
        },
        {
            id: 5,
            name: "Платівки",
        }
    ]

const Categories: React.FC = () => {
    const ActiveCategoryId = useCategoryStore((state) => state.activeId);
    console.log(ActiveCategoryId)
    return (
        <div className='container container-categories'>
            <ul className="cat-list">
                {item.map((el) =>
                    <a key={el.id} href={`/#${el.name}`}><li className={ActiveCategoryId === el.id ? 'active' : ''}>{el.name}</li></a>)}
            </ul>
        </div>
    )
}

export default Categories