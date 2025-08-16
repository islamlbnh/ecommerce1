import CommentSwipe from "./common/CommentSwipe";

const CommentSection = () => {
  return (
    <div className="container mx-auto px-24">
      <div className="my-18 flex text-5xl font-bold items-center text-right">
        OUR HAPPY CUSTOMERS
      </div>
      <div className="mx-auto max-w-7xl">
        <CommentSwipe />
      </div>
    </div>
  );
};

export default CommentSection;