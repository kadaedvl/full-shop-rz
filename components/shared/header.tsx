"use client"
import { ReactEventHandler, useState } from 'react'
import './header.css'

const Header: React.FC = () => {

    const [searchValue, setSearchValue] = useState('');

    const handleSearchValue = (event) => {
        setSearchValue(event.target.value)
        console.log(searchValue);
    }
    return (
        <header>
            <div className="container-header">
                <p>Header</p>
                <input className='header-input' placeholder="Search..." onChange={() => handleSearchValue(event)} />
                <div className='header-activ'>
                    <button>Login</button>
                    <button>0 UAH | 0 item</button>
                </div>
            </div>
        </header>
    )
}
export default Header