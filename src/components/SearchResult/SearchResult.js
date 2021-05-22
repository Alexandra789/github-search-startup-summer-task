import './SearchResult.css';
import user from '../../icons/user-not-found.svg';
import search from '../../icons/search.svg';


export default function SearchResult(props) {
    let notFoundText = 'User not found';
    let initSearchText = 'Start with searching a GitHub user';
    let searchInitSection = document.querySelector('.search-result');
    
    if (searchInitSection && props.loader) {
        searchInitSection.style.display = 'none';
    }
    else if (searchInitSection && !props.searchResult) {
        searchInitSection.style.display = 'block';
    }

    return (
        <div className="search-result">
            <div className="search-result-content">
                <img className="search-icon" src={props.searchNotFound ? user : search} alt="icon" />
                <p className="text">{props.searchNotFound ? notFoundText : initSearchText}</p>
            </div>
        </div>
    )
}