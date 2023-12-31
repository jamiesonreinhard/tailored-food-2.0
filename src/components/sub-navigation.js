import { Fragment } from "react";

const SubNavigation = ({ navItems, activePage, setActivePage }) => {
    return (
        <div className="flex gap-[24px] md:gap-[32px] mb-[40px] md:mb-[66px] w-[90%] max-w-[1920px] mx-auto justify-start">
            {navItems.map((item) => (
                <Fragment key={item.name}>
                    {/* DESKTOP */}
                    <button
                        onClick={() => setActivePage(item.name)}
                        disabled={activePage === item.name}
                        className={`hidden md:block subtitle-medium p-[10px] border-primary-300 ${activePage === item.name ? "border-b-[5px] text-primary-300 hover:text-primary-300" : "text-lightGrey hover:text-yellow"}`}
                    >
                        {item.display}
                    </button>
                    {/* MOBILE */}
                    <button
                        onClick={() => setActivePage(item.name)}
                        disabled={activePage === item.name}
                        className={`md:hidden text-[16px] p-[10px] border-primary-300 ${activePage === item.name ? "border-b-[5px]" : "text-lightGrey"}`}
                    >
                        {item.display}
                    </button>
                </Fragment>

            ))}
        </div>
    )
}

export default SubNavigation;