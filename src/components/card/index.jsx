import './index.css';

function Card({ item }) {
    const { brand, imageURL, price, title, description } = item;

    return (
      <div className="bg-white border border-[#CCD5D6] rounded-lg shadow-md overflow-hidden h-full">
        <div className="h-48 w-full">
          <img src={imageURL || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="p-4 card-product-card-text">
          <p className="text-gray-700 text-md font-bold">$ {price}</p>
          <p className="text-gray-600 text-sm">{brand}</p>
          <p className="text-gray-800 text-md mt-1 truncate">{title}</p>
        </div>
      </div>
    );
}

export default Card;
