import React from 'react';

export const Navbar = () => {
    return (
        <>
            <nav>
                <div id='upNav'>
                    <form action="/search" method="get" >
                        <input type="text" name="query" placeholder="Search..." />
                        <button type="submit">Search</button>
                    </form>
                    <ul id='listLinks'>                                    
                        <li><a href="https://www.facebook.com/OlaOlahPodcast/"><img src='/icons/facebook.png' /></a></li>
                        <li><a href="https://www.twitter.com"><img src='/icons/xtwitter.png' /></a></li>
                        <li><a href="/login"><img src='/icons/spotify.png' /></a></li>
                        <li><a href="/signup"><img src='/icons/singup.png' /></a></li>
                    </ul>
                </div>
                <div id='main-img'></div>
                <ul id='downNav'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/episodes">Episodes</a></li>
                    <li><a href="/about">About</a></li>                    
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;