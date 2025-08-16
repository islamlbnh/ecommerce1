import Swipe from "./common/Swipe";

const NewSeller = () => {
  return (
    <>
      <div className="my-18 flex text-5xl font-bold items-center justify-center">
        NewSeller
      </div>
      <div className="flex container w-full px-24 mx-auto justify-center items-center">
        <Swipe />
      </div>
      <button className="my-18 mx-auto rounded-4xl bg-gray-100/50 px-16 py-4 border border-gray-400/50  flex text-lg font-medium items-center justify-center">
        View more
      </button>
    </>
  );
};

export default NewSeller;
