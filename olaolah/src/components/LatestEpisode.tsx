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
            <div className='episode'>
                <img src={latestEpisode.thumbn} alt={latestEpisode.title} className="episode-thumbnail" />
                <div className="content">
                    <h3 className='episode-title'>{latestEpisode.title}</h3>
                    <p className='episode-description'>{latestEpisode.description}</p>
                    <ul className='episode-keywords'>
                        {latestEpisode.keywords.map((keyword, index) => (
                            <li key={index} className='keyword'>{keyword}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default LatestEpisode;
