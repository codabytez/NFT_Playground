import { FC } from "react";

const BlogCard: FC<{
  title: string;
  image: string;
  author: string;
  date: string;
}> = ({ title, image, author, date }) => {
  return (
    <div className="sm:w-[400px] sm:h-[341px] border border-black bg-white flex flex-col">
      <img
        src={image}
        alt={author}
        className="w-full h-full object-cover border-b border-black"
      />
      <div className="p-5 flex flex-col gap-2">
        <h4 className="text-[#121212] font-mukta text-2xl font-medium">
          {title}
        </h4>
        <div className="flex justify-between items-center w-full">
          <p className="text-[#505050] font-courier">By {author}</p>
          <p className="text-[#505050] font-courier">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
