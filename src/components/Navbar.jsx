import React from 'react';
//import logo from './logo.png'; // Replace with your logo image path

const Navbar = () => {
    return (
        <nav className="">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <img src={"https://avatars.githubusercontent.com/u/45869481?v=4"} alt="Logo" className="h-8 w-8 mr-2 rounded-full" />
                    <span className="text-gray-800 text-lg font-semibold">Krishna</span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
