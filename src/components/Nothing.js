import emptyImage from "./../images/empty.png";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Nothing() {
  const navigate = useNavigate();

  // Define a function to close the modal and navigate to the home page
  function closeModal() {
    navigate("/");
  }

  // Define the Swal options with Tailwind CSS classes
  const swalOptions = {
    customClass: {
      // Apply Tailwind CSS classes to the modal
      container: "fixed inset-0 flex items-center justify-center z-50",
      popup: "bg-white rounded-lg shadow-lg w-1/2 mr-4",
      title: "text-red-600 text-2xl font-bold",
      htmlContainer: "p-4", // Add padding to the modal content
      confirmButton:
        "bg-red-600 text-white font-semibold rounded-md px-4 py-2 hover:bg-red-700",
      cancelButton:
        "bg-gray-300 text-gray-600 font-semibold rounded-md px-4 py-2 hover:bg-gray-400",
    },
    title: "Oops...!",
    text: "Nothing Found!!!!!!",
    showConfirmButton: true,
    showCancelButton: false,
    confirmButtonText: "OK",
  };

  // Open the Swal modal with the defined options
  Swal.fire(swalOptions).then(() => {
    closeModal();
  });

  return null;
}
