type BackgroundProps = { children: React.ReactNode };

const Background = ({ children }: BackgroundProps) => {
  return (
    <div className="bg-slate-900 w-full">
      <div className="absolute z-0 h-[200px] bg-slate-950 w-full"></div>
      <div className="relative z-10 min-h-screen">{children}</div>
    </div>
  );
};

export default Background;
