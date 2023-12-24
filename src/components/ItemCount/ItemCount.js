import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="flex flex-col items-stretch w-80 justify-start space-y-8">
            <div className="flex items-center justify-center space-x-4"> {/* Incrementado el espacio entre botones */}
                <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                    onClick={decrement}
                    disabled={quantity <= 1}
                >
                    &ndash; {/* Usando el código de entidad HTML para un guion más largo */}
                </button>
                <span className="text-xl font-semibold">{quantity}</span>
                <button
                    className="bg-gray-400 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                    onClick={increment}
                    disabled={quantity >= stock}
                >
                    +
                </button>
            </div>
            <button
                className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline disabled:opacity-50 "
                onClick={() => onAdd(quantity)}
                disabled={!stock}
            >
                Add to Cart
            </button>

        </div>
    );
};

export default ItemCount;