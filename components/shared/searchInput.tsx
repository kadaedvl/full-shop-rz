"use client"
import { useEffect, useRef, useState } from "react";
import { useClickAway, useDebounce } from "react-use";
import './seacrchInput.css'
import Link from "next/link";
import { Api } from "@/services/api-client";
import { Product } from "@prisma/client";

const SearchInput = () => {
    const [inputOnFocus, setInputOnFocus] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [products, setProducts] = useState<Product[]>([]);
    const localInputValue = useRef('')

    const ref = useRef(null)

    useClickAway(ref, () => {
        setInputOnFocus(false)
    })

    const handleSearchValue = (event: any) => {
        setSearchValue(event.target.value)
    }
    useDebounce(() => {
        Api.products.search(searchValue).then(items => {
            setProducts(items);
        });
    }, 500, [searchValue])

    const CleanFields = () => {
        setSearchValue('');
    }

    const onLinkClick = () => {
        setInputOnFocus(false);
        CleanFields();
        setProducts([]);
    }
    return (
        <>
            {inputOnFocus && <div className="focusBg"></div>}
            <div ref={ref} className="mainInput" onFocus={() => setInputOnFocus(true)}>
                <input placeholder="Search..." onChange={() => handleSearchValue(event)} value={searchValue} />
                {searchValue && <p className='clear' onClick={() => CleanFields()}>X</p>}
            </div>
            <div className="searchList">
                {inputOnFocus && products.map((product) => (
                    <Link onClick={() => onLinkClick()} key={product.id} className="searchResults" href={`/product/${product.id}`}>
                        <img src={product.imageUrl} alt={product.name} />
                        <span>{product.name}</span>
                    </Link>
                ))}

            </div>
        </>
    )
}

export default SearchInput;