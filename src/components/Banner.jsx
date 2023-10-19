const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mb-5 md:text-6xl text-4xl font-bold">
            Welcome to <span className="text-red-500">Unique</span>
            <span className="text-green-600">Shop</span>
          </h1>
          <p className="mb-5 font-bold text-xl md:text-4xl">
            Discover Exceptional Products
          </p>
          <p className="font-semibold text-lg md:text-2xl">
            Explore a world of extraordinary products carefully curated to bring
            you unique and exclusive shopping experiences. At UniqueShop, we are
            dedicated to offering you the best of the best.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
