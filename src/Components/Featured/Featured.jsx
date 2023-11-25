import Container from "../Container/Container";

const Featured = () => {
  return (
    <Container>
      <div className="grid cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-[80px]" >
        {/* div 1 */}
        <div className="card  bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://innovativeartisan.com/demo/html/blad-ai/assets/images/r1.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Become a Donate</h2>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give
            </p>
            <div className="card-actions">
              <button className="btn bg-[#ea062b] text-white border-none hover:bg-black hover:text-white mr-2">
                Read More
              </button>
            </div>
          </div>
        </div>
        {/* div 2 */}
        <div className="card  bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://innovativeartisan.com/demo/html/blad-ai/assets/images/r2.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Why give blood?</h2>
            <p>Every drop of blood donated has the power to save lives and make a difference in someones journey toward recovery.</p>
            <div className="card-actions">
            <button className="btn bg-[#ea062b] text-white border-none hover:bg-black hover:text-white mr-2">
                Read More
              </button>
            </div>
          </div>
        </div>
        {/* div 3 */}
        <div className="card  bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://innovativeartisan.com/demo/html/blad-ai/assets/images/r3.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">How donations help?</h2>
            <p>Your generous blood donations play a crucial role in transforming lives and building a healthier community.</p>
            <div className="card-actions">
            <button className="btn bg-[#ea062b] text-white border-none hover:bg-black hover:text-white mr-2">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Featured;
