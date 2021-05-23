import './Header.css';
import logo from '../../icons/logo.svg';
import errorIcon from '../../icons/error.svg';
import iconSearch from '../../icons/search-icon.svg';

export default function Header(props) {
    const url = 'https://api.github.com/search/users?q=';
    const KEY_CODE_ENTER = 13;
    const ERROR_STATUS_CODE = 403;
    const error_message = 'Too frequen request! Please try later!';

    const getUserInfo = (data) => {
        if (data.total_count !== 0 && data.items) {
            let user = data.items[0].url;
            fetch(user).then((response) => {
                return response.json();
            }).then((userInfo) => {
                props.setSearchResult(true);
                getReposInfo(userInfo);
            })
        }
        else {
            props.setUserInfo(null);
            props.setSearchResult(false);
            props.setSearchNotFound(true);
            props.setLoader(false);
        }
    }

    const getReposInfo = (userInfo) => {
        if (userInfo.public_repos !== 0) {
            let repos = [[], [], []];
            for (let i = 1; i <= Math.ceil(userInfo.public_repos / 30); i++) {
                fetch(userInfo.repos_url + '?page=' + i).then((response) => {
                    return response.json();
                }).then((reposInfo) => {
                    for (let i = 0; i < reposInfo.length; i++) {
                        repos[0].push(reposInfo[i].name);
                        repos[1].push(reposInfo[i].description);
                        repos[2].push(reposInfo[i].html_url)
                    }
                    props.setReposInfo(repos);
                    props.setUserInfo(userInfo);
                    props.setLoader(false);
                })
            }
        }
        else {
            props.setUserInfo(userInfo);
            props.setReposInfo([[], [], []]);
            props.setLoader(false);
        }
    }

    const findUser = (e) => {
        let searchInput = e.target;
        searchInput.addEventListener('keydown', async (e) => {
            if (e.keyCode === KEY_CODE_ENTER && searchInput.value !== '') {
                props.setUserInfo(null);
                fetch(url + searchInput.value).then((response) => {
                    if (response.status === ERROR_STATUS_CODE) {
                        props.setResponseStatus(true);
                        props.setLoader(false);
                        props.setSearchResult(false);
                        props.setSearchNotFound(false);
                    }
                    else {
                        props.setLoader(true);
                        props.setResponseStatus(false);
                    }
                    return response.json();
                }).then((data) => {
                    getUserInfo(data);
                })
            }
            else if (e.keyCode === KEY_CODE_ENTER && searchInput.value === '') {
                props.setResponseStatus(false);
                props.setSearchResult(false);
                props.setUserInfo(null);
                props.setSearchNotFound(false);
                props.setLoader(false);
            }
        })
    };
    return (
        <div className="header">
            <div className="header-content">
                <img src={logo} alt="logo" className="logo" />
                <div className="input-search-container">
                    <img src={iconSearch} alt="search" className="icon-search" />
                    <input value={props.searchUsername} onFocus={findUser} className="input-search" type="text" placeholder="Enter GitHub username" name="username" />
                </div>
            </div>
            <div className={props.responseStatus ? "error-section" : "d-none"}>
                <img className="error-icon" src={errorIcon} alt="icon" />
                <p className="error-message">{error_message}</p>
            </div>
        </div>
    )
}