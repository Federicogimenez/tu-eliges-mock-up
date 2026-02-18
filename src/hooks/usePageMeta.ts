import { useEffect } from 'react';

interface PageMetaProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
}

const setMetaContent = (selector: string, attr: string, value: string) => {
  const el = document.querySelector<HTMLElement>(selector);
  const prev = el?.getAttribute(attr) ?? '';
  if (el) el.setAttribute(attr, value);
  return { el, attr, prev };
};

export const usePageMeta = ({ title, description, canonical, ogImage }: PageMetaProps) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    const restores = [
      setMetaContent('meta[name="description"]', 'content', description),
      setMetaContent('link[rel="canonical"]', 'href', canonical),
      setMetaContent('meta[property="og:title"]', 'content', title),
      setMetaContent('meta[property="og:description"]', 'content', description),
      setMetaContent('meta[property="og:url"]', 'content', canonical),
      setMetaContent('meta[name="twitter:title"]', 'content', title),
      setMetaContent('meta[name="twitter:description"]', 'content', description),
      setMetaContent('meta[name="twitter:url"]', 'content', canonical),
    ];

    if (ogImage) {
      restores.push(
        setMetaContent('meta[property="og:image"]', 'content', ogImage),
        setMetaContent('meta[name="twitter:image"]', 'content', ogImage),
      );
    }

    return () => {
      document.title = prevTitle;
      restores.forEach(({ el, attr, prev }) => {
        if (el) el.setAttribute(attr, prev);
      });
    };
  }, [title, description, canonical, ogImage]);
};
