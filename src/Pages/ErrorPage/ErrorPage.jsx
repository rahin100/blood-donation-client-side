import { Link } from "react-router-dom";
import "./ErrorPage.css"

const ErrorPage = () => {
  return (
    
    <div>
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center text-red-500">404</h1>
                </div>

                <div className="content_box_404">
                  <h3 className="text-4xl font-semibold">Look like you are lost</h3>

                  <p className="text-5xl font-semibold">the page you are looking for not available!</p>

                  <Link
                  to={`/`}
                  className="btn btn-outline btn-error mt-6"
                >
                  Go To Home
                </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
