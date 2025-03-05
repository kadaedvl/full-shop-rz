
import './header.css'
import SearchInput from './searchInput'
import logo from '../../public/logo.png'
import { CartButton } from './cartButton'

const Header: React.FC = () => {
    return (
        <header>
            <div className="container-header">
                <a className='logo' href='/'><img src={logo.src} /></a>
                <div className='header-input'>
                    <SearchInput />
                </div>
                <div className='header-activ'>
                    <button className='loginButton'>Login</button>
                    <CartButton />
                </div>
            </div>
        </header>
    )
}
export default Header