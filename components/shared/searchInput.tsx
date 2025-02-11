"use client"
import { useRef, useState } from "react";
import { useClickAway, useDebounce } from "react-use";
import './seacrchInput.css'
import Link from "next/link";
import { Api } from "@/services/api-client";
import { Product } from "@prisma/client";

const SearchInput = () => {
    const [inputOnFocus, setInputOnFocus] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [products, setProducts] = useState<Product[]>([]);

    const ref = useRef(null)

    useClickAway(ref, () => {
        setInputOnFocus(false)
    })

    const handleSearchValue = (event: any) => {
        setSearchValue(event.target.value)
    }
    useDebounce(async () => {
        try {
            const responce = await Api.products.search(searchValue);
            setProducts(responce);
        } catch (error) {
            console.error(error);
        }

    }, 500, [searchValue])

    const CleanFields = () => {
        setSearchValue('');
    }

    const onLinkClick = () => {
        setInputOnFocus(false);
        CleanFields();
        // setProducts([]);
    }
    return (
        <>
            {inputOnFocus && <div className="focusBg"></div>}
            <div ref={ref} className="mainInput" onFocus={() => setInputOnFocus(true)}>
                <input placeholder="Search..." onChange={() => handleSearchValue(event)} value={searchValue} />
                {searchValue && <p className='clear' onClick={() => CleanFields()}>X</p>}
                {inputOnFocus && <div className="searchList">
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            className="searchResults"
                            href={`/product/${product.id}`}
                            onClick={() => onLinkClick()}
                        >
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                            />
                            <span>{product.name}</span>
                        </Link>
                    ))}

                </div>}
            </div>

        </>
    )
}

export default SearchInput;