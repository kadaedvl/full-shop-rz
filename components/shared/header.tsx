
import './header.css'
import SearchInput from './searchInput'

const Header: React.FC = () => {
    return (
        <header>
            <div className="container-header">
                <p>Header</p>
                <div className='header-input'>
                    <SearchInput />
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