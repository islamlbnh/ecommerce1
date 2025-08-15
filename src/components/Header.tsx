import { X, ShoppingCart, User, Search } from "lucide-react";
import { useState } from "react";
import { Menu } from 'lucide-react';


const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    return (
        <>
            {/* Sign up banner */}
            {isOpen && (
                <div className="flex justify-around text-white items-center text-sm bg-black mt-3 relative">
                    <div className="flex items-center bg-black p-3">
                        <div>
                            Sign up and get 20% off your first order.
                            <span className="underline pl-2 cursor-pointer">Sign Up Now</span>
                        </div>
                    </div>
                    <div className="absolute right-6 md:right-20 cursor-pointer">
                        <X onClick={() => setIsOpen(false)} />
                    </div>
                </div>
            )}

            {/* Main header */}
            <div className="flex justify-around items-center  py-4 w-full container mx-auto  px-12 ">
                <div className="flex items-center justify-between  gap-8 container mx-auto px-4 overflow-hidden">
                    <h1 className="text-3xl font-extrabold flex items-center justify-between gap-4" >                    <Menu className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
                        SHOP.CO</h1>

                    {/* Navigation */}
                    <ul className="gap-6 md:text-lg text-md hidden flex-shrink-2  lg:flex">
                        <li className="flex items-center gap-2 cursor-pointer">
                            Shop
                            <svg
                                width="12"
                                height="7"
                                viewBox="0 0 12 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.5306 1.53063L6.53063 6.53063C6.46095 6.60055 6.37816 6.65602 6.28699 6.69388C6.19583 6.73173 6.09809 6.75122 5.99938 6.75122C5.90067 6.75122 5.80293 6.73173 5.71176 6.69388C5.6206 6.65602 5.53781 6.60055 5.46813 6.53063L0.468128 1.53063C0.327232 1.38973 0.248077 1.19864 0.248077 0.999378C0.248077 0.80012 0.327232 0.609024 0.468128 0.468128C0.609025 0.327231 0.800121 0.248077 0.999378 0.248077C1.19864 0.248077 1.38973 0.327231 1.53063 0.468128L6 4.9375L10.4694 0.467503C10.6103 0.326607 10.8014 0.247452 11.0006 0.247452C11.1999 0.247452 11.391 0.326607 11.5319 0.467503C11.6728 0.608399 11.7519 0.799496 11.7519 0.998753C11.7519 1.19801 11.6728 1.38911 11.5319 1.53L11.5306 1.53063Z"
                                    fill="black"
                                />
                            </svg>
                        </li>
                        <li className="flex items-center cursor-pointer">On Sale</li>
                        <li className="flex items-center cursor-pointer">New Arrivals</li>
                        <li className="flex items-center cursor-pointer">Brands</li>
                    </ul>

                    {/* Search bar */}
                    <div className="items-center gap-2 px-6 mx-6 bg-[#f0f0f0] rounded-4xl grow-2  hidden md:flex">
                        <Search />
                        <input
                            className="px-3 py-4  focus:outline-none focus:ring-0 focus:shadow-none flex-1"
                            type="search"
                            placeholder="Search"
                        />
                    </div>

                    {/* Icons */}
                    <div className="flex items-center gap-4">
                        <Search className="block md:hidden" />
                        <ShoppingCart />
                        <User />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
