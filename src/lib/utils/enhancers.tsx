import { Profiler, ProfilerOnRenderCallback } from 'react';

export function withProfiler(Component: () => JSX.Element, id: string) {
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
