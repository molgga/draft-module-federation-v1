import './App.css';
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <DefaultLayout />,
      hydrateFallbackElement: <></>,
      children: [
        { index: true, lazy: () => import('./pages/HomeView') },
        { path: 'page-with-vue', lazy: () => import('./pages/PageWithVue') },
        {
          path: 'page-with-react',
          lazy: () => import('./pages/PageWithReact'),
        },
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
      <div>
        <Link style={{ padding: '10px' }} to="/">
          home
        </Link>
        <Link style={{ padding: '10px' }} to="/page-with-vue">
          /page-with-vue
        </Link>
        <Link style={{ padding: '10px' }} to="/page-with-react">
          /page-with-react
        </Link>
      </div>
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
