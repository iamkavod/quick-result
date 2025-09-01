import Features from "@/components/homes/home-15/Features";
import Footer from "@/components/layout-ui/Footer";
import Header from "@/components/layout-ui/Header";
import Demoslider from "@/components/preview/Demoslider";
import Hero from "@/components/preview/Hero";
import Testimonials from "./Testimonials";
import WhoCanJoin from "./WhoCanJoin";
import Benefits from "./Benefits";

export const metadata = {
  title:
    "Preview || Sandbox - Modern & Multipurpose React Next.js Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose React Next.js Template with Tailwind CSS",
};

export default function LandingPage() {
  return (
    <>
      <div className="font-space">
        <div className="!bg-[#f0f0f8]">
          <div className="grow shrink-0">
            <Header />
            <section className="wrapper overflow-hidden">
              <Hero />
              {/* /.container */}
              {/* <Demoslider /> */}
              {/* /.swiper-container */}
            </section>
            {/* /section */}
            <section className="wrapper !bg-[#ffffff] angled upper-end lower-end relative border-0 before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-[#fefefe] before:content-[''] before:block before:absolute before:z-0 before:!border-y-transparent before:border-0 before:border-solid before:right-0 after:bottom-[-4rem] after:border-l-transparent after:border-r-[100vw] after:border-b-[4rem] after:border-[#fefefe] after:content-[''] after:block after:absolute after:z-0 after:!border-y-transparent after:border-0 after:border-solid after:right-0">
              <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
                <Features />
              </div>
            </section>

            <Benefits />
            <Testimonials />
            <WhoCanJoin />

            <section id="snippet-4" className="wrapper !bg-[#ffffff]">
              <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
                <div
                  className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-300 !text-white !mt-[-1.25rem] xl:!mt-0 lg:!mt-0 xl:-translate-y-2/4 lg:-translate-y-2/4 !mb-lg-n50p border-radius-lg-top bg-cover bg-[center_center] bg-no-repeat !bg-scroll !relative z-0 !rounded-[0.4rem] before:rounded-[0.4rem] before:bg-[rgba(30,34,40,.4)] before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0"
                  style={{
                    backgroundImage: "url(/assets/img/photos/bg16.png)",
                  }}
                >
                  <div className="card-body !p-10 xl:!p-14">
                    <div className="flex flex-wrap mx-[-15px] !text-center">
                      <div className="xl:w-11/12 xxl:w-9/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                        <h2 className="!text-[0.8rem] !leading-[1.35] uppercase !text-white !mb-3">
                          How To Join
                        </h2>
                        <h3 className="!text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] xl:!text-[2rem] !mb-8 xl:!px-8 lg:!px-8 !text-white">
                          We are{" "}
                          <span className="!relative z-[2] after:content-[''] after:absolute after:z-[-1] after:block after:bg-no-repeat after:bg-bottom after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em] after:-translate-x-2/4 after:left-2/4 style-2 yellow">
                            trusted{" "}
                          </span>
                          by over 5000+ clients. Join them now and grow your
                          business.
                        </h3>
                      </div>
                      {/* /column */}
                    </div>
                    {/* /.row */}
                    <div className="flex justify-center">
                      <span>
                        <a className="btn btn-white rounded">Get Started</a>
                      </span>
                    </div>
                  </div>
                  {/*/.card-body */}
                </div>
                {/*/.card */}
              </div>
              {/* /.container */}

              {/* /.container */}
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
