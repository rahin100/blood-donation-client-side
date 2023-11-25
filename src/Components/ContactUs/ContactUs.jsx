import Container from "../Container/Container";

const ContactUs = () => {
  return (
    <Container>
      <div className="mb-[100px] ">
        <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold mb-[25px] text-center text-[#ea062b]">
          Contact Us
        </h2>
        <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-8">
          {/* first div  */}
          <div className="lg:col-span-5 md:col-span-6 col-span-6">
            <div className="border-2 p-4">
              <h4 className="text-2xl font-medium mb-1">Address</h4>
              <p className="lg:text-xl font-semibold">
                PO Box 1212, California, US
              </p>
            </div>
            <div className="border-x-2 p-4">
              <h4 className="text-2xl font-medium mb-1">E-mails</h4>
              <p className="lg:text-xl md:text-[18px] text-[12px] font-semibold">
                bloodharbor@gmail.com
              </p>
            </div>
            <div className="border-2 p-4">
              <h4 className="text-2xl font-medium mb-1">Phone</h4>
              <p className="lg:text-xl font-semibold">+61 1111 3334</p>
            </div>
          </div>
          {/* second div  */}
          <div className="lg:col-span-7 md:col-span-6 col-span-6">
            <div>
              <form>
                {/* line 1 */}
                <div className="flex gap-5 mb-7">
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered w-full max-w-lg"
                  />
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered w-full max-w-lg"
                  />
                </div>
                {/* line 2 */}
                <div className="flex gap-5 mb-7">
                  <input
                    type="text"
                    placeholder="subject"
                    className="input input-bordered w-full max-w-lg"
                  />
                  <input
                    type="phone"
                    placeholder="phone"
                    className="input input-bordered w-full max-w-lg"
                  />
                </div>
                {/* line 3 */}
                <div>
                  <textarea
                    placeholder="Message"
                    className="textarea textarea-bordered textarea-lg w-full max-w-4xl mb-3 h-[145px]"
                  ></textarea>
                </div>
                <button className="btn bg-[#ea062b] text-white border-none hover:bg-black hover:text-white mr-2">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
