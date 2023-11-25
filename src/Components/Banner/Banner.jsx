import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="mb-[100px]">
      <div className="carousel w-full h-[90vh]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/patient-getting-chemotherapy-treatment_23-2149261069.jpg?w=900&t=st=1700923655~exp=1700924255~hmac=59e0b42b4386543e45354b99cd3fc48470080735702323bf38dc71d4ac221f4f"
            className="w-full"
          />
          <div className="absolute lg:left-[190px] left-[70px]   top-[30%]">
            <h3 className="text-white lg:text-4xl text-2xl mb-3 font-semibold">
              Donate blood,save life !
            </h3>
            <h2 className="text-white lg:text-6xl text-2xl mb-3 font-semibold">
              Your Blood
              <br />
              CAN BRING SMILE
              <br />
              IN OTHER PERSON FACE
            </h2>
            <Link to="/registration">
              <button className="btn bg-[#C6414C] text-white border-none hover:bg-red-500 hover:text-white mr-2">
                Join as a Donor
              </button>
            </Link>

            <Link to="/search_donor">
              <button className="btn bg-[#C6414C] text-white border-none hover:bg-red-500 hover:text-white">
                Search Donor
              </button>
            </Link>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              className="btn btn-circle bg-transparent text-white"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-transparent text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://templates.bwlthemes.com/blood_donation/v_2/images/home_1_slider_1.jpg"
            className="w-full"
          />
          <div className="absolute lg:left-[190px] left-[60px]  top-[30%]">
            <h3 className="text-white lg:text-5xl text-2xl mb-3  font-semibold">
              Donate blood,save life !
            </h3>
            <h2 className="text-white lg:text-7xl text-2xl mb-3 font-semibold">
              Your Blood
              <br />
              CAN BRING SMILE
              <br />
              IN OTHER PERSON FACE
            </h2>
            <Link to="/registration">
              <button className="btn bg-[#C6414C] text-white border-none hover:bg-red-500 hover:text-white mr-2">
                Join as a Donor
              </button>
            </Link>

            <Link to="/search_donor">
              <button className="btn bg-[#C6414C] text-white border-none hover:bg-red-500 hover:text-white">
                Search Donor
              </button>
            </Link>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn btn-circle bg-transparent text-white"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-transparent text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full"
          />
          <div className="absolute lg:left-[190px] left-[70px]    top-[30%]">
            <h3 className="text-white lg:text-5xl text-2xl mb-3  font-semibold">
              Donate blood,save life !
            </h3>
            <h2 className="text-white lg:text-7xl text-2xl mb-3 font-semibold">
              Your Blood
              <br />
              CAN BRING SMILE
              <br />
              IN OTHER PERSON FACE
            </h2>
            <Link to="/registration">
              <button className="btn bg-[#C6414C] text-white border-none hover:bg-red-500 hover:text-white mr-2">
                Join as a Donor
              </button>
            </Link>

            <Link to="/search_donor">
              <button className="btn bg-[#C6414C] text-white border-none hover:bg-red-500 hover:text-white">
                Search Donor
              </button>
            </Link>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn btn-circle bg-transparent text-white"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-transparent text-white"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
