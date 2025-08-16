import Subscribe from "@/components/Subscribe.tsx";

const Footer = () => {
    return (
        <div className="relative bg-gray-200 mx-auto flex flex-col md:flex-row w-full rounded-3xl pt-48 pb-16 mt-32 px-8">
            {/* Newsletter Subscription */}
            <span className="container   md:w-1/3 md:absolute md:-top-16 mx-auto md:translate-x-1/4  max-w-2xl md:-translate-y-1/2">
                <Subscribe />
            </span>

            {/* Brand Info Section */}
            <div className="flex flex-col items-center md:items-start justify-between mx-auto mb-8 md:mb-0 md:w-1/3">
                <h1 className="text-2xl font-bold mb-4">SHOP.CO</h1>
                <p className="text-gray-600 text-center md:text-left mb-4">
                    We have clothes that suits your style and which you're proud to wear. From women to men.
                </p>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l-4 16M6 9h14M4 9h16" />
                        </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Links Sections */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:w-2/3">
                <div>
                    <h5 className="font-semibold mb-4">COMPANY</h5>
                    <ul className="space-y-2 text-gray-600">
                        <li><a href="#" className="hover:text-gray-800 transition-colors">About</a></li>
                        <li><a href="#" className="hover:text-gray-800 transition-colors">Features</a></li>
                        <li><a href="#" className="hover:text-gray-800 transition-colors">Works</a></li>
                        <li><a href="#" className="hover:text-gray-800 transition-colors">Career</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-semibold mb-4">HELP</h5>
                    <ul className="space-y-2 text-gray-600">
                        <li><a href="#" className="hover:text-gray-800 transition-colors">Customer Support</a></li>
                        <li><a href="#" className="hover:text-gray-800 transition-colors">Delivery Details</a></li>
                        <li><a href="#" className="hover:text-gray-800 transition-colors">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:text-gray-800 transition-colors">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-semibold mb-4">FAQ</h5>
                    <ul className="space-y-2 text-gray-600">
                        <li><a href="#" className="hover:text-gray-800 transition-colors">Account</a></li>
                        <li><a href="#" className="hover:text-gray-800 transition-colors">Manage Deliveries</a></li>
                        <li><a href="#" className="hover:text-gray-800 transition-colors">Orders</a></li>
                        <li><a href="#" className="hover:text-gray-800 transition-colors">Payments</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-semibold mb-4">RESOURCES</h5>
                    <ul className="space-y-2 text-gray-600">
                        <li><a href="#" className="hover:text-gray-800 transition-colors">Free eBooks</a></li>
                        <li><a href="#" className="hover:text-gray-800 transition-colors">Development Tutorial</a></li>
                        <li><a href="#" className="hover:text-gray-800 transition-colors">How to - Blog</a></li>
                        <li><a href="#" className="hover:text-gray-800 transition-colors">Youtube Playlist</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Footer
