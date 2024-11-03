import React from 'react';
import LatestEpisode from '../components/LatestEpisode.tsx';

const Home: React.FC = () => {
    return (
        <>
            <h1>Welcome to Olá Olah Podcast!</h1>
            <p>Take a cup of coffe, sit in your favorite sopha and listen to our latest episode: </p>
            <LatestEpisode />
        </>
    );
}

export default Home;
