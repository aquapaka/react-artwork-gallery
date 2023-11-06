import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export default function Login({ setLogin }) {
  const navigate = useNavigate();

  const loginWithGoogle = useGoogleLogin({
    onSuccess: codeResponse => {
      setLogin(true);
      navigate("/manage")
    },
    flow: 'auth-code',
  });

  return (
    <div
      id="login"
      className="pt-16 min-h-screen flex justify-center items-center"
    >
      <div className="border p-6 border-fuchsia-400 bg-fuchsia-600 bg-opacity-10 shadow text-center">
        <h2>Login</h2>
        <div className="mt-6">
          <button
            className="primary-button"
            onClick={() => loginWithGoogle()}
          >
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}
