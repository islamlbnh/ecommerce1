import Swipe from "@/components/common/Swipe.tsx";
const NewArrival = () => {
    return (
        <>
            <div className=" my-18 flex text-5xl font-bold items-center justify-center">NEW ARRIVALS</div>
            <div className="flex container w-full px-24 mx-auto justify-center items-center">
                <Swipe/>
            </div>

            {/*<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">*/}
            {/*    <div className="bg-gray-200 p-4 rounded-lg">*/}

            {/*        <Swipe/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}
export default NewArrival
