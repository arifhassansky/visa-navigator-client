import { FcGoogle } from "react-icons/fc";
import loginBg from "../../assets/png-shape.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { authContext } from "../../authProvider/AuthProvider";
import { toast } from "react-toastify";
const Register = () => {
  const { createUser, googleSignIn, setEmail, updateUserProfile } =
    useContext(authContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        toast.success("Register Successfull!");
        navigate("/");
      })
      .catch(() => {});
  };

  const handleForm = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError("Password does not match requirements");
      return;
    }

    createUser(email, password)
      .then(() => {
        toast("Registration Successfull!");
        setEmail(email);
        updateUserProfile({
          displayName: name,
          photoURL: photo,
        });
        navigate("/");
        setError("");
      })
      .catch(() => {});
  };

  return (
    <div
      className="md:h-[604px] bg-cover bg-center flex flex-col-reverse md:flex-row justify-center items-center gap-10  px-10"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div>
        <h2 className="font-extrabold text-2xl md:text-3xl lg::text-5xl mb-4 md:mb-6 text-center ">
          Register Your Account
        </h2>

        <form className="md:grid grid-cols-2 gap-x-4" onSubmit={handleForm}>
          <div className="my-2">
            <label className="font-medium text-lg">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="input input-bordered input-accent w-full max-w-xs"
              required
            />
          </div>
          <div className="my-2">
            <label className="font-medium text-lg">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="Enter Your Photo URL"
              className="input input-bordered input-accent w-full max-w-xs"
              required
            />
          </div>
          <div className="my-2">
            <label className="font-medium text-lg">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="input input-bordered input-accent w-full max-w-xs"
              required
            />
          </div>
          <div className="my-2">
            <label className="font-medium text-lg ">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="input input-bordered input-accent w-full max-w-xs"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full col-span-2 btn bg-primary rounded-md mt-6 text-white py-2 hover:bg-secondary"
          >
            Register
          </button>
          <p className="mt-2 text-red-600">{error}</p>
        </form>
        <div>
          <div className="divider divider-info">or</div>
          <button
            onClick={handleGoogleLogin}
            className="bg-secondary btn hover:bg-primary text-white px-8 py-3 rounded-lg flex items-center justify-center w-full gap-2 "
          >
            <FcGoogle size={20} />
            Register With Google
          </button>
          <h2 className="mt-4 text-center mb-8">
            Already have an account?
            <Link to="/login" className="text-primary font-medium underline">
              Login
            </Link>
          </h2>
        </div>
      </div>
      <div className="text-center my-8 md:my-0">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
          Join Us Today!
        </h1>
        <h3 className="text-base md:text-xl text-gray-500 mt-4">
          Create your account to start exploring amazing features,{" "}
          <br className="hidden lg:block" />
          connect with a vibrant community, and access exclusive benefits.
        </h3>
      </div>
    </div>
  );
};

export default Register;
