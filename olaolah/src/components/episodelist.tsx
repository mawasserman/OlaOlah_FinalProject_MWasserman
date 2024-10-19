import { ReactNode } from 'react';
import { EpisodeCell } from './episodecell';
import { episodes } from '../data/episodeslist';

const EpisodeList = () => {

    return (
        <ul> 
            {episodes.map(episode =>
                <li>{episodes.title}</li>
            )}            
        </ul>
    );
}

export default EpisodeList;

