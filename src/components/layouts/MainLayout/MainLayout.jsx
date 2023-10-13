import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = (props) => {
  return (
    <>
      <Navbar bg={props.bg} border={props.border} borderP={props.borderP} />
      <main className={" font-jakarta " + props.mt}>{props.children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
