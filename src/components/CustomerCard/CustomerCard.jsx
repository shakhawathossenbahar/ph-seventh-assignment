// src/components/CustomerCard/CustomerCard.jsx
import React from "react";
import { toast } from "react-toastify";

const CustomerCard = ({ customer, onAddToTask, isInProgress, isResolved }) => {
  const handleClick = () => {
    if (isResolved) {
      toast("Resolved!");
      return;
    }
    if (isInProgress) {
      toast("In Progress!");
      return;
    }

    onAddToTask(customer);
    toast("Added to in-progress");
  };

  return (
    <div
      onClick={handleClick}
      className={`p-4 bg-white shadow-lg rounded-md transition 
        ${isInProgress || isResolved ? "opacity-70 cursor-not-allowed" : "cursor-pointer hover:shadow-xl"}`}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-[18px] text-black font-medium">{customer.title}</h1>

        <div
          className={`px-3 py-1 rounded-3xl flex items-center gap-2 
            ${customer.status === "Open" ? "bg-green-100 text-green-700" : ""}
            ${customer.status === "In-Progress" ? "bg-yellow-100 text-yellow-700" : ""}
            ${customer.status === "Closed" ? "bg-red-100 text-red-700" : ""}`}
        >
          <i className="fa-solid fa-circle text-xs"></i>
          <div className="font-medium text-[16px]">{customer.status}</div>
        </div>
      </div>

      <div className="my-3 text-gray-500 text-sm line-clamp-2">{customer.description}</div>

      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div className="text-gray-500 text-xs">#{customer.id}</div>

          <div
            className={`text-xs font-semibold ${
              customer.priority === "HIGH PRIORITY"
                ? "text-red-600"
                : customer.priority === "MEDIUM PRIORITY"
                ? "text-yellow-600"
                : "text-green-600"
            }`}
          >
            {customer.priority}
          </div>
        </div>

        <div className="pr-4 text-gray-500 text-[14px] flex items-center gap-2">
          <div>{customer.customer}</div>
          <i className="fa-regular fa-calendar text-sm"></i>
          <div className="text-xs">{customer.createdAt}</div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
