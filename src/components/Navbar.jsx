import React from 'react';

const Navbar = () => {
    return (
        <nav className="mb-2">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <img src="/small-logo.png" alt="Logo" className="h-8 w-8 mr-2 rounded-full" />
                    <span className="text-gray-800 text-lg font-semibold">Suvaye Dictionary </span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
