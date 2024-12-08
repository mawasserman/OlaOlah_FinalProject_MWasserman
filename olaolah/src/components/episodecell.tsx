import React from 'react';
import { EpisodeType } from '../types/EpisodeType';

export const EpisodeCell: React.FC<EpisodeType> = ({ title, thumbn, description, keywords }) => {
    return (
        <li className="episode">
            <img src={thumbn} alt={title} className="episode-thumbnail" />
            <div className="episode-content">
                <h2 className="episode-title">{title}</h2>
                <p className="episode-description">{description}</p>
                <ul className="episode-keywords">
                    {keywords.map((keyword, index) => (
                        <li key={index} className="keyword">{keyword}</li>
                    ))}
                </ul>
            </div>
        </li>

    );
}

export default EpisodeCell;
