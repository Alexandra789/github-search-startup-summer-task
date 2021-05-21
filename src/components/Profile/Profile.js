import './Profile.css';
import group from '../../icons/group.svg';
import person from '../../icons/person.svg';


export default function Profile(props) {
    const prettyFormat = (value) =>{
        return value < 1000 ? value : Math.ceil(value/100)/10+'k'
    }
    return (
    <div className="col-xl-4 col-ms-12 col-lg-5 col-md-6">
        <div className="profile">
            <div className="profile-content">
                <div className="img-wrapper">
                <img className="user-image" src={props.userInfo? props.userInfo.avatar_url : ''} alt="user" />
                </div>
                <p className="name">{props.userInfo ? props.userInfo.name : ''}</p>
                <a className="username" href={props.userInfo? props.userInfo.html_url : ''} >{props.userInfo ? props.userInfo.login : ''}</a>
                <div className="followers-wrapper">
                    <div className="wrap">
                        <img src={group} alt="followers icon" />
                        <p className="followers">{props.userInfo ? prettyFormat(props.userInfo.followers) : ''} followers</p>
                    </div>
                    <div className="wrap">
                        <img src={person} alt="following icon" />
                        <p className="followers">{props.userInfo ? prettyFormat(props.userInfo.following) : ''} following</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}