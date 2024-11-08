import { useState } from 'react';

export default function HelloReact1({ msg }: { msg?: string }) {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  return (
    <div style={{ border: '1px dashed #ccc' }}>
      <h1>{msg ?? 'Hello React Remote'}</h1>
      <h3>React 컴포넌트</h3>
      <div>
        <div>
          <button onClick={handleIncrease}>count</button>
        </div>
        <div>count: {count}</div>
      </div>
    </div>
  );
}
