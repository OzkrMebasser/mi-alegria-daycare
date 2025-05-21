import React from "react";

interface ItemsCardsProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
}
const ItemsCards = ({ title, description, icon, bgColor }: ItemsCardsProps) => {
  return (
    <div className={`${bgColor} p-6 rounded-lg shadow-md`}>
      <span className="inline absolute mt-1 text-xl ">{icon}</span>
      <h3 className="text-lg ml-7 font-medium mb-2 text-gray-800">{title}</h3>

      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default ItemsCards;
