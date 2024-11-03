import React from 'react';
import { EpisodeCell } from './episodecell';
import { episodes } from '../data/episodeslist';
import { EpisodeType } from '../types/EpisodeType';

const EpisodeList: React.FC = () => {
    return (
        <ul> 
            {episodes.map((episode: EpisodeType, index) => (
                <EpisodeCell 
                    key={index} 
                    title={episode.title} 
                    thumbn={episode.thumbn} 
                    description={episode.description} 
                    keywords={episode.keywords} 
                />
            ))}            
        </ul>
    );
}

export default EpisodeList;


