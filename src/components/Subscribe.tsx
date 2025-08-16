import {Mail} from "lucide-react";

const Subscribe = () => {
    return (
        <div className=" container  px-32 bg-black items-center gap-8 h-40 w-fit mx-auto  justify-center  flex flex-row rounded-3xl my-16 translate-y-1/2">
            <div className="text-4xl font-bold text-white w-lg ">
                STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
            </div>

            <div className="flex flex-col items-center space-y-4  w-sm relative "  >
                <div className="absolute top-5 left-0 -translate-y-1/2 translate-x-1/2">
                    <Mail />
                </div>
                <input type="text" placeholder="Enter your email address" className="bg-white w-full border border-white text-black px-14 py-2 rounded-3xl" />
                <button className="bg-white text-black rounded-3xl px-4 py-2 w-full">Subscribe</button>

            </div>

        </div>
    )
}
export default Subscribe
