import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  url: string;
  type?: string;
  publishedTime?: string;
  tags?: string[];
}

function setMeta(property: string, content: string, isName = false) {
  const attr = isName ? 'name' : 'property';
  let el = document.querySelector(`meta[${attr}="${property}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, property);
    document.head.appendChild(el);
  }
  el.content = content;
}

export function useSeo({ title, description, url, type = 'article', publishedTime, tags }: SeoProps) {
  useEffect(() => {
    const fullTitle = `${title} | ConnectDev.pro`;
    document.title = fullTitle;
    window.scrollTo(0, 0);

    setMeta('description', description, true);
    setMeta('og:title', fullTitle);
    setMeta('og:description', description);
    setMeta('og:type', type);
    setMeta('og:url', `https://connectdevpro.lovable.app${url}`);
    setMeta('twitter:card', 'summary_large_image', true);
    setMeta('twitter:title', fullTitle, true);
    setMeta('twitter:description', description, true);

    if (publishedTime) {
      setMeta('article:published_time', publishedTime);
    }
    tags?.forEach((tag, i) => {
      setMeta(`article:tag:${i}`, tag);
    });
  }, [title, description, url, type, publishedTime, tags]);
}
