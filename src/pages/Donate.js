
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IMG1 from "../images/womens and children 2.jpeg";
import IMG2 from "../images/chidrens reading.jpg";
import DonationModal from "../components/Modal"; // Renamed to avoid conflict
import { useState } from "react";

export default function Donate() {
  const [showModal, setShowModal] = useState(false);

  const handleOnClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className="">
          <DonationModal visible={showModal} onClose={handleOnClose} />{" "}
          {/* Updated component name */}
        </div>
        <div className="mt-28 bg-indigo-600 h-28">
          <h1 className="text-6xl text-center font-bold text-white">
            DONATE <span className="text-green-600">US</span>{" "}
          </h1>
        </div>
        {/* Rest of your code */}
        <div className="object-cover grid grid-cols-1  lg:grid-cols-2 gap-2 lg:gap:4 pt-5 m-10">
          <div>
            <img className="w-full md:h-full object-cover " src={IMG1} />
          </div>
          <div className="bg-indigo-100">
            <h1 className="p-6 hover:opacity-85 hover:rounded-xl ">
              <div className="text-center">
                <span className="text-4xl font-bold text-center text-blue-600">
                  Womens Care fundrising
                </span>
              </div>
              Step into the realm of meaningful impact with Bright Thought
              Children and Women Organization. Your generosity has the power to
              shape a brighter future, one where vulnerable children and women
              find solace, education and empowerment. At Bright Thought, we
              believe in the extraordinary potential of collective action, and
              your contribution is a catalyst for positive change. Your donation
              serves as a beacon of hope, allowing us to extend a caring daycare
              to disadvantaged children and provide crucial skill development
              programs for both children and women. Together, we can break the
              chains of poverty, nurture leaders, and sow the seeds of a future
              where every child and woman has the opportunity to shine. Join us
              in this transformative journey, where your support is not just a
              gift; it's a promise of empowerment, resilience, and a shared
              commitment to building a world that radiates with the brilliance
              of empowered lives. Your donation isn't just a contribution; it's
              a beacon of hope and a tangible investment in the potential of
              those who need it most. Embrace the opportunity to make a lasting
              impact - donate to Bright Thought today and become a vital part of
              our mission to create a future filled with promise and positivity.
            </h1>
            <div className="flex justify-center">
              <button
                onClick={() => setShowModal(true)}
                className="bg-blue-600 p-3 rounded-xl mb-4 text-white hover:scale-110 "
              >
                Donate
              </button>
            </div>
          </div>
        </div>

        <br></br>
        <br></br>
        <div className="object-cover grid grid-cols-1  lg:grid-cols-2 gap-2 lg:gap:4 m-10">
          <div className="bg-indigo-100 pb-6">
            <h1 className="p-6 ">
              <div className="text-center">
                <span className="text-4xl font-bold text-center text-blue-600">
                  Children Care fundrising
                </span>
              </div>
              Step into the realm of meaningful impact with Bright Thought
              Children and Women Organization. Your generosity has the power to
              shape a brighter future, one where vulnerable children and women
              find solace, education and empowerment. At Bright Thought, we
              believe in the extraordinary potential of collective action, and
              your contribution is a catalyst for positive change. Your donation
              serves as a beacon of hope, allowing us to extend a caring daycare
              to disadvantaged children and provide crucial skill development
              programs for both children and women. Together, we can break the
              chains of poverty, nurture leaders, and sow the seeds of a future
              where every child and woman has the opportunity to shine. Join us
              in this transformative journey, where your support is not just a
              gift; it's a promise of empowerment, resilience, and a shared
              commitment to building a world that radiates with the brilliance
              of empowered lives. Your donation isn't just a contribution; it's
              a beacon of hope and a tangible investment in the potential of
              those who need it most. Embrace the opportunity to make a lasting
              impact - donate to Bright Thought today and become a vital part of
              our mission to create a future filled with promise and positivity.
            </h1>
            <div className="flex justify-center">
              <button
                onClick={() => setShowModal(true)}
                className="bg-blue-600 p-3 rounded-xl text-white hover:scale-110"
              >
                Donate
              </button>
            </div>
          </div>
          <div>
            <div>
              <img className="w-full md:h-full object-cover" src={IMG2} />
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <div></div>
      <Footer />
    </div>
  );
}
