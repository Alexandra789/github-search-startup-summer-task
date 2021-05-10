import './Profile.css';
import userImage from '../Profile/img.png';
import group from '../../icons/group.svg';
import person from '../../icons/person.svg';


export default function Profile() {
    return (
        <div className="profile">
            <div className="profile-content">
                {/* <div className="row"> */}
                {/* <div className="col"> */}
                <img className="user-image" src={userImage} alt="user" />
                <p className="name">Dan Abramov</p>
                <a className="username" href="#" >gaearon</a>
                <div className="followers-wrapper">
                    <div className="wrap">
                        <img src={group} alt="followers icon" />
                        <p className="followers">ajsdhksja</p>
                    </div>
                    <div className="wrap">
                        <img src={person} alt="following icon" />
                        <p className="followers">kjasdska</p>
                    </div>
                </div>
            </div>
        </div>
    /* <div className="col">
                    <p className="title">Repositories</p>
                    <div className="repositories-wrapper">
                        <p className="name">dfsdfsd</p>
                        <p className="description">adsdadsadjakshdkjsahdkjakjsadhasjk</p>
                    </div>
                    <div className="repositories-wrapper">
                        <p className="name">dfsdfsd</p>
                        <p className="description">adsdadsadjakshdkjsahdkjakjsadhasjk</p>
                    </div>
                    <div className="repositories-wrapper">
                        <p className="name">dfsdfsd</p>
                        <p className="description">adsdadsadjakshdkjsahdkjakjsadhasjk</p>
                    </div>
                    <div className="repositories-wrapper">
                        <p className="name">dfsdfsd</p>
                        <p className="description">adsdadsadjakshdkjsahdkjakjsadhasjk</p>
                    </div> 
                </div> */

    )
}