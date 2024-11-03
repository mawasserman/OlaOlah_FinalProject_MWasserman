import React from 'react';
import { EpisodeType } from '../types/EpisodeType';

export const EpisodeCell: React.FC<EpisodeType> = ({ title, thumbn, description, keywords }) => {
    return (
        <li>
            <h2>{title}</h2>
            <img src={thumbn} alt={title} />
            <p>{description}</p>
            <ul>
                {keywords.map((keyword, index) => (
                    <li key={index}>{keyword}</li>
                ))}
            </ul>
        </li>
    );
}

export default EpisodeCell;
