import { Link, Route, Routes, NavLink } from 'react-router-dom'
import { HomePage } from '../pages/home'
import { ProductsPage } from '../pages/products'
import { CartPage } from '../pages/cart'
import { LoginPage } from '../pages/login'

export function Navbar() {
    return (
        <>

            <div className=" z-10 relative">
                {/* Navbar */}
                <nav className='flex justify-around items-center p-4 shadow-md'>
                    <div className='flex-grow ml-20'>Logo</div>
                    <div className='flex gap-27 mr-40 min-w-3'>
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/products">Products</NavLink>
                        <NavLink to="/cart">Cart</NavLink>
                        <NavLink to="/login">Login</NavLink>
                    </div>
                </nav>

                {/* Main content */}
                <main>
                    <Routes>
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/products" element={<ProductsPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/login" element={<LoginPage />} />
                    </Routes>
                </main>
            </div>

        </>
    )
}