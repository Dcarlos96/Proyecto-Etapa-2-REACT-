import AppRoutes from "./routes/AppRoutes"
import CartProvider from "./context/CartProvider"
import Footer from "./layout/Footer"
import Header from "./layout/Header"
import Home from "./pages/Home"



function App() {
  return (
    <CartProvider>
      <AppRoutes/>
    </CartProvider>

  )
}

export default App