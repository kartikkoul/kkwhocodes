import type { ReactNode } from "react";
import CustomCursor from "../Cursor/CustomCursor";
import CustomScrollbar from "../UI/CustomScrollbar";
import PreLoaderGate from "../UI/PreLoaderGate";
import SmoothScroll from "../UI/SmoothScroll";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <PreLoaderGate>
      <div className="m-0 min-h-screen p-0">
        <SmoothScroll />
        <CustomCursor />
        <CustomScrollbar />
        <Header />
        {children}
      </div>
    </PreLoaderGate>
  );
};

export default Layout;
