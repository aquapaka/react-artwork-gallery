import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export default function Login({ setLogin }) {
  const navigate = useNavigate();

  const responseMessage = (response) => {
    setLogin(true);
    navigate("/manage");
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <div id="login" className="pt-16 min-h-screen flex justify-center items-center">
      login
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
  );
}
