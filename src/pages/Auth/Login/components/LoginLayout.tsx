interface LoginLayoutProps {
  children: React.ReactElement;
}

const LoginLayout = ({ children }: LoginLayoutProps) => {
  return (
    <main className="max-w-xs mx-auto flex flex-col gap-6 items-center justify-center h-[80vh]">
      {children}
    </main>
  );
};

export default LoginLayout;
