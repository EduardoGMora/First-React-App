import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';

export function App () {
    return(
        <section className='App'>
            <TwitterFollowCard
                userName='EduardoGMora' 
                isFollowing>
                Eduardo Mora
            </TwitterFollowCard>
            
            <TwitterFollowCard
                userName='EmmanuelMMartin' 
                isFollowing={false}>
                Emmanuel Martín Marín
            </TwitterFollowCard>

            <TwitterFollowCard
                userName='ClaudioAGarcia' 
                isFollowing>
                Claudio Garcia
            </TwitterFollowCard>

            <TwitterFollowCard
                userName='GuillermoGomezC' 
                isFollowing={false}>
                Guillermo Gómez
            </TwitterFollowCard>
        </section>
    );
}