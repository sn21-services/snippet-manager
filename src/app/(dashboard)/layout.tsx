type LayoutProps = {
  children: Readonly<React.ReactNode>;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <header className="bg-[#2e3138] h-12 shadow-md relative">header</header>
      <div className="flex h-[calc(100vh-48px)]">
        <aside className="w-60 bg-[#2e3138]">sidebar</aside>
        <main className="bg-[#202327] flex-1">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
