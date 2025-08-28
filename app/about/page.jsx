import Team from "@/components/about/Team";
import { companyInfo } from "@/data/companyinfo";
import Image from "next/image";
import Header from "@/components/layout-ui/Header";
import Footer from "@/components/layout-ui/Footer";

export const metadata = {
  title:
    "About 02 || Sandbox - Modern & Multipurpose React Next.js Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose React Next.js Template with Tailwind CSS",
};
export default function AboutPage() {
  return (
    <>
      <div className="grow shrink-0">
        <Header />
        <section className="wrapper !bg-[#edf2fc]">
          <div className="container pt-10 pb-40 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] xl:pb-[17.5rem] lg:pb-[17.5rem] md:pb-[17.5rem] !text-center">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xl:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !mb-6">
                <h1 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !mb-3">
                 About Us
                </h1>
                <p className="lead text-[0.9rem] font-medium !leading-[1.65] !mb-0">
                  Enriching lives
                </p>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>

        <section
          id="snippet-1"
          className="wrapper !bg-[#ffffff]  border-b-[rgba(164,174,198,0.2)] border-b border-solid"
        >
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
              <div className="md:w-8/12 lg:w-6/12 xl:w-5/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px] xl:!order-2 lg:!order-2 !relative">
                <div
                  className="shape !bg-[#edf2fc] !rounded-[50%] rellax !w-[10rem] !h-[10rem] absolute z-[1]"
                  data-rellax-speed={1}
                  style={{ top: "-2rem", right: "-1.9rem" }}
                />
                <figure className="!rounded-[.4rem] z-[2] relative">
                  <img
                    className="!rounded-[.4rem] "
                    src="../../assets/img/photos/about7.jpg"
                    srcSet="../../assets/img/photos/about7@2x.jpg 2x"
                    alt="image"
                  />
                </figure>
              </div>
              {/*/column */}
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
                <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3">
                  Who Are We?
                </h2>
                <p className="lead !text-[1.05rem] !leading-[1.6] font-medium">
                  We are a digital and branding company that believes in the
                  power of creative strategy and along with great design.
                </p>
                <p className="!mb-6">
                  Quick Result MPCS was founded in 2004 by eight women,
                  initially as 'Ladies Seal Multipurpose Cooperative'. It
                  expanded to include men and friends, growing significantly
                  after 2016. During the 2020 COVID-19 pandemic, it innovated by
                  offering quick loans and new contribution schemes for Food,
                  Housing, and Lands.
                </p>
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-25px] !mt-[-30px]">
                  <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[25px] !px-[15px] max-w-full !mt-[30px]">
                    <div className="flex flex-row">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/target.svg"
                          className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  !mr-4"
                        >
                          <circle
                            className="lineal-fill"
                            cx="283.8"
                            cy="283.8"
                            r={143}
                          />
                          <path
                            className="lineal-stroke"
                            d="M283.8 441.8c-87.1 0-158-70.9-158-158s70.9-158 158-158 158 70.9 158 158-70.9 158-158 158zm0-286.1c-70.7 0-128.1 57.3-128.1 128.1S213 411.9 283.8 411.9s128.1-57.3 128.1-128.1c-.1-70.7-57.4-128-128.1-128.1z"
                          />
                          <path
                            className="lineal-fill"
                            d="M283.8 210.5c40.5 0 73.3 32.8 73.3 73.3s-32.8 73.3-73.3 73.3-73.3-32.8-73.3-73.3"
                          />
                          <path
                            className="lineal-stroke"
                            d="M283.8 372.1c-48.7-.1-88.2-39.5-88.2-88.3.2-8.2 7.1-14.8 15.3-14.5 7.9.2 14.3 6.6 14.5 14.5 0 32.2 26.1 58.4 58.4 58.4s58.4-26.1 58.4-58.4-26.1-58.4-58.4-58.4c-8.2-.2-14.8-7.1-14.5-15.3.2-7.9 6.6-14.3 14.5-14.5 48.7-.5 88.7 38.6 89.2 87.3s-38.6 88.7-87.3 89.2h-1.9z"
                          />
                          <path
                            className="lineal-fill"
                            d="M107.9 55.1l-5.3 47.5-47.5 5.3-40.2-40.1 52.9-52.9z"
                          />
                          <path
                            className="lineal-stroke"
                            d="M283.8 55.7c-55.3 0-108.8 20.1-150.4 56.7l-15.2-15.2 4.5-40.4c.5-4.5-1.1-9-4.3-12.2L78.3 4.4c-5.8-5.8-15.3-5.8-21.1 0L4.4 57.2c-5.8 5.8-5.8 15.3 0 21.1l40.1 40.1c2.8 2.8 6.6 4.4 10.6 4.4.5 0 1.1 0 1.6-.1l40.4-4.5 15.2 15.2c-36.6 41.5-56.7 95-56.7 150.4C55.7 409.6 158 512 283.8 512c66.2 0 129.1-28.7 172.4-78.7 5.6-6.1 5.1-15.6-1-21.1s-15.6-5.1-21.1 1l-.5.5c-37.7 43.4-92.3 68.4-149.8 68.4-109.3 0-198.3-89-198.3-198.3 0-47.4 17-93.3 48-129.2l140.2 140.2c5.8 5.8 15.3 5.8 21.1 0s5.8-15.3 0-21.1L154.6 133.5c35.9-31 81.8-48 129.2-48 109.4 0 198.3 89 198.3 198.3 0 8.3 6.7 14.9 14.9 14.9s14.9-6.7 14.9-14.9C512 158 409.6 55.7 283.8 55.7zM36.1 67.8l31.7-31.7 24.5 24.5-3.2 28.5-28.5 3.2-24.5-24.5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="!mb-1">Our Mission</h4>
                        <p className="!mb-0">
                          To connect individuals and groups to funds providing
                          solutions that adds value to the life’s of our members
                          and stakeholders.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*/column */}
                  <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[25px] !px-[15px] max-w-full !mt-[30px]">
                    <div className="flex flex-row">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 409.6 404.7"
                          data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/award-2.svg"
                          className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  !mr-4"
                        >
                          <path
                            className="lineal-stroke"
                            d="M90.8 404.7c-6.5 0-12.4-4-14.7-10.1L57.7 347 10 328.7c-8.1-3.1-12.2-12.2-9-20.4.8-2 2-3.9 3.5-5.5l93.6-93.6 97.3 97.3-93.6 93.6c-2.9 2.9-6.9 4.6-11 4.6zm-60.7-93.8l39.5 15.2c4.1 1.6 7.4 4.9 9 9l15.2 39.5 68.1-68.1-63.7-63.7-68.1 68.1zm288.7 93.8c-4.2 0-8.2-1.7-11.1-4.6l-20.8-20.8 16.8-16.8 12.1 12.1 15.2-39.5c1.6-4.1 4.9-7.4 9-9l39.4-15.2-76.4-76.5 16.8-16.8 85.2 85.2c6.1 6.1 6.1 16.1 0 22.3-1.6 1.6-3.4 2.8-5.5 3.6L351.9 347l-18.3 47.6c-1.9 5-6.2 8.7-11.4 9.8-1.1.2-2.2.3-3.4.3z"
                          />
                          <path
                            className="lineal-fill"
                            d="M347.3 224.1c5.1-15.7 31-28.9 31-46.3s-25.9-30.6-31-46.3c-5.3-16.3 7.8-42.2-2.1-55.7s-38.6-9.2-52.4-19.2-18-38.6-34.4-43.9C242.7 7.6 222.2 28 204.8 28s-37.9-20.4-53.6-15.3c-16.3 5.3-20.8 34-34.4 43.9s-42.4 5.5-52.4 19.2 3.2 39.4-2.1 55.7c-5.1 15.7-31.1 28.8-31.1 46.3s25.9 30.6 31 46.3c5.3 16.3-7.8 42.1 2.1 55.7S103 289 116.7 299s18.1 38.6 34.4 43.9c15.7 5.1 36.2-15.3 53.6-15.3s37.9 20.4 53.6 15.3c16.3-5.3 20.8-34 34.4-43.9s42.4-5.5 52.4-19.2-3.1-39.3 2.2-55.7zm-142.5 48.7c-52.5 0-95-42.5-95-95s42.5-95 95-95 95 42.5 95 95-42.5 95-95 95z"
                          />
                          <path
                            className="lineal-stroke"
                            d="M253 355.7c-10.1 0-19.6-4.6-28.8-9.1-7-3.4-14.3-7-19.4-7s-12.4 3.6-19.4 7c-9.2 4.5-18.7 9.1-28.8 9.1-3.1 0-6.2-.5-9.1-1.4-13.7-4.5-20.7-17.6-26.8-29.2-3.5-6.7-7.2-13.6-10.9-16.3s-11.6-4.2-19.2-5.5c-12.8-2.2-27.4-4.8-35.8-16.3s-6.3-26-4.5-38.8c1.1-7.6 2.2-15.6.7-20.2-1.4-4.2-6.7-9.8-11.9-15.1-9.2-9.5-19.7-20.2-19.7-34.9s10.5-25.4 19.7-34.9c5.2-5.3 10.6-10.8 12-15.1 1.5-4.7.4-12.6-.7-20.2C48.6 95 46.5 80.4 54.8 69s23-14.1 35.8-16.3c7.5-1.3 15.3-2.7 19.2-5.5s7.4-9.6 10.9-16.3c6.1-11.6 13.1-24.8 26.8-29.2 2.9-1 6-1.4 9.1-1.4 10.1 0 19.6 4.6 28.8 9.1 7 3.4 14.3 7 19.4 7s12.4-3.6 19.4-7C233.4 4.6 243 0 253 0c3.1 0 6.2.5 9.1 1.4 13.7 4.5 20.7 17.6 26.8 29.2 3.5 6.7 7.2 13.6 10.9 16.3s11.6 4.2 19.2 5.5c12.9 2.2 27.4 4.8 35.8 16.3s6.3 26 4.5 38.8c-1.1 7.6-2.2 15.6-.7 20.2 1.4 4.2 6.7 9.8 11.9 15.1 9.2 9.5 19.7 20.2 19.7 34.9s-10.5 25.4-19.7 34.9c-5.2 5.3-10.6 10.9-11.9 15.1-1.5 4.7-.4 12.6.7 20.2 1.8 12.9 3.9 27.4-4.5 38.8s-23 14.1-35.8 16.3c-7.5 1.3-15.3 2.7-19.2 5.5s-7.4 9.6-10.9 16.3c-6.1 11.6-13.1 24.8-26.8 29.2-2.9 1.2-6 1.7-9.1 1.7zm-48.2-39.9c10.6 0 20.4 4.8 29.8 9.4 6.8 3.3 13.8 6.7 18.4 6.7.6 0 1.2-.1 1.7-.2 4.5-1.5 9.1-10.1 13.1-17.8 4.8-9.1 9.8-18.5 18-24.5s18.9-7.9 29.1-9.7c8.4-1.5 18-3.1 20.7-6.9s1.3-13.2.1-21.6c-1.4-10.3-2.9-21 .3-30.8 3.1-9.5 10.4-17 17.5-24.3 6.1-6.2 13-13.3 13-18.3s-6.9-12.1-13-18.3c-7.1-7.3-14.4-14.8-17.5-24.3-3.2-9.9-1.7-20.5-.3-30.8 1.2-8.4 2.5-17.9-.1-21.6s-12.3-5.4-20.7-6.9c-10.2-1.8-20.8-3.6-29.1-9.7s-13.2-15.4-18-24.5c-4-7.6-8.6-16.3-13.1-17.8-.6-.2-1.2-.3-1.8-.2-4.6 0-11.6 3.4-18.4 6.7-9.5 4.6-19.3 9.4-29.8 9.4s-20.4-4.8-29.8-9.4c-6.8-3.3-13.8-6.7-18.4-6.7-.6 0-1.2.1-1.8.2-4.5 1.5-9.1 10.1-13.1 17.8-4.8 9.1-9.8 18.5-18 24.5s-18.9 7.9-29.1 9.7c-8.4 1.5-18 3.2-20.7 6.9s-1.3 13.2-.1 21.6c1.4 10.3 2.9 21-.3 30.8-3.1 9.5-10.4 17-17.5 24.3-6 6.2-12.9 13.3-12.9 18.3s6.9 12.1 13 18.3c7.1 7.3 14.4 14.8 17.5 24.3 3.2 9.9 1.7 20.5.3 30.8-1.2 8.4-2.5 17.9.1 21.6s12.3 5.4 20.7 6.9c10.2 1.8 20.8 3.6 29.1 9.7s13.2 15.4 18 24.5c4 7.6 8.6 16.3 13.1 17.7.6.2 1.2.3 1.8.2 4.6 0 11.6-3.4 18.4-6.7 9.5-4.6 19.3-9.3 29.8-9.3z"
                          />
                          <path
                            className="lineal-stroke"
                            d="M204.8 284.7c-59 0-106.9-47.9-106.9-106.9 0-59 47.9-106.9 106.9-106.9 59 0 106.9 47.8 106.9 106.8v.1c-.1 59-47.9 106.9-106.9 106.9zm0-190c-45.9 0-83.2 37.2-83.2 83.1 0 45.9 37.2 83.2 83.1 83.2 45.9 0 83.2-37.2 83.2-83.1 0-25.8-12-50.1-32.4-65.9-14.4-11.2-32.3-17.3-50.7-17.3z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="!mb-1">Our Vision</h4>
                        <p className="!mb-0">
                          To be the Multipurpose Cooperative of Choicr.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/* /.container */}

          {/* /.container */}
        </section>

        <section id="snippet-5" className="wrapper !bg-[#ffffff]  ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
              <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full xl:!order-2 lg:!order-2">
                <figure className="m-0 p-0">
                  <Image
                    className="w-auto"
                    srcSet="/assets/img/illustrations/i2@2x.png 2x"
                    alt="image"
                    src="/assets/img/illustrations/i2.png"
                    width={800}
                    height={538}
                  />
                </figure>
              </div>
              {/*/column */}
              <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
                <h2 className="!text-[.75rem] uppercase text-line relative align-top !pl-[1.4rem] inline-flex !tracking-[0.02rem] !leading-[1.35] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#3f78e0] !text-[#3f78e0] !mb-3">
                  Why Choose Us?
                </h2>
                <h3 className="!text-[calc(1.285rem_+_0.42vw)] font-bold xl:!text-[1.6rem] !leading-[1.3] !mb-7">
                  A few reasons why our valued customers choose us.
                </h3>
                <div
                  className="accordion accordion-wrapper"
                  id="accordionExample"
                >
                  <div className="card plain accordion-item">
                    <div
                      className="card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit"
                      id="headingOne"
                    >
                      <button
                        className="accordion-button !text-[.85rem] before:!text-[#3f78e0] hover:!text-[#3f78e0]"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Societal development
                      </button>
                    </div>
                    {/*/.card-header */}
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="card-body !p-[0_0_0_1.1rem]">
                        <p>
                        We strive to build a society that motivates and inspires all to achieve their full potential.
                        </p>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.accordion-collapse */}
                  </div>
                  {/*/.accordion-item */}
                  <div className="card plain accordion-item">
                    <div
                      className="card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit"
                      id="headingTwo"
                    >
                      <button
                        className="collapsed !text-[.85rem] before:!text-[#3f78e0] hover:!text-[#3f78e0]"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Collaboration
                      </button>
                    </div>
                    {/*/.card-header */}
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="card-body !p-[0_0_0_1.1rem]">
                        <p>
                        We support, collaborate in order to improve the life of our clients and growth of our clients business.
                        </p>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.accordion-collapse */}
                  </div>
                  {/*/.accordion-item */}
                  <div className="card plain accordion-item">
                    <div
                      className="card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit"
                      id="headingThree"
                    >
                      <button
                        className="collapsed !text-[.85rem] before:!text-[#3f78e0] hover:!text-[#3f78e0]"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Priority
                      </button>
                    </div>
                    {/*/.card-header */}
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="card-body !p-[0_0_0_1.1rem]">
                        <p>
                        We prioritize value enhancement in our day to day business relationship. We also prioritize long term relationship and offer fair terms with our partners.
                        </p>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.accordion-collapse */}
                  </div>
                  {/*/.accordion-item */}
                </div>
                {/*/.accordion */}
              </div>
              {/*/column */}
            </div>
          </div>
        </section>
        <Team />
      </div>
      <Footer />
    </>
  );
}
