import { Link, useLocation, useNavigate } from "react-router-dom";
import loginBg from "../../assets/png-shape.png";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";

import { toast } from "react-toastify";
import { authContext } from "../../authProvider/AuthProvider";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
  const { signIn, googleSignIn, setEmail, facebookSignIn } =
    useContext(authContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        navigate(location.state ? location.state : "/");
        toast.success("Login Successfull!");
      })
      .catch(() => {});
  };
  const handlefacebookLogin = () => {
    facebookSignIn()
      .then(() => {
        navigate(location.state ? location.state : "/");
        toast.success("Login Successfull!");
      })
      .catch(() => {});
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        toast.success("Login Successfull!");
        setEmail(email);
        navigate(location.state ? location.state : "/");
        setError("");
      })
      .catch(() => {
        setError("Invalid Username or Password..!");
      });
  };
  return (
    <div
      className="md:h-[604px] mt-16 md:mt-[91px] bg-cover bg-center flex flex-col-reverse md:flex-row justify-center items-center md:gap-10 px-10"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <form onSubmit={handleLogin}>
        <h2 className="font-extrabold text-center text-2xl md:text-3xl">
          Login Your Account
        </h2>
        <div className="my-4">
          <label className="font-medium text-lg">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter Your Email"
            className="input input-bordered input-accent w-full max-w-xs"
            required
          />
        </div>
        <div>
          <label className="font-medium text-lg">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            className="input input-bordered input-accent w-full max-w-xs"
            required
          />
        </div>
        <p className=" mt-2">
          <Link to="/resetPassword" className="text-gray-500">
            Forget password?
          </Link>
        </p>
        <button
          type="submit"
          className="w-full btn bg-primary rounded-md mt-4 text-white py-2 hover:bg-secondary"
        >
          Login
        </button>
        <p className="my-2 text-red-600 text-center">{error}</p>

        <div className="divider divider-info">Or</div>

        <div className="flex justify-center items-center gap-6">
          <button onClick={handleGoogleLogin}>
            <FcGoogle size={30} />
          </button>
          <button className="text-blue-500" onClick={handlefacebookLogin}>
            <FaFacebook size={30} />
          </button>
        </div>

        <h2 className="mt-4 text-center mb-8">
          Don&apos;t have an account?
          <Link
            to="/register"
            className="text-primary font-medium underline ml-2"
          >
            Register
          </Link>
        </h2>
      </form>

      <div className="text-center my-8">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome Back!</h1>
        <h3 className="text-base md:text-xl text-gray-500 mt-4">
          Sign in to unlock personalized features, <br /> exclusive perks, and
          round-the-clock support.
        </h3>
      </div>
    </div>
  );
};

export default Login;
