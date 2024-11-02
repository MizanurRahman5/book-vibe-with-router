import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookName,bookId, image, author, tags, category } = book;
  return (
    <Link to={`/book/${bookId}`}>
      <div className="card bg-base-100 w-96 p-6 shadow-xl">
        <figure className="bg-gray-300 p-8 rounded-2xl">
          <img src={image} className="h-[230px]" alt="Shoes" />
        </figure>
        <div className="card-body">
          <div>
            {tags.map((tag, ind) => (
              <button key={ind} className="btn btn-xs text-green-500 bg-green-200">
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>by : {author}</p>
          <div className="divider"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
