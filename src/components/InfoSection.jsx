import React from "react";

function InfoSection() {
  const infoItems = [
    {
      icon: <FaShippingFast className="text-3xl text-red-600" />,
      title: "Free Shipping",
      description: "Get your orders delivered with no extra cost",
    },

    {
      icon: <FaHeadset className="text-3x1 text-red-600" />,
      title: "Support 24/7",
      description: "We are here to assist you anytime",
    },
    {
      icon: <FaMoneyBillwave className="text-3x1 text-red-600" />,
      title: "100% Money Back",
      description: "Full refund if you are not satisfied",
    },
  ];

  return <div>InfoSection</div>;
}

export default InfoSection;
