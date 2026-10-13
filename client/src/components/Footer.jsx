import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-slate-800 mt-12 py-8 text-center bg-background/50">
            <p className="text-slate-500 text-sm">
                &copy; {new Date().getFullYear()} Expense Tracker Pro. Built simple and fast.
            </p>
        </footer>
    );
};

export default Footer;
