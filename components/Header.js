"use client";

import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";

export default function Header({
    activePath = "",
    menu,
    address,
    contactEmail,
    contactPhone1,
    contactPhone2,
    enableDrawer = true,
}) {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [mobileOpenKey, setMobileOpenKey] = useState(null);

    return (
        <>
            {/* ================= HEADER ================= */}
            <header className="fixed top-0 left-0 w-full pl-[20px] md:pl-[40px] z-50 bg-white border-b h-[77px] md:h-[88px] ">
                <div className="relative  mx-auto flex items-center justify-between h-full">
                    {/* LOGO */}
                    <Image
                        src="/reemaq-logo.svg"
                        alt="Remaq"
                        width={140}
                        height={40}
                    />

                    {/* DESKTOP MENU */}
                    <nav className="hidden lg:flex gap-10 relative">
                        {Object.keys(menu).map((key) => {
                            const item = menu[key];
                            const isActive = activePath === item.href;

                            return (
                                <div
                                    key={key}
                                    className="relative"
                                    onMouseEnter={() =>
                                        item.hasDropdown && setOpenDropdown(key)
                                    }
                                    onMouseLeave={() => setOpenDropdown(null)}
                                >
                                    <a
                                        href={item.href || "#"}
                                        className={clsx(
                                            "uppercase text-sm tracking-wide relative pb-6",
                                            isActive ? "text-[#CE0323]" : "text-gray-600"
                                        )}
                                    >
                                        {item.label}
                                        {isActive && (
                                            <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-[#CE0323]" />
                                        )}
                                    </a>

                                    {item.hasDropdown && openDropdown === key && (
                                        key === "resources" ? (
                                            <ResourcesMenu data={item.dropdown} />
                                        ) : (
                                            <ServicesMenu data={item.dropdown} />
                                        )
                                    )}
                                </div>
                            );
                        })}
                    </nav>

                    {/* RIGHT RED DOTS */}
                    {enableDrawer && (
                        <button
                            className="bg-brand-red flex justify-center h-[77px] w-[77px] md:h-[88px] md:w-[88px]"
                            onClick={() => setDrawerOpen(true)}
                        >
                            <Image src="/hamburger-icon.svg" alt="hamburger-icon" width={24} height={24} />
                        </button>
                    )}
                </div>
            </header>

            {/* ================= DRAWER (MOBILE) ================= */}
            {drawerOpen && (
                <Drawer
                    menu={menu}
                    address={address}
                    contactEmail={contactEmail}
                    contactPhone1={contactPhone1}
                    contactPhone2={contactPhone2}
                    mobileOpenKey={mobileOpenKey}
                    setMobileOpenKey={setMobileOpenKey}
                    onClose={() => setDrawerOpen(false)}
                />
            )}
        </>
    );
}

/* ================= SERVICES DROPDOWN ================= */
function ServicesMenu({ data }) {
    return (
        <div className="absolute left-0 right-0 top-full bg-white border-t shadow-lg">
            <div className="grid grid-cols-[1fr_1fr_420px] gap-10 px-12 py-12">
                <div>
                    <h2 className="text-3xl font-bold mb-6">
                        ENGINEERED COATING SOLUTIONS FOR CRITICAL COMPONENTS
                    </h2>
                    <a className="border-b border-[#CE0323] pb-1 inline-flex">
                        Explore all Services →
                    </a>
                </div>

                <div className="space-y-6 text-gray-700">
                    {data.item1 && <p>{data.item1}</p>}
                    {data.item2 && <p>{data.item2}</p>}
                    {data.item3 && <p>{data.item3}</p>}
                    {data.item4 && <p>{data.item4}</p>}
                </div>

                <div className="relative h-64">
                    <Image
                        src={data.imageSrc}
                        alt={data.imageCta}
                        fill
                        className="object-cover"
                    />
                    <a
                        href={data.imageLink}
                        className="absolute bottom-4 left-4 right-4 flex justify-between items-center px-6 py-4 bg-black text-white hover:bg-[#CE0323] transition-colors"
                    >
                        <span>{data.imageCta}</span>
                        <span>→</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

/* ================= RESOURCES DROPDOWN ================= */
function ResourcesMenu({ data }) {
    return (
        <div className="absolute left-0 right-0 top-full bg-white border-t shadow-lg">
            <div className="grid grid-cols-[1fr_1fr_200px_420px] gap-10 px-12 py-12">
                <div>
                    <a className="border-b border-[#CE0323] pb-1 inline-block mb-6">
                        Explore all Industries →
                    </a>
                    <div className="space-y-4 text-gray-700">
                        <p>{data.col1Item1}</p>
                        <p>{data.col1Item2}</p>
                        <p>{data.col1Item3}</p>
                    </div>
                </div>

                <div>
                    <a className="border-b border-[#CE0323] pb-1 inline-block mb-6">
                        Explore all Application →
                    </a>
                    <div className="space-y-4 text-gray-700">
                        <p>Bolts & Nuts</p>
                        <p>Studs</p>
                        <p>Springs</p>
                        <p>U-Bolts</p>
                        <p>Brake Components</p>
                    </div>
                </div>

                <div className="space-y-4 text-gray-700">
                    <p>Case Studies</p>
                    <p>Blogs</p>
                    <p>FAQs</p>
                </div>

                <div className="relative h-64">
                    <Image
                        src={data.imageSrc}
                        alt={data.imageCta}
                        fill
                        className="object-cover"
                    />
                    <a
                        href={data.imageLink}
                        className="absolute bottom-4 left-4 right-4 flex justify-between items-center px-6 py-4 bg-black text-white hover:bg-[#CE0323] transition-colors"
                    >
                        <span>{data.imageCta}</span>
                        <span>→</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

/* ================= DRAWER (MOBILE) ================= */
function Drawer({
    menu,
    address,
    contactEmail,
    contactPhone1,
    contactPhone2,
    mobileOpenKey,
    setMobileOpenKey,
    onClose,
}) {
    return (
        <div className="fixed inset-0 z-50 flex">
            <div className="flex-1 bg-black/50" onClick={onClose} />

            <div className="w-[360px] bg-white  overflow-y-auto relative">
                <button className="absolute top-6 right-6" onClick={onClose}>
                    ✕
                </button>

                <div className="lg:hidden p-8">
                    <ul className="space-y-4 font-medium">
                        {Object.keys(menu).map((key) => {
                            const item = menu[key];
                            const isOpen = mobileOpenKey === key;

                            return (
                                <li key={key} className="border-b pb-2">
                                    <button
                                        className="w-full flex justify-between items-center"
                                        onClick={() =>
                                            item.hasDropdown
                                                ? setMobileOpenKey(isOpen ? null : key)
                                                : null
                                        }
                                    >
                                        {item.label}
                                        {item.hasDropdown && (
                                            <span>{isOpen ? "−" : "+"}</span>
                                        )}
                                    </button>

                                    {item.hasDropdown && isOpen && (
                                        <div className="ml-4 mt-3 space-y-2 text-sm text-gray-600">
                                            {item.dropdown?.item1 && <p>{item.dropdown.item1}</p>}
                                            {item.dropdown?.item2 && <p>{item.dropdown.item2}</p>}
                                            {item.dropdown?.item3 && <p>{item.dropdown.item3}</p>}
                                            {item.dropdown?.item4 && <p>{item.dropdown.item4}</p>}
                                            {item.dropdown?.col1Item1 && <p>{item.dropdown.col1Item1}</p>}
                                            {item.dropdown?.col1Item2 && <p>{item.dropdown.col1Item2}</p>}
                                            {item.dropdown?.col1Item3 && <p>{item.dropdown.col1Item3}</p>}
                                        </div>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="mt-12 flex flex-col gap-[25px] md:gap-[56px] p-8">
                    <div className="gap-[12px] md:gap-[24px] flex flex-col">
                        <p className="text-sm mb-2 text-text-primary font-inter"><span className="text-brand-red">/</span> Address</p>
                        <p className="whitespace-pre-line text-lg md:text-2xl text-text-primary font-sora ">{address}</p>
                    </div>
                    <div className="gap-[12px] md:gap-[24px] flex flex-col">
                        <p className="text-sm text-text-primary mt-6 mb-2"><span className="text-brand-red">/</span> Contact Information
                        </p>
                        <div className="gap-[12px] md:gap-[24px] flex flex-col">
                            {contactEmail && <p className="border-b border-brand-red pb-1 w-max">{contactEmail}</p>}
                            {contactPhone1 && <p className="border-b border-brand-red pb-1 w-max">{contactPhone1}</p>}
                            {contactPhone2 && <p className="border-b border-brand-red pb-1 w-max">{contactPhone2}</p>}
                        </div>
                    </div>
                </div>
                <button
                    className="sticky bottom-[0px] left-[0px] group flex items-center justify-between w-[284px] h-[56px] px-[32px] bg-brand-black text-white font-inter text-sm uppercase tracking-wide  transition-colors duration-300  hover:bg-brand-red ">
                    <span>GET IN TOUCH</span>
                       <Image src="/arrow.svg" className="transition-transform duration-300 group-hover:translate-x-1" width={24} height={24}/>
                </button>

            </div>
        </div>
    );
}
