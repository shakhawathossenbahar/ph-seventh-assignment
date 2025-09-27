// src/components/CustomerTickets/CustomerTickets.jsx
import React from "react";
import CustomerCard from "../CustomerCard/CustomerCard";

const CustomerTickets = ({
  customerTickets,
  inProgressTickets,
  resolvedTickets,
  onAddToTask,
  onComplete,
}) => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="max-w-11/12 md:container mx-auto grid grid-cols-4 gap-10 py-10 ">
        {/* Left: Customer Tickets */}
        <div className="col-span-3">
          <h1 className="font-semibold text-2xl text-[#34485A] mb-3">Customer Tickets</h1>

          <div className="grid grid-cols-2 gap-5">
            {customerTickets.length === 0 ? (
              <div className="text-gray-500">No customer tickets available.</div>
            ) : (
              customerTickets.map((customer) => {
                const isInProgress = inProgressTickets.some((t) => t.id === customer.id);
                const isResolved = resolvedTickets.some((t) => t.id === customer.id);

                return (
                  <CustomerCard
                    key={customer.id}
                    customer={customer}
                    onAddToTask={onAddToTask}
                    isInProgress={isInProgress}
                    isResolved={isResolved}
                  />
                );
              })
            )}
          </div>
        </div>

        {/* Right: Task Status + Resolved */}
        <div className="col-span-1">
          <h1 className="font-semibold text-2xl text-[#34485A] mb-3">Task Status</h1>
          <p className="text-[#627382] mb-6">Select a ticket to add to Task Status</p>

          {/* Task Status list */}
          <div className="space-y-3 mb-6">
            {inProgressTickets.length === 0 ? (
              <div className="text-gray-500">No task status card added yet.</div>
            ) : (
              inProgressTickets.map((t) => (
                <div
                  key={t.id}
                  className="bg-white p-3 rounded-md shadow-sm flex items-center justify-between"
                >
                  <div className="text-sm text-slate-800">{t.title}</div>
                  <div>
                    <button
                      onClick={() => onComplete(t.id)}
                      className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                    >
                      Complete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Resolved section */}
          <h1 className="font-semibold text-2xl text-[#34485A] mb-3">Resolved Task</h1>
          {resolvedTickets.length === 0 ? (
            <p className="text-[#627382]">No resolved tasks yet.</p>
          ) : (
            <div className="space-y-2">
              {resolvedTickets.map((r) => (
                <div key={r.id} className="bg-white p-3 rounded-md shadow-sm text-sm">
                  <div className="font-medium">{r.title}</div>
                  <div className="text-xs text-gray-500">{r.customer} • {r.createdAt}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerTickets;
