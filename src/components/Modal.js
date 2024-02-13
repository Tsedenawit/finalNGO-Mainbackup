import React, { useState,useEffect} from 'react';

const Modal = ({ visible, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [thankYouMessage, setThankYouMessage] = useState('');

  const banks = ['CBE', 'Dashen Bank', 'Bank of Abyssinia', 'Amhara Bank','Oromiya Bank']; // Replace with your actual bank options

     //Make a background inactive when the modal is on
   
 
  if (!visible) return null;






  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your logic for handling form submission here
    // For demo purposes, we'll just set a thank you message
    setThankYouMessage(`Thank you for your donation!\n ስለ እርዳታዎ እናመሰግናለን።`);

    // Optionally, you can reset the form fields
    setFullName('');
    setSelectedBank('');
    setAccountNumber('');
    setAmount('');
    // Refresh the page
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  return (
    <div>
      {visible && (
        <div className="fixed inset-0 z-10 overflow-y-auto  flex items-center  justify-center ">
          <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-50"></div>

          <div className="relative bg-white w-screen h-screen  my-28 mt-48 lg:w-128 p-10 rounded shadow-md z-10">
            <button
              className="absolute top-0 right-0 m-2 p-2  hover:text-gray-700 text-red-700 text-6xl border-red-600"
              onClick={onClose}
            >
               &times;
            </button>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-24">
              {/* First Row */}
              <div className="mb-4  lg:mb-0 ">
                <label htmlFor="fullname" className="block mb-2">
                  Full Name:
                </label>
                <input
                  className="w-full  border p-2 rounded"
                  type="text"
                  id="fullname"
                  placeholder="Insert your name here."
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div className="mb-4 lg:mb-0">
                <label htmlFor="bank" className="block mb-2">
                  Select Bank:
                </label>
                <select
                  className="w-full border p-2 rounded"
                  id="bank"
                  value={selectedBank}
                  onChange={(e) => setSelectedBank(e.target.value)}
                >
                  <option value="">Select a bank</option>
                  {banks.map((bank, index) => (
                    <option key={index} value={bank}>
                      {bank}
                    </option>
                  ))}
                </select>
              </div>

              {/* Second Row */}
              <div className="mb-4 lg:mb-0">
                <label htmlFor="accountnum" className="block mb-2">
                  Account Number:
                </label>
                <input
                  className="w-full border p-2 rounded"
                  type="number"
                  id="accountnum"
                  placeholder="Insert your CBE number"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                />
              </div>

              <div className="mb-4 lg:mb-0">
                <label htmlFor="amount" className="block mb-2">
                  Amount of Money:
                </label>
                <input
                  className="w-full border p-2 rounded"
                  type="number"
                  id="amount"
                  placeholder="Enter the amount to donate"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              <div className="col-span-2 text-center">
                <br /><br />
                <button
                  className=" bg-blue-600 text-white py-2 px-4 rounded"
                  type="submit"
                >
                  Send Money
                </button>
              </div>

              {/* Thank You Message */}
              {thankYouMessage && (
                <div className="col-span-2 mt-4 text-green-600 text-center text-4xl">
                  <strong>{thankYouMessage}</strong>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
