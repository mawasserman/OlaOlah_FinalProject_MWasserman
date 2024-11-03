import React from 'react';
import { episodes } from '../data/episodeslist';
import { EpisodeType } from '../types/EpisodeType';

const LatestEpisode: React.FC = () => {
    const latestEpisode: EpisodeType | undefined = episodes.reduce<EpisodeType | undefined>((latest, episode) => {
        if (!latest) return episode; 
        return new Date(latest.releaseDate) > new Date(episode.releaseDate) ? latest : episode;
    }, undefined);

    if (!latestEpisode) {
        return <div>No episodes available</div>; 
    }

    return (
        <div>
            <h2>Latest Episode</h2>
            <h3>{latestEpisode.title}</h3>
            <img src={latestEpisode.thumbn} alt={latestEpisode.title} />
            <p>{latestEpisode.description}</p>
            <ul>
                {latestEpisode.keywords.map((keyword, index) => (
                    <li key={index}>{keyword}</li>
                ))}
            </ul>
        </div>
    );
}

export default LatestEpisode;
