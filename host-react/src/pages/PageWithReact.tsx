import React from 'react';

// React 리모트 가져오기
const PageRemoteReact = React.lazy(async () => {
  // @ts-ignore
  return import('remote-react/PageRemoteReact').catch(() => ({
    default: () => <>Error: react remote 오류</>,
  }));
});

export function Component() {
  return (
    <>
      <div>
        <h1>React Host App</h1>
      </div>
      <PageRemoteReact />
    </>
  );
}
