import React from 'react';
import EpisodeList from '../components/episodelist.tsx'; 

const Episodes: React.FC = () => {
    return (
        <div className='episodesPage'>
            <h1>Episodes</h1>
            <p>Here you will find a list of all our podcast episodes.</p>
            <EpisodeList /> 
        </div>
    );
}

export default Episodes;
