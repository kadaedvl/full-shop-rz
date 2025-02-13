
import './header.css'
import SearchInput from './searchInput'
import logo from '../../public/logo.png'

const Header: React.FC = () => {
    return (
        <header>
            <div className="container-header">
                <a className='logo' href='/'><img src={logo.src} /></a>
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