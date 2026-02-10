const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div>
      <h2 className="text-2xl">Showing details for user #{id}</h2>
    </div>
  );
};

export default page;
