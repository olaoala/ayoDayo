import React, { useState } from 'react';
import PaystackPop from '@paystack/inline-js'; // Import Paystack library

const RegistryPage = () => {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [formData, setFormData] = useState({
    fullName: '',
    amount: '',
    wishes: ''
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
    setShowModal(false); // Close modal after initiating payment
  };

  // Function to handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call Paystack payment function after form is submitted
    handlePaystackPayment();
  };

  // Function to open the modal
  const openModal = () => setShowModal(true);

  // Function to close the modal
  const closeModal = () => setShowModal(false);

  return (
    <div className="flex flex-col items-center justify-center h-2/4  bg-gray-100 m-6 p-4 border-2 border-rose-light-tint  rounded-lg ">
      <h2 className="text-center font-cardo text-xl  font-bold m-1">Registry</h2>
      <p className="text-center mb-6">Send funds or clear the couple’s wishlist to make their day extra special!</p>
      
      <div className="flex space-x-4">
        {/* Send Funds Button */}
        <button
          onClick={openModal}
          className="px-6 py-3 bg-rose-gold text-white rounded-lg hover:bg-chocolate transition"
        >
          Send Funds
        </button>

        {/* Clear Wishlist Button */}
        <button
          onClick={() => window.location.href = 'https://www.amazon.com/wedding/registry-example'} // Replace with the actual Amazon wishlist link
          className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
        >
          Clear Wishlist
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4">Send Your Wishes and Funds</h3>
            
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Amount (NGN)</label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Wishes and Prayers</label>
                <textarea
                  name="wishes"
                  value={formData.wishes}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  rows="4"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-rose-gold text-white rounded-lg hover:bg-chocolate"
                >
                  Submit & Pay
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistryPage;
