const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h2 className="text-2xl">Dashboard Navbar</h2>
      {children}
    </div>
  );
};

export default layout;
