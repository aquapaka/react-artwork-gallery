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
    <div
      id="login"
      className="pt-16 min-h-screen flex justify-center items-center"
    >
      <div className="border p-6 border-fuchsia-400 bg-fuchsia-600 bg-opacity-10 shadow text-center">
        <h2>Login</h2>
        <div className="mt-6">
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
      </div>
    </div>
  );
}
