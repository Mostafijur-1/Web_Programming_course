const Navbar = () => {
  return (
    <div className="px-4 pt-2">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold pl-50 font-mono">Bistro Cafe</div>
        <div className="flex space-x-4 px-50">
          <div>Home</div>
          <div>About</div>
          <div>Contact</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
