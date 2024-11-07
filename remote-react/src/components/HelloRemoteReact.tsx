export function HelloReact1({ msg }: { msg?: string }) {
  return (
    <div style={{ border: '1px dashed #ccc' }}>
      <h1>{msg ?? 'Hello React Remote'}</h1>
    </div>
  );
}
