"use client";
import Head from "next/head";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useEffect } from "react";

function renderLinkedList({
    data,
    prefix,
    count = 4,
    title,
    titleLink,
}) {
    return (
        <div className="space-y-4 flex flex-col gap-[18px] lg:gap-[24px]">
            {/* {title && (
                <Link
                    href={titleLink || "#"}
                    className="border-b border-brand-red pb-1 inline-flex w-max"
                >
                    {title} <Image alt="black-arrow" src="/arrow-black.svg" width={22} height={22} />
                </Link>
            )} */}
            <div className="flex flex-col gap-[14px] lg:gap-[18px] !mt-0">
                {Array.from({ length: count }, (_, i) => {
                    const index = i + 1;
                    const label = data[`${prefix}${index}`];
                    const link = data[`${prefix}${index}Link`];

                    if (!label || !link) return null;

                    return (
                        <Link key={index} href={link} className="!mt-0">
                            {label}
                        </Link>
                    );
                })}
                 <Link href={titleLink} className="border-b border-brand-red w-max pb-1 inline-flex">
                        {"Explore All"}  <Image alt="black-arrow" src="/arrow-black.svg" width={22} height={22} />
                    </Link>
            </div>
        </div>
    );
}
function ImageCtaBlock({
    imageLink,
    imageSrc,
    imageAlt,
    ctaText,
}) {
    if (!imageLink || !imageSrc || !ctaText) return null;

    return (
        <div className="relative h-64 w-full">
            <Link href={imageLink} className="block h-full w-full">
                {/* IMAGE */}
                <Image
                    src={imageSrc}
                    alt={imageAlt || ctaText}
                    fill
                    className="object-cover"
                />

                {/* CTA BUTTON */}
                <div
                    className="
              absolute bottom-0 right-0
              group flex items-center justify-between
              w-[284px] h-[56px] px-[32px]
              bg-brand-black text-white
              font-inter text-sm uppercase tracking-wide
              transition-colors duration-300
              hover:bg-brand-red
            "
                >
                    <span>{ctaText}</span>
                    <Image
                        src="/arrow.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                </div>
            </Link>
        </div>
    );
}
function renderServiceGroup(dropdown, prefix) {
    return (
        <>
            {dropdown[`${prefix}Link1`] && (
                <Link href={dropdown[`${prefix}Link1`]}>
                    {dropdown[`${prefix}Link1Txt`]}
                </Link>
            )}

            {/* <div className="border-l border-brand-smoke flex flex-col gap-[24px] py-[8px] pl-[24px]">
                {dropdown[`${prefix}Link2`] && (
                    <Link href={dropdown[`${prefix}Link2`]}>
                        {dropdown[`${prefix}Link2Txt`]}
                    </Link>
                )}
                {dropdown[`${prefix}Link3`] && (
                    <Link href={dropdown[`${prefix}Link3`]}>
                        {dropdown[`${prefix}Link3Txt`]}
                    </Link>
                )}
            </div> */}

            {dropdown[`${prefix}Link4`] && (
                <Link href={dropdown[`${prefix}Link4`]}>
                    {dropdown[`${prefix}Link4Txt`]}
                </Link>
            )}
            {dropdown[`${prefix}Link5`] && (
                <Link href={dropdown[`${prefix}Link5`]}>
                    {dropdown[`${prefix}Link5Txt`]}
                </Link>
            )}
        </>
    );
}

function renderStaticLinks(data, keys) {
    return keys.map((key) => {
        const text = data[`${key}Txt`];
        const link = data[`${key}Link`];

        if (!text || !link) return null;

        return (
            <Link key={key} href={link} className="!mt-0">
                {text}
            </Link>
        );
    });
}

