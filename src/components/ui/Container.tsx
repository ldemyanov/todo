type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className="md:container mx-auto">{children}</div>;
};

export default Container;
