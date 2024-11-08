import { createRoot } from 'react-dom/client';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(<App />);

// import { createApp } from 'vue';

// @ts-ignore
// import('remote-vue3/PageRemoteVue').then((PageRemoteVue) => {
//   const app = createApp(PageRemoteVue.default, {});
//   app.mount(document.querySelector('#test1')!);
// });

// import PageRemoteVue from 'remote-vue3/PageRemoteVue';
// const app = createApp(PageRemoteVue);
// app.mount(document.querySelector('#test1')!);
