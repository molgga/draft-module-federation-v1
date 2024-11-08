import './App.css';
import React, { useEffect, useRef } from 'react';
import { createApp } from 'vue';

// React 리모트 가져오기
const HelloRemoteReact = React.lazy(async () => {
  // @ts-ignore
  return import('remote-react/HelloRemoteReact').catch(() => ({
    default: () => <>Error!</>,
  }));
});

function App() {
  const refRenderToVueApp = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (refRenderToVueApp.current!.getAttribute('mounted')) return;
    // @ts-ignore
    import('remote-vue3/HelloRemoteVue').then((HelloRemoteVue) => {
      const app = createApp(HelloRemoteVue.default, {
        msg: 'Vue Remote 컴포넌트!!',
      });
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
        <HelloRemoteReact />
      </div>
      <div>
        <div ref={refRenderToVueApp}></div>
      </div>
    </>
  );
}

export default App;
