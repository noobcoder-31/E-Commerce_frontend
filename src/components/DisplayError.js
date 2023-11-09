import Swal from "sweetalert2";

const DisplayError = (err) => {
  return Swal.fire({
    icon: "error",
    title: "Oops...!",
    text: `There is some Error!! message: ${err.message}    `,
  });
};
export default DisplayError;
