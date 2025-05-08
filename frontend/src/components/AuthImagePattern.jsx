const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-16">
      <div className="max-w-md text-center space-y-6">
        {/* Pattern Grid */}
        <div className="grid grid-cols-3 gap-3">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl bg-primary/10 ${
                i % 2 === 0 ? "animate-pulse" : "opacity-50"
              }`}
            />
          ))}
        </div>

        {/* Heading & Subtitle */}
        <div>
          <h2 className="text-3xl font-extrabold text-base-content mb-2">{title}</h2>
          <p className="text-base text-base-content/70 leading-relaxed">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default AuthImagePattern;
