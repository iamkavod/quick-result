import Counter from "@/components/common/Counter";
import WhoCanJoin from "./WhoCanJoin";
import Benefits from "./Benefits";
import Header from "@/components/layout-ui/Header";
import Footer from "@/components/layout-ui/Footer";

export const metadata = {
  title:
    "Projects || Sandbox - Modern & Multipurpose React Next.js Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose React Next.js Template with Tailwind CSS",
};
export default function MembershipPage1() {
  return (
    <>
      <div className="grow shrink-0">
        <Header />

        <section className="wrapper !bg-[#edf2fc]">
          <div className="container pt-10 pb-40 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] xl:pb-[17.5rem] lg:pb-[17.5rem] md:pb-[17.5rem] !text-center">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xl:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !mb-6">
                <h1 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !mb-3">
                  Our Membership
                </h1>
                <p className="lead text-[0.9rem] font-medium !leading-[1.65] !mb-0">
                  Rapid progress for members, stakeholders and team
                </p>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>

        <WhoCanJoin />

        <section id="snippet-1" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-0 !mt-[-50px] items-center">
              <div className="xl:w-6/12 lg:w-6/12 flex-[0_0_auto] xl:px-0 lg:px-0 !px-[15px] !mt-[50px] max-w-full xl:!order-2 xl:!ml-[8.33333333%] lg:!order-2 lg:!ml-[8.33333333%] grid">
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px] items-center counter-wrapper isotope">
                  <div className="item xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                    <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                      <div className="card-body flex-[1_1_auto] pb-4 xl:!p-[2rem_2.5rem_1.25rem] lg:!p-[2rem_2.5rem_1.25rem] md:!p-[2rem_2.5rem_1.25rem]">
                        <div className="flex lg:block xl:!flex flex-row">
                          <div>
                            <div className="icon btn btn-circle btn-lg btn-soft-purple pointer-events-none !mx-auto !mr-4 lg:!mb-3 xl:!mb-0 xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]">
                              <i className="uil uil-presentation-check before:content-['ec66']" />
                            </div>
                          </div>
                          <div>
                            <h3 className="counter !mb-1 xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none">
                              <Counter max={7518} />
                            </h3>
                            <p className="!mb-0">Projects Done</p>
                          </div>
                        </div>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.card */}
                  </div>
                  {/*/column */}
                  <div className="item xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                    <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                      <div className="card-body flex-[1_1_auto] pb-4 xl:!p-[2rem_2.5rem_1.25rem] lg:!p-[2rem_2.5rem_1.25rem] md:!p-[2rem_2.5rem_1.25rem]">
                        <div className="flex lg:block xl:!flex flex-row">
                          <div>
                            <div className="icon btn btn-circle btn-lg btn-soft-red pointer-events-none !mx-auto !mr-4 lg:!mb-3 xl:!mb-0 xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]">
                              <i className="uil uil-users-alt before:content-['ed70']" />
                            </div>
                          </div>
                          <div>
                            <h3 className="counter !mb-1 xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none">
                              <Counter max={3472} />
                            </h3>
                            <p className="!mb-0">Happy Customers</p>
                          </div>
                        </div>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.card */}
                  </div>
                  {/*/column */}
                  <div className="item xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                    <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                      <div className="card-body flex-[1_1_auto] pb-4 xl:!p-[2rem_2.5rem_1.25rem] lg:!p-[2rem_2.5rem_1.25rem] md:!p-[2rem_2.5rem_1.25rem]">
                        <div className="flex lg:block xl:!flex flex-row">
                          <div>
                            <div className="icon btn btn-circle btn-lg btn-soft-yellow pointer-events-none !mx-auto !mr-4 lg:!mb-3 xl:!mb-0 xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]">
                              <i className="uil uil-user-check before:content-['ed65']" />
                            </div>
                          </div>
                          <div>
                            <h3 className="counter !mb-1 xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none">
                              <Counter max={4537} />
                            </h3>
                            <p className="!mb-0">Expert Employees</p>
                          </div>
                        </div>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.card */}
                  </div>
                  {/*/column */}
                  <div className="item xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                    <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                      <div className="card-body flex-[1_1_auto] pb-4 xl:!p-[2rem_2.5rem_1.25rem] lg:!p-[2rem_2.5rem_1.25rem] md:!p-[2rem_2.5rem_1.25rem]">
                        <div className="flex lg:block xl:!flex flex-row">
                          <div>
                            <div className="icon btn btn-circle btn-lg btn-soft-aqua pointer-events-none !mx-auto !mr-4 lg:!mb-3 xl:!mb-0 xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]">
                              <i className="uil uil-trophy before:content-['ed4f']" />
                            </div>
                          </div>
                          <div>
                            <h3 className="counter !mb-1 xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none">
                              <Counter max={2184} />
                            </h3>
                            <p className="!mb-0">Awards Won</p>
                          </div>
                        </div>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.card */}
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
              </div>
              {/*/column */}
              <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:px-0 lg:px-0 !px-[15px] !mt-[50px] max-w-full">
                <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3">
                  Join Us
                </h2>
                <p className="lead !text-[1.05rem] !leading-[1.6] font-medium">
                  We have considered our business solutions to support you on
                  every stage of your growth.
                </p>
                <p className="!mb-0">
                  Integer posuere erat a ante venenatis dapibus posuere velit
                  aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum
                  at eros. Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.Members hip hop
                </p>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/* /.container */}

          {/* /.container */}
        </section>

        <Benefits />
        
      </div>
      <section id="snippet-4" className="wrapper !bg-[#ffffff]">
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <div
            className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-300 !text-white !mt-[-1.25rem] xl:!mt-0 lg:!mt-0 xl:-translate-y-2/4 lg:-translate-y-2/4 !mb-lg-n50p border-radius-lg-top bg-cover bg-[center_center] bg-no-repeat !bg-scroll !relative z-0 !rounded-[0.4rem] before:rounded-[0.4rem] before:bg-[rgba(30,34,40,.4)] before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0"
            style={{ backgroundImage: "url(/assets/img/photos/bg16.png)" }}
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
                    by over 5000+ clients. Join them now and grow your business.
                  </h3>
                </div>
                {/* /column */}
              </div>
              {/* /.row */}
              <div className="flex justify-center">
                <span>
                  <a className="btn btn-white rounded">Start Application</a>
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
      <Footer />
    </>
  );
}
