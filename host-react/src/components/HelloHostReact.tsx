export default function HelloHostReact({ msg }: { msg?: string }) {
  return (
    <div style={{ border: '1px dashed #ccc' }}>
      <h1>{msg ?? 'React Host component'}</h1>
    </div>
  );
}
