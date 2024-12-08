import React from 'react';
import LatestEpisode from '../components/LatestEpisode.tsx';

const Home: React.FC = () => {
    return (
        <div className='homePage'>
            <h1>Welcome to Olá Olah Podcast!</h1>
            <div className='latestEpisode'>
                <p>Take a cup of whatever you enjoy drinking, sit in your favorite place and listen to our latest episode: </p>
                <LatestEpisode />
            </div>
        </div>
    );
}

export default Home;
