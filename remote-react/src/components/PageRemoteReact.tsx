import { useState } from 'react';
import { useMouse } from 'ahooks';
import HelloRemoteReact from './HelloRemoteReact';

export default function PageRemoteReact() {
  const [count, setCount] = useState(0);

  const mouse = useMouse();

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ margin: '10px', padding: '10px', border: '1px solid #ddd' }}>
      <div style={{ margin: '5px', padding: '5px', border: '1px dashed #ddd' }}>
        <h1>여기는 Remote React page</h1>
        <div>
          <div>
            <button onClick={handleIncrease}>count</button>
          </div>
          <div>count: {count}</div>
          <div style={{ padding: '5px', wordBreak: 'break-all' }}>
            {JSON.stringify(mouse)}
          </div>
        </div>
      </div>

      <div style={{ margin: '5px', padding: '5px', border: '1px dashed #ddd' }}>
        <HelloRemoteReact />
      </div>
    </div>
  );
}
