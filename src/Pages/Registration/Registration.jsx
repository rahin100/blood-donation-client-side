/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Container from "../../Components/Container/Container";
import Lottie from "lottie-react";
import signUp from "../../assets/signUp.json";

const Registration = () => {
  const [dis, setDis] = useState([]);
  const [upozilas, setUpozilas] = useState([]);
  useEffect(() => {
    fetch("./dhakadistrict.json")
      .then((res) => res.json())
      .then((data) => setDis(data));
  }, []);

  useEffect(() => {
    fetch("./dhakaupazilas.json")
      .then((res) => res.json())
      .then((data) => setUpozilas(data));
  }, []);

  console.log(upozilas);

  console.log(dis);
  const { createUser, googleLogin, handleUpdateProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(name, photo, email, password, confirmPassword);

    createUser(email, password)
      .then((res) => {
        console.log(res);
        handleUpdateProfile(name, photo).then(() => {
          toast.success("User Created Successfully");
          navigate("/");
          form.reset();
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleSocialLogin = (media) => {
    media()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <div className="registration-background">
        <div className="lg:flex md:flex-row">
          <div className="flex-1">
            <div className="bg-white mb-[50px]">
              <div className="flex-col ">
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl font-bold mt-[20px] mb-[20px]">
                    Registration Here !!
                  </h1>
                </div>
                <div className="card flex-shrink-0 max-w-full shadow-2xl bg-base-100">
                  <form onSubmit={handleSignUp} className="card-body">
                    {/* 1st row  */}
                    <div className="lg:flex md:flex flex-row gap-5">
                      <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                          <span className="label-text">Photo URL</span>
                        </label>
                        <input
                          type="text"
                          name="photo"
                          placeholder="photo URL"
                          className="input input-bordered"
                          required
                        />
                      </div>
                    </div>
                    {/* 2nd row */}
                    <div className="lg:flex md:flex flex-row  gap-5">
                      <div className="form-control md:w-1/2 lg:ml-4">
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
                      <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                          <span className="label-text">Blood Group</span>
                        </label>
                        <label className="input-group">
                          <select
                            name="type"
                            className="select select-bordered w-full"
                          >
                            <option value="type">Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                          </select>
                        </label>
                      </div>
                    </div>
                    {/* 3rd row  */}
                    <div className="lg:flex md:flex flex-row  gap-5">
                      {/* district  */}
                      <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                          <span className="label-text">District</span>
                        </label>
                        <label className="input-group">
                          <select
                            name="type"
                            className="select select-bordered w-full"
                          >
                            <option value="type">District</option>
                            {dis.map((singleDis) => (
                              <option value="type" key={singleDis.id}>
                                {singleDis.bn_name}
                              </option>
                            ))}
                            <option value="type"></option>
                          </select>
                        </label>
                      </div>
                      {/* upazila  */}
                      <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                          <span className="label-text">Upazila</span>
                        </label>
                        <label className="input-group">
                          <select
                            name="type"
                            className="select select-bordered w-full"
                          >
                            <option value="type">Upazila</option>
                            {upozilas.map((singleUpozila) => (
                              <option value="type" key={singleUpozila.id}>
                                {singleUpozila.bn_name}
                              </option>
                            ))}
                            <option value="type"></option>
                          </select>
                        </label>
                      </div>
                    </div>

                    {/* 4th row */}
                    <div className="lg:flex md:flex flex-row  gap-5">
                      <div className="form-control md:w-1/2 lg:ml-4">
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
                      </div>
                      <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                          <span className="label-text">Confirm Password</span>
                        </label>
                        <input
                          type="password"
                          name="confirmPassword"
                          placeholder="confirm password"
                          className="input input-bordered"
                          required
                        />
                        <label className="label">
                          <a
                            href="#"
                            className="label-text-alt link link-hover"
                          >
                            Forgot password?
                          </a>
                        </label>
                      </div>
                    </div>

                    <div className="form-control mt-6">
                      <button className="btn bg-[#ea062b] text-white">
                        SignUp
                      </button>
                    </div>
                    <p className="text-[14px] font-light text-gray-500 dark:text-gray-400">
                      Already have an account yet?{" "}
                      <Link
                        to="/login"
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        <button className="btn btn-active btn-link">
                          Login
                        </button>
                      </Link>
                    </p>
                    <div>
                      <p className="text-[14px] font-light text-gray-500 dark:text-gray-400">
                        Continue With
                        <button
                          onClick={() => handleSocialLogin(googleLogin)}
                          className="btn bg-[#ea062b] text-white btn-sm ml-[10px]"
                        >
                          Google
                        </button>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* add humans */}
          <section className="flex-1">
            <div>
              <Lottie animationData={signUp}></Lottie>
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
};

export default Registration;