export default function Header({
    activePath = "",
    menu,
    address,
    contactEmail, contactEmail2 = "info@remaq.in",
    contactPhone1,
    contactPhone2, contactPhone3 = "+91 90805 38756",
    enableDrawer = true,
}) {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [mobileOpenKey, setMobileOpenKey] = useState(null);
    useEffect(() => {
        if (drawerOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [drawerOpen]);
    const pathname = usePathname();

    const isHomePage = pathname === "/";
    const isAboutPage = pathname?.startsWith("/about");
    const isContactPage = pathname?.startsWith("/contact");

    // Final condition
    const showOrganizationSchema =
        isHomePage || isAboutPage || isContactPage;
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Corporation",
        name: "Remaq Motor Works",
        url: "https://www.remaq.in/",
        logo: "https://www.remaq.in/remaq.svg",
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "98840 77622",
            contactType: "customer service",
            areaServed: "IN",
            availableLanguage: ["en", "Tamil"]
        },
        sameAs: [
            "https://www.instagram.com/remaqmotorworks",
            "https://x.com/Remaqmotorworks",
            "https://www.youtube.com/@remaqmotorworks",
            "https://www.facebook.com/RemaqMotors/"
        ]
    };

    const localSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Remaq Motor Works",
        image: "https://www.remaq.in/remaq.svg",
        url: "https://www.remaq.in/",
        telephone: "+91 9080538756",
        address: {
            "@type": "PostalAddress",
            streetAddress:
                "No 5A, Plot 2, Kalpaka Gopalan Street, Ayanambakkam Rd, Natesan Nagar",
            addressLocality: "Chennai",
            postalCode: "600095",
            addressCountry: "IN"
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 13.08217273298183,
            longitude: 80.15391299996296
        },
        openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "20:00"
        },
        sameAs: [
            "https://www.facebook.com/RemaqMotors/",
            "https://www.instagram.com/remaqmotorworks",
            "https://x.com/Remaqmotorworks",
            "https://www.youtube.com/@remaqmotorworks"
        ]
    };

    const schemas = [
        ...(showOrganizationSchema ? [organizationSchema] : []),
        ...(isContactPage ? [localSchema] : [])
    ];
    function SimpleDropdown({
        data,
        prefix,
        count,
        title,
        titleLink,
    }) {
        return (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 bg-white border shadow-lg min-w-[320px] z-50">
                <div className="p-6 flex flex-col gap-4">
                    {/* {title && (
                        <Link
                            href={titleLink}
                            className="font-semibold border-b border-brand-red pb-1"
                        >
                            {title}
                        </Link>
                    )} */}

                    {Array.from({ length: count }, (_, i) => {
                        const index = i + 1;
                        const label = data[`${prefix}${index}`];
                        const link = data[`${prefix}${index}Link`];

                        if (!label || !link) return null;

                        return (
                            <Link
                                key={index}
                                href={link}
                                className="hover:text-brand-red transition-colors"
                            >
                                {label}
                            </Link>
                        );
                    })}
                      <Link href={titleLink} className="border-b border-brand-red w-max pb-1 inline-flex">
                        {"Explore All"}  <Image alt="black-arrow" src="/arrow-black.svg" width={22} height={22} />
                    </Link>
                </div>
            </div>
        );
    }
    function ResourcesDropdown({ data }) {
        return (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 bg-white border shadow-lg min-w-[280px] z-50">
                <div className="p-6 flex flex-col gap-4">
                    <Link href={data.blogLink}>
                        {data.blogTxt}
                    </Link>

                    <Link href={data.casestudiesLink}>
                        {data.casestudiesTxt}
                    </Link>

                    <Link href={data.faqLink}>
                        {data.faqTxt}
                    </Link>
                </div>
            </div>
        );
    }
    return (
        <>
            <Head>
                {schemas.map((item, index) => (
                    <script
                        key={index}
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify(item)
                        }}
                    />
                ))}
            </Head>
            {/* ================= HEADER ================= */}
            <header className="sticky top-0 left-0 w-full z-50 bg-white border-b h-[77px] md:h-[88px] ">
                <div className="relative  mx-auto flex items-center justify-between h-full">
                    {/* LOGO */}
                    <div>
                        <Link href="/">
                            <Image
                                src="/remaq.svg"
                                alt="Remaq Logo" className="pl-[20px] md:pl-[40px]"
                                width={190}
                                height={50}
                            />
                        </Link>

                    </div>

                    {/* DESKTOP MENU */}
                    <nav className="hidden lg:flex gap-10 h-full items-center justify-center">
                        {Object.keys(menu).map((key) => {
                            const item = menu[key];
                            const isActive = activePath === key;

                            return (
                                <div
                                    key={key}
                                    className={clsx(
                                        "h-full flex items-center justify-center",
                                        key !== "services" && "relative"
                                    )}
                                    onMouseEnter={() =>
                                        item.hasDropdown && setOpenDropdown(key)
                                    }
                                    onMouseLeave={() => setOpenDropdown(null)}
                                >
                                    <Link
                                        href={
                                            item.hasDropdown &&
                                                item.href === "#"
                                                ? "#"
                                                : item.href
                                        }
                                        className={clsx(
                                            "uppercase text-sm tracking-wide relative h-full flex items-center justify-center",
                                            isActive ? "text-brand-red border-t-4 border-brand-red" : "text-gray-600"
                                        )}
                                    >
                                        {item.label}
                                    </Link>

                                    {item.hasDropdown && openDropdown === key && (
                                        <>
                                            {key === "services" && (
                                                <ServicesMenu data={item.dropdown} />
                                            )}

                                            {key === "industries" && (
                                                <SimpleDropdown
                                                    data={item.dropdown}
                                                    prefix="industries"
                                                    count={4}
                                                    title={item.dropdown.industries}
                                                    titleLink={item.dropdown.industriesLink}
                                                />
                                            )}

                                            {key === "applications" && (
                                                <SimpleDropdown
                                                    data={item.dropdown}
                                                    prefix="application"
                                                    count={6}
                                                    title={item.dropdown.application}
                                                    titleLink={item.dropdown.applicationLink}
                                                />
                                            )}

                                            {key === "resources" && (
                                                <ResourcesDropdown data={item.dropdown} />
                                            )}
                                        </>
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
                    contactEmail2={contactEmail2}
                    contactPhone1={contactPhone1}
                    contactPhone2={contactPhone2}
                    contactPhone3={contactPhone3}
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
            <div className="flex w-full gap-10 px-12 py-12">
                <div className="w-[33%] border-r border-brand-smoke">
                    <h2 className="text-2xl font-[500] text-brand-black mb-[30px]">
                        {data.service1Txt}
                    </h2>
                    <Link href={data.service1Link} className="border-b border-brand-red pb-1 inline-flex">
                        {data.service1LinkTxt}  <Image alt="black-arrow" src="/arrow-black.svg" width={22} height={22} />
                    </Link>
                </div>

                <div className="space-y-6 text-gray-700 w-[33%]">
                    <div className="flex flex-col gap-[14px] lg:gap-[18px]">
                        {renderServiceGroup(data, "service2")}
                    </div>
                </div>

                {data.imageLink && <div className="relative h-64 w-[33%]">
                    <Link href={data.imageLink}>
                        <Image
                            src={data.imageSrc}
                            alt={data.imageCta}
                            fill
                            className="object-cover"
                        />
                        <button
                            className="sticky md:absolute bottom-[0px] right-[0px] group flex items-center justify-between w-[284px] h-[56px] px-[32px] bg-brand-black text-white font-inter text-sm uppercase tracking-wide  transition-colors duration-300  hover:bg-brand-red ">
                            <span>{data.imageCta}</span>
                            <Image src="/arrow.svg" className="transition-transform duration-300 group-hover:translate-x-1" width={24} height={24} />
                        </button>
                    </Link>
                </div>}
            </div>
        </div>
    );
}

/* ================= DRAWER (MOBILE) ================= */
function Drawer({
    menu,
    address,
    contactEmail, contactEmail2,
    contactPhone1,
    contactPhone2, contactPhone3,
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
                <div className="p-8" >
                    <Image src="/remaq.svg" alt="mobile-icon" width={80} height={80} />
                </div>
                <div className="lg:hidden p-8">
                    <ul className="space-y-4 font-medium flex flex-col gap-3">
                        {Object.keys(menu).map((key) => {
                            const item = menu[key];
                            const isOpen = mobileOpenKey === key;

                            return (
                                <li key={key} className="p-0 !m-0">
                                    {item.hasDropdown ?
                                        <button
                                            className="w-full flex justify-between items-center"
                                            onClick={() =>
                                                item.hasDropdown
                                                    ? setMobileOpenKey(isOpen ? null : key)
                                                    : null
                                            }
                                        >
                                            {item.label}
                                            <ChevronDown
                                                size={20}
                                                strokeWidth={1.5}
                                                className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                                                    }`}
                                            />
                                        </button>
                                        :
                                        <Link href={item.href}
                                            className="w-full flex justify-between items-center"
                                        >
                                            {item.label}
                                        </Link>
                                    }

                                    {item.hasDropdown && isOpen && (
                                        <div className="my-5 space-y-2 text-sm text-gray-600 flex flex-col gap-6">
                                            {/* ===== ONLY FOR RESOURCES ===== */}
                                            {key === "services" && (
                                                <>
                                                    <div className="flex flex-col gap-[20px]">
                                                        <Link
                                                            href={item.dropdown.service1Link}
                                                            className="border-b border-brand-red pb-1 inline-flex w-max"
                                                        >
                                                            {item.dropdown.service1LinkTxt}
                                                        </Link>

                                                        <div className="flex flex-col gap-[14px]">
                                                            {renderServiceGroup(item.dropdown, "service2")}
                                                        </div>
                                                    </div>

                                                    <ImageCtaBlock
                                                        imageLink={item.dropdown.imageLink}
                                                        imageSrc={item.dropdown.imageSrc}
                                                        imageAlt={item.dropdown.imageCta}
                                                        ctaText={item.dropdown.imageCta}
                                                    />
                                                </>
                                            )}
                                            {key === "industries" && (
                                                <>
                                                    {renderLinkedList({
                                                        data: item.dropdown,
                                                        prefix: "industries",
                                                        count: 4,
                                                        title: item.dropdown.industries,
                                                        titleLink: item.dropdown.industriesLink,
                                                    })}
                                                </>
                                            )}
                                            {key === "applications" && (
                                                <>
                                                    {renderLinkedList({
                                                        data: item.dropdown,
                                                        prefix: "application",
                                                        count: 6,
                                                        title: item.dropdown.application,
                                                        titleLink: item.dropdown.applicationLink,
                                                    })}
                                                </>
                                            )}{key === "resources" && (
                                                <>
                                                    <div className="flex flex-col gap-[14px]">
                                                        {renderStaticLinks(item.dropdown, [
                                                            "blog",
                                                            "casestudies",
                                                            "faq",
                                                        ])}
                                                    </div>

                                                    <ImageCtaBlock
                                                        imageLink={item.dropdown.imageLink}
                                                        imageSrc={item.dropdown.imageSrc}
                                                        imageAlt={item.dropdown.imageCta}
                                                        ctaText={item.dropdown.imageCta}
                                                    />
                                                </>
                                            )}
                                        </div>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="flex flex-col gap-[25px] md:gap-[56px] p-8 pb-[100px]">
                    <div className="gap-[12px] lg:gap-[24px] flex flex-col">
                        <p className="text-sm mb-2 text-text-primary font-inter"><span className="text-brand-red">/</span> Address</p>
                        <p className="whitespace-pre-line text-lg md:text-2xl text-text-primary font-sora ">{address}</p>
                    </div>
                    <div className="gap-[12px] lg:gap-[24px] flex flex-col">
                        <p className="text-sm text-text-primary mt-6 mb-2"><span className="text-brand-red">/</span> Contact Information
                        </p>
                        <div className="gap-[12px] lg:gap-[12px] flex flex-col">
                            {contactEmail && <p className="border-b border-brand-red pb-1 w-max">{contactEmail}</p>}
                            {contactEmail2 && <p className="border-b border-brand-red pb-1 w-max">{contactEmail2}</p>}
                            {contactPhone1 && <p className="border-b border-brand-red pb-1 w-max">{contactPhone1}</p>}
                            {contactPhone2 && <p className="border-b border-brand-red pb-1 w-max">{contactPhone2}</p>}
                            {contactPhone3 && <p className="border-b border-brand-red pb-1 w-max">{contactPhone3}</p>}
                        </div>
                    </div>
                </div>
                {menu.contact.getInTouchLink && <Link href={menu.contact.getInTouchLink}
                    className="sticky bottom-[0px] left-[0px] group flex items-center justify-between w-[284px] h-[56px] px-[32px] bg-brand-black text-white font-inter text-sm uppercase tracking-wide  transition-colors duration-300  hover:bg-brand-red ">
                    <span>{menu.contact.getInTouch}</span>
                    <Image alt="arrow-img" src="/arrow.svg" className="transition-transform duration-300 group-hover:translate-x-1" width={24} height={24} />
                </Link>}

            </div>
        </div>
    );
}
