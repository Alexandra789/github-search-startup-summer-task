import './SearchNotFound.css';
import user from '../../icons/user-not-found.svg';


export default function SearchNotFound() {
    return (
        <div className="search-not-found">
            <div className="search-not-found-content">
            <img src={user} alt="user not found icon"/>
            <p className="text">User not found</p>
            </div>
        </div>
    )
}