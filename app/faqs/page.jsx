import Footer from "@/components/layout-ui/Footer";
import Header from "@/components/layout-ui/Header";

export const metadata = {
  title:
    "Projects || Sandbox - Modern & Multipurpose React Next.js Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose React Next.js Template with Tailwind CSS",
};
export default function FaqsPage() {
  return (
    <>
      <div className="grow shrink-0">
        <Header />

        <section className="wrapper !bg-[#edf2fc]">
          <div className="container pt-10 pb-40 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] xl:pb-[17.5rem] lg:pb-[17.5rem] md:pb-[17.5rem] !text-center">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xl:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !mb-6">
                <h1 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !mb-3">
                  Resources
                </h1>
                <p className="lead text-[0.9rem] font-medium !leading-[1.65] !mb-0">
                  Frequently Asked Questions
                </p>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>
      </div>
      <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <section id="snippet-2" className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px]">
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px] !mb-0">
                <h2 className="!text-[.75rem] uppercase !text-[#3f78e0] !tracking-[0.02rem] !leading-[1.35] !mb-3">
                  FAQ
                </h2>
                <h3 className="!text-[calc(1.285rem_+_0.42vw)] font-bold xl:!text-[1.6rem] !leading-[1.3] !mb-4">
                  If you don't see an answer to your question, you can send us
                  an email from our contact form.
                </h3>
                <p className="lead text-[0.9rem] font-medium !leading-[1.65] !mb-6">
                  Learn more about Quick Result MPCS and how we can help you achieve your financial goals.
                </p>
                <Link
                  href="/membership"
                  className="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                >
                  Join Us
                </Link>
              </div>
              {/*/column */}
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
                <div id="accordion-3" className="accordion-wrapper">
                  <div className="card accordion-item !mb-5">
                    <div
                      className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                      id="accordion-heading-3-1"
                    >
                      <button
                        className="hover:!text-[#3f78e0] collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-collapse-3-1"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-3-1"
                      >
                        What services and products does Quick Result MPCS offer?
                      </button>
                    </div>
                    {/* /.card-header */}
                    <div
                      id="accordion-collapse-3-1"
                      className="collapse"
                      aria-labelledby="accordion-heading-3-1"
                      data-bs-target="#accordion-3"
                    >
                      <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                        <p>
                          Quick Result MPCS offers a wide range of services including quick loans for members, daily, weekly, monthly, long-term monthly target, mega, and birthday contributions. We also facilitate Food & Agro wealth, Lands & Housing, Automobile Car, Household & Special Items, Electronics & Digital gadgets, Education, and Travel & Vacation contributions.
                        </p>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.collapse */}
                  </div>
                  {/* /.card */}
                  <div className="card accordion-item !mb-5">
                    <div
                      className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                      id="accordion-heading-3-2"
                    >
                      <button
                        className="hover:!text-[#3f78e0] collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-collapse-3-2"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-3-2"
                      >
                        Who is eligible to join Quick Result MPCS?
                      </button>
                    </div>
                    {/* /.card-header */}
                    <div
                      id="accordion-collapse-3-2"
                      className="collapse"
                      aria-labelledby="accordion-heading-3-2"
                      data-bs-target="#accordion-3"
                    >
                      <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                        <p>
                          Membership is open to individuals aged 18 and above, including workers, entrepreneurs, students, farmers, market men and women, traders, ladies & gentlemen, CEOs, and those in the upper and middle class.
                        </p>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.collapse */}
                  </div>
                  {/* /.card */}
                  <div className="card accordion-item !mb-5">
                    <div
                      className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                      id="accordion-heading-3-3"
                    >
                      <button
                        className="hover:!text-[#3f78e0] collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-collapse-3-3"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-3-3"
                      >
                        What are the benefits of joining Quick Result MPCS?
                      </button>
                    </div>
                    {/* /.card-header */}
                    <div
                      id="accordion-collapse-3-3"
                      className="collapse"
                      aria-labelledby="accordion-heading-3-3"
                      data-bs-target="#accordion-3"
                    >
                      <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                        <p>
                          Members gain access to quick loans, start-up and scale-up funds, food and agro wealth, lands and housing, birthday and milestone celebration proceeds, phones and laptops, household items, travel fares and vacation, semi-project financing, and assistance with house rents & mortgages.
                        </p>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.collapse */}
                  </div>
                  {/* /.card */}
                  <div className="card accordion-item !mb-5">
                    <div
                      className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                      id="accordion-heading-3-4"
                    >
                      <button
                        className="hover:!text-[#3f78e0] collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-collapse-3-4"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-3-4"
                      >
                        How does Quick Result MPCS support its members?
                      </button>
                    </div>
                    {/* /.card-header */}
                    <div
                      id="accordion-collapse-3-4"
                      className="collapse"
                      aria-labelledby="accordion-heading-3-4"
                      data-bs-target="#accordion-3"
                    >
                      <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                        <p>
                          We support and collaborate to improve the lives of our clients and the growth of their businesses. We prioritize value enhancement, long-term relationships with fair terms, and strive to build a society that motivates and inspires all to achieve their full potential.
                        </p>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.collapse */}
                  </div>
                  {/* /.card */}
                </div>
                {/* /.accordion-wrapper */}
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/* /.container */}

          {/* /.container */}
        </section>
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
      <Footer />
    </>
  );
}
