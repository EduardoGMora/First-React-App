import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
    {
        userName: 'EduardoGMora',
        name: 'Eduardo Mora',
        isFollowing: true
    },
    {
        userName: 'EmmanuelMMartin',
        name: 'Emmanuel Martín Marín',
        isFollowing: false
    },
    {
        userName: 'ClaudioAGarcia',
        name: 'Claudio Garcia',
        isFollowing: true
    },
    {
        userName: 'GuillermoGomezC',
        name: 'Guillermo Gómez',
        isFollowing: false
    }
]

export function App () {
    return(
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) =>(
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    );
}