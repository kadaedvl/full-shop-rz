"use client"
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import { useCategoryStore } from '@/store/category';
import './categories.css'

interface CategoriesPropsType {
    categories: any;
}
const Categories: React.FC<CategoriesPropsType> = ({ categories }) => {
    const ActiveCategoryId = useCategoryStore((state) => state.activeId);
    return (
        <div className='container container-categories'>
            <ul className="cat-list">
                {categories.map((el: { id: Key | null | undefined; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) =>
                    <a key={el.id} href={`/#${el.name}`}><li className={ActiveCategoryId === el.id ? 'active' : ''}>{el.name}</li></a>)}
            </ul>
        </div>
    )
}

export default Categories