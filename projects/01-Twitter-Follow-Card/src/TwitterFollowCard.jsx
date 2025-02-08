import { useState } from "react";

export function TwitterFollowCard ({userName, children, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
        ? 'tw-followCard-btn is-following'
        : 'tw-followCard-btn'

    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }
    
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                src={`https://unavatar.io/github/${userName}`} 
                alt="avatar de Eduardo"
                className='tw-followCard-img'/>
                <div className='tw-followCard-info'>
                    <strong> {children} </strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-btnText">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    );
}