import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const DisplayError = () => {
  const navigate = useNavigate();

  // Show the error alert using Swal
  Swal.fire({
    icon: "error",
    title: "Oops...!",
    text: `There is some Server Problem!! Try again`,
  }).then(() => {
    // Navigate to the home page after the user clicks "OK"
    navigate("/");
  });

  // Return null (nothing to render)
  return null;
};

export default DisplayError;
