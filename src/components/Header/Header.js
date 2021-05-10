import './Header.css';
import logo from '../../icons/logo.svg';
import iconSearch from '../../icons/search-icon.svg';

export default function Header() {
    return (
        <div className="header">
            <div className="header-content">
                <img src={logo} alt="logo" className="logo" />
                <div className="input-search-container">
                    <img src={iconSearch} alt="search" className="icon-search" />
                    <input className="input-search" type="text" placeholder="Enter GitHub username" name="username" />
                </div>
            </div>
        </div>
    )
}