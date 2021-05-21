import './Repository.css';
import reposIcon from '../../icons/repos-not-found.svg'

export default function Repository(props) {
    // console.log(props.reposInfo)
    // console.log(props.reposInfo[0].length)
    return (
        <div className="col-xl-8 col-ms-12 col-lg-7 col-md-6">
            <div className="repository">
                <div className={props.reposInfo[0].length !== 0 ? "repository-content" : "d-none"}>
                    <p className="title">Repositories ({props.userInfo ? props.userInfo.public_repos : ''})</p>
                    {props.reposInfo[0].map((item, i) =>
                        <div key={i} className="repositories-wrapper">
                            <a href={props.reposInfo[2][i]} className="name">{item}</a>
                            <p className="description">{props.reposInfo[1][i]}</p>
                        </div>
                    )}
                </div>
                <div className={props.reposInfo[0].length === 0 ? "repository-not-found" : "d-none"}>
                    <img src={reposIcon} alt="icon" />
                    <p className="text">Repository list is empty</p>
                </div>
            </div>
        </div>
    )
}