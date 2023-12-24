import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      phone,
      email,
    };

    onConfirm(userData);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      <form onSubmit={handleConfirm}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={({ target }) => setName(target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Create Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
