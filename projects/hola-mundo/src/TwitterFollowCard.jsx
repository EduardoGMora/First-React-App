export function TwitterFollowCard ({userName, children, isFollowing}) {
    console.log(isFollowing)
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
                <button className='tw-followCard-btn'>Seguir</button>
            </aside>
        </article>
    );
}