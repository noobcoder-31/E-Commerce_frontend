import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const DisplayError = (props) => {
  const navigate = useNavigate();
  let v = "There is some Server Problem!! Try again";
  if (props.error) v = props.error;
  // Show the error alert using Swal
  Swal.fire({
    icon: "error",
    title: "Oops...!",
    text: `${v}`,
  }).then(() => {
    // Navigate to the home page after the user clicks "OK"
    navigate("/");
  });
  console.log(v);
  // Return null (nothing to render)
  return null;
};

export default DisplayError;
