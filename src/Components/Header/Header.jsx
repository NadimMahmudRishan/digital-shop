import Navbar from "./Navbar";

const Header = () => {
    return (
      <div>
        <section>
          <div
            className="hero min-h-screen flex flex-col justify-center"
            style={{
              backgroundImage:
                "url(https://i.ibb.co.com/8g019s0/Untitled-design.png)",
            }}
          >
            <div className="w-full fixed top-0">
              <Navbar></Navbar>
            </div>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center ">
              <div className="max-w-md my-auto">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Header;