"use client";

import Head from "next/head";
import { usePathname } from "next/navigation";

const Seo = ({
  title,
  description,
  canonical,
  schema = []
}) => {
  const pathname = usePathname();

  const isContactPage = pathname?.startsWith("/contact");

  // Global schemas
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Remaq Motor Works",
    "url": "https://www.remaq.in/",
    "logo": "https://www.remaq.in/remaq.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "98840 77622",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en","Tamil"]
    },
    "sameAs": [
      "https://www.instagram.com/remaqmotorworks",
      "https://x.com/Remaqmotorworks",
      "https://www.youtube.com/@remaqmotorworks",
      "https://www.facebook.com/RemaqMotors/"
    ]
  };
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Remaq Motor Works",
    "image": "https://www.remaq.in/remaq.svg",
    "@id": "",
    "url": "https://www.remaq.in/",
    "telephone": "+91 9080538756",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No 5A, Plot 2, Kalpaka Gopalan Street,  Ayanambakkam Rd, Natesan Nagar",
      "addressLocality": "Chennai",
      "postalCode": "600095",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.08217273298183,
      "longitude": 80.15391299996296
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://www.facebook.com/RemaqMotors/",
      "https://www.instagram.com/remaqmotorworks",
      "https://x.com/Remaqmotorworks",
      "https://www.youtube.com/@remaqmotorworks"
    ] 
  };

  // Normalize incoming schema
  const incomingSchemas = Array.isArray(schema) ? schema : [schema];

  // Final merge
  const finalSchemas = [
    organizationSchema,
    ...(isContactPage ? [localSchema] : []),
    ...incomingSchemas
  ].filter(Boolean);
  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}

      {finalSchemas.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item)
          }}
        />
      ))}
    </Head>
  );
};

export default Seo;