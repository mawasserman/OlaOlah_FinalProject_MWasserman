import React from 'react';

export const Navbar = () => {
    return (
        <>
            <nav>
                <ul id='upNav'>
                    <li>
                        <form action="/search" method="get">
                            <input type="text" name="query" placeholder="Search..." />
                            <button type="submit">Search</button>
                        </form>
                    </li>                    
                    <li><a href="https://www.facebook.com">Facebook</a></li>
                    <li><a href="https://www.twitter.com">Twitter</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/signup">Signup</a></li>
                </ul>
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