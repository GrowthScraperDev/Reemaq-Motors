"use client";

import Head from "next/head";

const Seo = ({
  title,
  description,
  canonical,
  schema = []
}) => {
  const schemaArray = Array.isArray(schema) ? schema : [schema];

  return (
    <Head>
      {/* Title */}
      {title && <title>{title}</title>}

      {/* Meta Description */}
      {description && (
        <meta name="description" content={description} />
      )}

      {/* Canonical */}
      {canonical && (
        <link rel="canonical" href={canonical} />
      )}

      {/* JSON-LD Schema */}
      {schemaArray.filter(Boolean).map((item, index) => (
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