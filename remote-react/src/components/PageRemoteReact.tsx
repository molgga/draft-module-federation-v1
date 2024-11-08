import { useState } from 'react';
import { useMouse } from 'ahooks';
import HelloRemoteReact from './HelloRemoteReact';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { PageSome1 } from './PageSome1';

const testScheme = z.object({
  title: z.string().min(3, '최소 3글자'),
  content: z.string().min(1, '최소 1글자'),
});

type TestScheme = z.infer<typeof testScheme>;

export default function PageRemoteReact() {
  const [count, setCount] = useState(0);

  const mouse = useMouse();

  const formMethods = useForm<TestScheme>({
    resolver: zodResolver(testScheme),
    defaultValues: {
      title: '',
      content: '',
    },
  });

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const onSumit = (scheme: TestScheme) => {
    console.log('onSumit', scheme);
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

      <div style={{ margin: '5px', padding: '5px', border: '1px dashed #ddd' }}>
        <FormProvider {...formMethods}>
          <form onSubmit={formMethods.handleSubmit(onSumit)}>
            <div>
              <input
                type="text"
                placeholder="Title"
                {...formMethods.register('title')}
              />
              <div>
                <PageSome1 />
              </div>
              {formMethods.formState.errors.title?.message && (
                <div>{formMethods.formState.errors.title?.message}</div>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Content"
                {...formMethods.register('content')}
              />
              {formMethods.formState.errors.content?.message && (
                <div>{formMethods.formState.errors.content?.message}</div>
              )}
            </div>
            <div>
              <button type="submit">submit</button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
