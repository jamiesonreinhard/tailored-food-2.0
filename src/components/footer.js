import React from "react";

const Footer = () => {
    return (
        <footer className="bg-white py-4 text-center fixed bottom-0 left-0 w-full z-[100]">
            © {new Date().getFullYear()}, Leslie and Jamieson
        </footer>
    )
}

export default Footer;