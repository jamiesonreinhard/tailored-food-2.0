
const SubNavigation = ({ navItems, activePage, setActivePage }) => {
    return (
        <div className="flex gap-[24px] md:gap-[32px] mb-[40px] md:mb-[66px] w-full max-w-[1140px] mx-auto justify-center md:justify-start">
            {navItems.map((item) => (
                <>
                    {/* DESKTOP */}
                    <button
                        key={item.name}
                        onClick={() => setActivePage(item.name)}
                        disabled={activePage === item.name}
                        className={`hidden md:block subtitle-medium p-[10px] border-primary-300 ${activePage === item.name ? "border-b-[5px] text-primary-300" : "text-lightGrey"}`}
                    >
                        {item.display}
                    </button>
                    {/* MOBILE */}
                    <button
                        key={item.name}
                        onClick={() => setActivePage(item.name)}
                        disabled={activePage === item.name}
                        className={`md:hidden text-[16px] p-[10px] border-primary-300 ${activePage === item.name ? "border-b-[5px]" : "text-lightGrey"}`}
                    >
                        {item.display}
                    </button>
                </>

            ))}
        </div>
    )
}

export default SubNavigation;