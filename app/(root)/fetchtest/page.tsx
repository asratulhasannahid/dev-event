const page = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!response.ok) throw new Error("Failed to fetch data");
  const albums = await response.json();
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {albums.map((album: { id: number; title: string }) => (
          <div
            key={album.id}
            className="bg-white shadow-md rounded-lg p-4 transition"
          >
            <h3 className="text-lg text-black font-bold mb-2">{album.title}</h3>
            <p className="text-gray-600">{album.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
