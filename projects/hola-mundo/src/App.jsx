import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';

export function App () {
    return(
        <section className='App'>
            <TwitterFollowCard
                userName='EduardoGMora' >
                Eduardo Mora
            </TwitterFollowCard>
            
            <TwitterFollowCard
                userName='EmmanuelMMartin' >
                Emmanuel Martín Marín
            </TwitterFollowCard>

            <TwitterFollowCard
                userName='ClaudioAGarcia' >
                Claudio Garcia
            </TwitterFollowCard>

            <TwitterFollowCard
                userName='GuillermoGomezC' >
                Guillermo Gómez
            </TwitterFollowCard>
        </section>
    );
}