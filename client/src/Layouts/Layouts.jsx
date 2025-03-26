import Footer from "./Footer"
import Navbar from "./Navbar"
import ScrollToTop from "../components/ScrollToTop"

const Layout = ({children}) =>{
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <main className="flex-grow container mx-auto px-4 py-8">
                {children}
            </main>
            <Footer/>
            <ScrollToTop />
        </div>
    )
}

export default Layout;