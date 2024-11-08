import { useEffect, useRef } from 'react';
import { createApp } from 'vue';

export function Component() {
  const refRenderToVueApp = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (refRenderToVueApp.current!.getAttribute('mounted')) return;
    // @ts-ignore
    import('remote-vue3/PageRemoteVue').then((HelloRemoteVue) => {
      const app = createApp(HelloRemoteVue.default, {});
      app.mount(refRenderToVueApp.current!);
      refRenderToVueApp.current!.setAttribute('mounted', 'v');
    });
  }, []);

  return (
    <>
      <div>
        <h1>React Host App</h1>
      </div>
      <div>
        <div ref={refRenderToVueApp}></div>
      </div>
    </>
  );
}
