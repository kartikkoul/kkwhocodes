import type { ReactNode } from "react";
import CustomCursor from "../Cursor/CustomCursor";
import CustomScrollbar from "../UI/CustomScrollbar";
import PreLoaderGate from "../UI/PreLoaderGate";
import ScrollToTop from "../UI/ScrollToTop";
import SmoothScroll from "../UI/SmoothScroll";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <PreLoaderGate>
      <SmoothScroll>
        <div className="m-0 min-h-screen p-0">
          <CustomCursor />
          <CustomScrollbar />
          <ScrollToTop />
          <Header />
          {children}
          <Footer />
        </div>
      </SmoothScroll>
    </PreLoaderGate>
  );
};

export default Layout;
