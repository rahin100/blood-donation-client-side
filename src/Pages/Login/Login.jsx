import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Container from "../../Components/Container/Container";
import Lottie from "lottie-react";
import signUp from "../../assets/signUp.json";
import Swal from "sweetalert2";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";


const Login = () => {
  // const axiosSecure = useAxiosSecure()

  const { signIn} = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  
    try {
        const user = await signIn(email, password);
        console.log(user);
        form.reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500
        });
        navigate(location?.state ? location.state : "/");
  
      } catch (error) {
        console.error(error.message);
      }
    };
  


  return (
    <Container>
      <div className="lg:flex md:flex-row">
        <div className=" flex-1 min-h-screen p-4 md:p-0">
          <div className=" flex flex-col items-center">
            <h1 className="text-3xl md:text-5xl font-bold text-[#ea062b] text-center md:text-left mt-[20px] mb-[20px]">
              Login now!
            </h1>
            <div className="w-full md:max-w-sm">
              <div className="card shadow-lg bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="input input-bordered"
                      required
                    />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-4 md:mt-6">
                    <button className="btn bg-[#ea062b] text-white w-full md:w-auto">
                      Login
                    </button>
                  </div>
                  <p className="text-xs md:text-sm font-light text-gray-500 dark:text-gray-400 text-center md:text-left mt-4">
                    Do not have an account yet?{" "}
                    <Link
                      to="/registration"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      <button className="btn bg-[#ea062b] text-white  btn-sm ml-2 md:ml-4">
                        Sign Up
                      </button>
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
        <section className="flex-1">
            <div>
              <Lottie animationData={signUp}></Lottie>
            </div>
          </section>
      </div>
    </Container>
  );
};

export default Login;
