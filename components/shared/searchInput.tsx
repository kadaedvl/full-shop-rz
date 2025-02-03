"use client"
import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import './seacrchInput.css'
import Link from "next/link";

const SearchInput = () => {
    const [inputOnFocus, setInputOnFocus] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const localInputValue = useRef('')

    const ref = useRef(null)

    useClickAway(ref, () => {
        setInputOnFocus(false)
    })

    const handleSearchValue = (event: any) => {
        setSearchValue(event.target.value)
    }
    return (
        <>
            {inputOnFocus && <div className="focusBg"></div>}
            <div ref={ref} className="mainInput" onFocus={() => setInputOnFocus(true)}>
                <input placeholder="Search..." onChange={() => handleSearchValue(event)} value={searchValue} />
                {searchValue && <p className='clear' onClick={() => setSearchValue('')}>X</p>}
            </div>
            <div>
                <Link className="searchResults" href={'./'}>
                    <img src="https://st.depositphotos.com/1008244/3066/v/450/depositphotos_30664155-stock-illustration-vinyl-disc-with-music-notes.jpg"></img>
                    <span>New Product</span>
                </Link>
            </div>
        </>
    )
}

export default SearchInput;