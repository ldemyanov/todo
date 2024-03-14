type BackgroundProps = { children: React.ReactNode };

const Background = ({ children }: BackgroundProps) => {
  return (
    <div className="bg-slate-900 w-full min-h-screen h-full">
      <div className="absolute h-[200px] bg-slate-950 w-full">{children}</div>
    </div>
  );
};

export default Background;
