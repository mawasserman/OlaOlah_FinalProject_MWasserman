import React from 'react';
import { EpisodeType } from '../types/EpisodeType';

export const EpisodeCell = ({ title, thumbn, description, keywords } : EpisodeType) => {

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