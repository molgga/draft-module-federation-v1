import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <DefaultLayout />,
      hydrateFallbackElement: <></>,
      children: [
        { index: true, lazy: () => import('./pages/HomeView') },
        { path: 'about', lazy: () => import('./pages/AboutView') },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_partialHydration: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export function DefaultLayout(props: { children?: React.ReactNode }) {
  console.log('DefaultLayout');
  return (
    <>
      <div>{props?.children || <Outlet />}</div>
    </>
  );
}

function App() {
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
}

export default App;
