import { Profiler, ProfilerOnRenderCallback, useEffect } from 'react';

export function withProfiler(Component: () => JSX.Element, id: string) {
  if (process.env.NODE_ENV !== 'development') {
    return Component;
  }

  const WrappedComponent = () => {
    const callback: ProfilerOnRenderCallback = (
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      interactions,
    ) => {
      // used for profiling
      console.debug({
        id,
        phase,
        actualDuration,
        baseDuration,
        startTime,
        commitTime,
        interactions,
      });
    };

    return (
      <Profiler id={id} onRender={callback}>
        <Component />
      </Profiler>
    );
  };

  return WrappedComponent;
}

interface IMetaTags {
  description?: string;
  og?: {
    title?: string;
    description?: string;
    image?: string;
  };
}
interface ITags {
  title: string;
  metaTags?: IMetaTags;
}

// TODO: refactor to be simplified and flexible
export function withMetaTags(Component: () => JSX.Element, tags: ITags) {
  const Wrapped = () => {
    useEffect(() => {
      const doc = document.getElementsByTagName('head');
      doc.item(0).getElementsByTagName('title').item(0).innerText = tags.title;

      const descriptionNode: HTMLMetaElement = document.createElement('meta');
      descriptionNode.setAttribute('name', 'description');
      descriptionNode.setAttribute('content', tags.metaTags?.description);
      doc.item(0).appendChild(descriptionNode);

      const ognTitleNode: HTMLMetaElement = document.createElement('meta');
      ognTitleNode.setAttribute('property', 'og:title');
      ognTitleNode.setAttribute('content', tags.metaTags?.og?.title);
      doc.item(0).appendChild(ognTitleNode);

      const ogUrlNode: HTMLMetaElement = document.createElement('meta');
      ogUrlNode.setAttribute('property', 'og:url');
      ogUrlNode.setAttribute('content', window.location.href);
      doc.item(0).appendChild(ogUrlNode);

      const ogDesNode: HTMLMetaElement = document.createElement('meta');
      ogDesNode.setAttribute('property', 'og:description');
      ogDesNode.setAttribute('content', tags.metaTags?.og?.description);
      doc.item(0).appendChild(ogDesNode);

      const ognImgNode: HTMLMetaElement = document.createElement('meta');
      ognImgNode.setAttribute('property', 'og:image');
      ognImgNode.setAttribute('content', tags.metaTags?.og?.image);
      doc.item(0).appendChild(ognImgNode);

      console.log(doc.item(0));
    }, []);

    return <Component />;
  };

  return Wrapped;
}
