import Markdown from 'markdown-to-jsx';
import Link from 'next/link';

const MarkDownConverter = ({ children }) => {
  return (
    <Markdown
      options={{
        overrides: {
          a: {
            component: ({ href, children, ...props }) => {
              const isInternal = href?.startsWith('/') && !href.startsWith('./') && !href.startsWith('../');

              if (isInternal) {
                return (
                  <Link href={href} {...props}>
                    {children}
                  </Link>
                );
              }

              return (
                <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
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
