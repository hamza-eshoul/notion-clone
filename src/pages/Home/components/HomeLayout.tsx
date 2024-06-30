interface HomeLayout {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayout) => {
  return (
    <main className="flex h-screen w-full justify-center bg-white">
      {children}
    </main>
  );
};

export default HomeLayout;
