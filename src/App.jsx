import { Suspense, use, useState } from "react";
import "./App.css";
import CustomerTickets from "./components/CustomerTickets/CustomerTickets";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import CountBox from "./components/CountBox/CountBox";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const customerDataFetching = async () => {
  const response = await fetch("/data.json");
  return response.json();
};



function Main({ fetchCustomer }) {
  const customerData = use(fetchCustomer);



  const initialCustomerTickets = customerData.filter((data) => data.status !== "In-Progress");



  const [customerTickets, setCustomerTickets] = useState(initialCustomerTickets);
  const [inProgressTickets, setInProgressTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);


  
  // Add ticket into Task Status
  const handleAddToTask = (ticket) => {
    setInProgressTickets((prev) => [ticket, ...prev]);
  };




  // When Complete is clicked: remove from in-progress, add to resolved, remove from customer list
  const handleComplete = (ticketId) => {
    const ticket = inProgressTickets.find((t) => t.id === ticketId);
    if (!ticket) return;

    // remove from in-progress
    setInProgressTickets((prev) => prev.filter((t) => t.id !== ticketId));

    // add to resolved
    setResolvedTickets((prev) => [ticket, ...prev]);

    // remove from customer tickets list
    setCustomerTickets((prev) => prev.filter((t) => t.id !== ticketId));
  };

  return (
    <>
      {/* pass derived counts to CountBox */}
      <CountBox inProgressCount={inProgressTickets.length} resolvedCount={resolvedTickets.length} />

      {/* pass arrays + handlers to CustomerTickets */}
      <CustomerTickets
        customerTickets={customerTickets}
        inProgressTickets={inProgressTickets}
        resolvedTickets={resolvedTickets}
        onAddToTask={handleAddToTask}
        onComplete={handleComplete}
      />
    </>
  );
}

function App() {
  const fetchCustomer = customerDataFetching();

  return (
    <>
      <Header />


      <Suspense fallback={"Data is loading..."}>
        <Main fetchCustomer={fetchCustomer} />
      </Suspense>

      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
