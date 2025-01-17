"use client"
import { ReactEventHandler, useRef, useState } from 'react'
import './header.css'

const Header: React.FC = () => {

    const [searchValue, setSearchValue] = useState('');
    const localInputValue = useRef('')

    const handleSearchValue = (event) => {
        setSearchValue(event.target.value)
    }
    return (
        <header>
            <div className="container-header">
                <p>Header</p>
                <div className='header-input'>
                    <input placeholder="Search..." onChange={() => handleSearchValue(event)} value={searchValue}/>
                    {searchValue&&<p className='clear' onClick={()=>setSearchValue('')}>X</p>}
                </div>
                <div className='header-activ'>
                    <button>Login</button>
                    <button>0 UAH | 0 item</button>
                </div>
            </div>
        </header>
    )
}
export default Header