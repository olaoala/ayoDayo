import React, { useState } from 'react';
import PaystackPop from '@paystack/inline-js'; // Import Paystack library
import carote from '../Assets/carote.jpeg';
import eau from '../Assets/Eau.jpg';
import ninja3 from '../Assets/ninja3.png';
import icecream from '../Assets/icecream.png';
import airfry from '../Assets/airfry.png';
import castiron from '../Assets/castiron.jpeg';
import induction from '../Assets/Induction.jpeg';

// Dummy data for wishlist items
const wishlistItems = [
  { id: 1, name: 'Aluminum Nonstick Cookware', price: 'contact vendor', link: 'https://www.instagram.com/direct/t/17842911890292768', image: induction },
  { id: 2, name: 'Enamel Cast Iron Cookware', price: '₦280,000', link: 'https://www.instagram.com/direct/t/17842911890292768', image: castiron },
  { id: 3, name: 'UAKEEN Granite Cookware', price: '₦160,000', link: 'https://www.instagram.com/direct/t/17842911890292768', image: carote },
  { id: 4, name: 'EAU DE GINGEMBRE', price: '£185.00', link: 'https://www.mizensir.com/en-gb/products/eau-de-gingembre', image: eau },
  { id: 5, name: 'Ninja 3in1 processor', price: '₦590,000', link: 'https://www.instagram.com/direct/t/17842028024276015', image: ninja3 },
  { id: 6, name: 'Ninja 2in1 blender', price: '₦80,000', link: 'https://www.instagram.com/direct/t/17842028024276015', image: ninja3 }, // Corrected image
  { id: 7, name: 'Ninja NC501 CREAMi Deluxe', price: '$189.00', link: 'https://www.amazon.com/Ninja-Milkshakes-Programs-Containers-Perfect/dp/B0C2WB2V43/ref=mp_s_a_1_1_sspa', image: icecream },
  { id: 8, name: 'Ninja Crispi Air Fryer', price: '$159.99', link: 'https://www.amazon.com/Ninja-Microwave-Dishwasher-Containers-FN101GY/dp/B0DDDD8WD6/ref=mp_s_a_1_17', image: airfry },
];

const RegistryPage = () => {
  const [showPaystackModal, setShowPaystackModal] = useState(false); // State to control Paystack modal visibility
  const [showWishlistModal, setShowWishlistModal] = useState(false); // State to control wishlist modal visibility
  const [selectedItem, setSelectedItem] = useState(null); // Track selected item
  const [showConfirmation, setShowConfirmation] = useState(false); // Track confirmation popup

  const [formData, setFormData] = useState({
    fullName: '',
    amount: '',
    wishes: ''
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to initiate payment using Paystack
  const handlePaystackPayment = () => {
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: 'pk_live_bfcec00387948c33e9b9a146735988ba0d67315f', // Replace with your Paystack public key
      amount: formData.amount * 100, // Convert to kobo
      email: 'guest@example.com', // Use dynamic email if needed
      currency: 'NGN',
      onSuccess: (transaction) => {
        alert(`Payment Complete! Reference: ${transaction.reference}`);
      },
      onCancel: () => {
        alert('Payment Cancelled');
      },
    });
    setShowPaystackModal(false); // Close modal after initiating payment
  };

  // Function to handle item click
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowConfirmation(true); // Show confirmation popup
  };

  // Function to confirm the item selection
  const confirmSelection = () => {
    if (selectedItem.link.includes('instagram')) {
      // Trigger automatic message on Instagram
      window.open(`https://www.instagram.com/direct/new/?text=Hi, I'd like to purchase the ${selectedItem.name}.`, '_blank');
    } else {
      // Redirect to item link
      window.open(selectedItem.link, '_blank');
    }
    setShowConfirmation(false); // Close confirmation popup
  };

  return (
    <div className="flex flex-col items-center justify-center h-2/4 text-rose-dark-tint bg-gray-100 m-6 p-4 border-2 border-rose-light-tint rounded-lg">
      <h2 className="text-center font-cardo text-xl font-bold m-1">Registry</h2>
      <p className="text-center mb-6">Send funds or clear the couple’s wishlist to make their day extra special!</p>
      
      <div className="flex space-x-4">
        {/* Send Funds Button */}
        <button
          onClick={() => setShowPaystackModal(true)} // Open Paystack modal
          className="inline-block px-6 py-3 border bg-rose-dark-tint text-white rounded-lg hover:bg-chocolate transition"
        >
          Support Us via Paystack
        </button>

        {/* Payment Modal */}
        {showPaystackModal && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
              <h3 className="text-xl font-bold mb-4">Send Your Support</h3>

              {/* Form for Payment Details */}
              <form onSubmit={(e) => { e.preventDefault(); handlePaystackPayment(); }}>
                <label className="block mb-2">
                  Full Name:
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="block w-full border p-2 rounded"
                    required
                  />
                </label>

                <label className="block mb-2">
                  Amount (NGN):
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    className="block w-full border p-2 rounded"
                    required
                  />
                </label>

                <button
                  type="submit"
                  className="mt-4 px-4 py-2 bg-rose-dark-tint text-white rounded-lg hover:bg-chocolate"
                >
                  Pay via Paystack
                </button>
              </form>

              {/* Close Modal Button */}
              <button onClick={() => setShowPaystackModal(false)} className="mt-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400">
                Close
              </button>
            </div>
          </div>
        )}

        {/* Clear Wishlist Button */}
        <button
          onClick={() => setShowWishlistModal(true)} // Open wishlist modal
          className="inline-block px-6 py-3 border border-rose-dark-tint text-rose-dark-tint rounded-lg hover:bg-gray-400 transition"
        >
          Clear Our Wishlist
        </button>
      </div>

      {/* Wishlist Modal */}
      {showWishlistModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl h-96 overflow-y-scroll">
            <h3 className="text-xl font-bold mb-4">Our Wishlist</h3>

            {/* Grid of Wishlist Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="border p-4 rounded-lg text-center cursor-pointer hover:bg-gray-100"
                  onClick={() => handleItemClick(item)}
                >
                  <img src={item.image} alt={item.name} className="h-40 w-full object-cover mb-2" />
                  <h4 className="font-semibold">{item.name}</h4>
                  <p>{item.price}</p>
                </div>
              ))}
            </div>

            {/* Close Wishlist Modal Button */}
            <button onClick={() => setShowWishlistModal(false)} className="mt-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400">
              Close
            </button>
          </div>
        </div>
      )}

      {/* Confirmation Popup */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Confirm Purchase</h3>
            <p>Do you want to purchase the {selectedItem.name}?</p>
            <div className="flex space-x-4 mt-4">
              <button onClick={confirmSelection} className="px-4 py-2 bg-rose-dark-tint text-white rounded-lg hover:bg-chocolate">
                Yes
              </button>
              <button onClick={() => setShowConfirmation(false)} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400">
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistryPage;
