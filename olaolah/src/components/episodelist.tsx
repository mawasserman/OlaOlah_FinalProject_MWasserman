// src/components/EpisodeList.tsx

import React from 'react';
import EpisodeCell from './episodecell.tsx';
import { episodes } from '../data/episodeslist';
import { EpisodeType } from '../types/EpisodeType';

const EpisodeList: React.FC = () => {
    return (
        <ul> 
            {episodes.map((episode: EpisodeType) => (
                <EpisodeCell 
                    key={episode.title}
                    title={episode.title} 
                    thumbn={episode.thumbn} 
                    description={episode.description} 
                    keywords={episode.keywords} 
                    releaseDate={episode.releaseDate}
                />
            ))}            
        </ul>
    );
}

export default EpisodeList;
