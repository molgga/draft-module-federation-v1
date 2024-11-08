import { useWatch } from 'react-hook-form';

export function PageSome1() {
  const title = useWatch({ name: 'title' });
  return <div>title length: {title.length}</div>;
}
