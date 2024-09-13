export default function page({ params }: { params: { id: string } }) {
  return <div>Hello from {params.id} page</div>;
}
