import Markdown from 'markdown-to-jsx';
import Link from 'next/link';

const addTrailingSlash = (url = "") => {
  if (!url) return url;

  // Ignore anchors, mail, tel
  if (
    url.startsWith("#") ||
    url.startsWith("mailto:") ||
    url.startsWith("tel:")
  ) {
    return url;
  }

  // Split query + hash safely
  const [pathWithHash, query] = url.split("?");
  const [path, hash] = pathWithHash.split("#");

  // If already has slash → keep
  if (path.endsWith("/")) {
    let finalUrl = path;
    if (hash) finalUrl += `#${hash}`;
    if (query) finalUrl += `?${query}`;
    return finalUrl;
  }

  // Add slash
  let finalUrl = path + "/";

  if (hash) finalUrl += `#${hash}`;
  if (query) finalUrl += `?${query}`;

  return finalUrl;
};
const MarkDownConverter = ({ children }) => {
  return (
    <Markdown
      options={{
        overrides: {
          a: {
            component: ({ href, children, ...props }) => {
              const isInternal =
                href?.startsWith("/") &&
                !href.startsWith("./") &&
                !href.startsWith("../");
          
              const finalHref = addTrailingSlash(href);
          
              if (isInternal) {
                return (
                  <Link href={finalHref} {...props}>
                    {children}
                  </Link>
                );
              }
          
              return (
                <a
                  href={finalHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                >
                  {children}
                </a>
              );
            },
          },
          h2: {
            component: ({ children }) => {
              const text = children.toString();
    
              const slug = text
                .toLowerCase()
                .replace(/[^\w\s]/g, "")
                .replace(/\s+/g, "-");
    
              return <h2 id={slug}>{children}</h2>;
            }
          },
          h3: {
            component: ({ children }) => {
              const text = children.toString();
    
              const slug = text
                .toLowerCase()
                .replace(/[^\w\s]/g, "")
                .replace(/\s+/g, "-");
    
              return <h3 id={slug}>{children}</h3>;
            }
          }
        },
      }}
      style={{ width: '100%' }}
    >
      {children}
    </Markdown>
  );
};

export default MarkDownConverter;
