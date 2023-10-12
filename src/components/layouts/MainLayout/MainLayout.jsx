import Navbar from "./Navbar"
import Footer from "./Footer"

const MainLayout = (props) => {
  return (
    <>
    <Navbar bg={props.bg} />
    <main className=" font-jakarta">
      {props.children}      
    </main>
    <Footer/>   
    </>
  )
}

export default MainLayout