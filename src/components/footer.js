import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-4 text-center fixed bottom-0 left-0 w-full">
            © {new Date().getFullYear()}, Leslie and Jamieson
        </footer>
    )
}

export default Footer;