import React from 'react';

type Props = {
    title: string;
    thumbn: string;
    description: string;
    keywords: string[];
}

export const Episode = ({ title, thumbn, description, keywords } : Props) => {

    return (
        <>
            <h1>{title}</h1>
            <img src={thumbn} alt={title} />
            <p>{description}</p>
            <ul>
                {keywords.map((keyword, index) => (
                    <li key={index}>{keyword}</li>
                ))}
            </ul>
        </>
    );
}