const LoadingIndicator = () => {
  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center">
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-white opacity-75"></div>
        <div className="text-indigo-500 relative z-20">
          <i className="fas fa-ring fa-spin fa-5x"></i>{" "}
          {/* Replace with your own wedding-themed icon */}
          <h2 className="text-3xl font-semibold text-gray-900">Loading...</h2>
        </div>
      </div>
    </>
  );
};

export default LoadingIndicator;
