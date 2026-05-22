import type { ReactNode } from "react";
import CustomCursor from "../Cursor/CustomCursor";
import CustomScrollbar from "../UI/CustomScrollbar";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="m-0 min-h-screen p-0">
      <CustomCursor />
      <CustomScrollbar />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
