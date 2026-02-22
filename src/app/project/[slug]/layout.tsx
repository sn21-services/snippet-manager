import HeaderApp from "@/components/HeaderApp/HeaderApp";

type LayoutProps = {
  children: Readonly<React.ReactNode>;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <HeaderApp />
      {children}
    </div>
  );
};

export default Layout;
