import Link from "next/link";

export default function Footer({ hasMarginTop = false }) {
  return (<footer 
      className={`bg-[#21262c] opacity-100 !text-[#cacaca] ${
        hasMarginTop ? "!mt-5 xl:!mt-24 lg:!mt-24 md:!mt-24" : ""
      } `}>
              <div className="container pt-[4.5rem] xl:pt-[7rem] lg:pt-[7rem] md:pt-[7rem] pb-[1.75rem]">
                <div className="flex flex-wrap mx-[-15px] !mt-[-30px] xl:!mt-0 lg:!mt-0">
                  <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
                    <div className="widget">
                      <h3 className="h2 !mb-3 !text-white !leading-[1.35]">
                        Join our Membership
                      </h3>
                      <p className="lead !leading-[1.65] text-[0.9rem] font-medium !mb-5">
                      Explore our business solutions designed to support your growth at every stage.
                      </p>
                      <Link href="/membership" className="btn btn-white !rounded-[50rem]">
                        Join Us
                      </Link>
                    </div>
                    {/* /.widget */}
                  </div>
                  {/* /column */}
                  <div className="md:w-4/12 lg:w-2/12 xl:w-2/12 w-full flex-[0_0_auto] !px-[15px] max-w-full lg:!ml-[16.66666667%] xl:!ml-[16.66666667%] max-lg:!mt-[30px]">
                    <div className="widget">
                      <h4 className="widget-title !text-white !mb-3">
                        Quick Links
                      </h4>
                      <ul className="pl-0 list-none text-inherit !mb-0">
                        <li>
                          <Link
                            className="!text-[#cacaca] hover:!text-[#3f78e0]"
                            href="/"
                          >
                            Home
                          </Link>
                        </li>
                        <li className="!mt-[0.35rem]">
                          <Link
                            className="!text-[#cacaca] hover:!text-[#3f78e0]"
                            href="/membership"
                          >
                            Membership
                          </Link>
                        </li>
                        <li className="!mt-[0.35rem]">
                          <Link
                            className="!text-[#cacaca] hover:!text-[#3f78e0]"
                            href="/products"
                          >
                            Products
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* /.widget */}
                  </div>
                  {/* /column */}
                  <div className="md:w-4/12 lg:w-2/12 xl:w-2/12 w-full flex-[0_0_auto] !px-[15px] max-w-full max-lg:!mt-[30px]">
                    <div className="widget">
                      <h4 className="widget-title !text-white !mb-3">
                        Learn More
                      </h4>
                      <ul className="pl-0 list-none !mb-0">
                        <li>
                          <Link
                            className="!text-[#cacaca] hover:!text-[#3f78e0]"
                            href="/about"
                          >
                            About Us
                          </Link>
                        </li>
                        <li className="!mt-[0.35rem]">
                          <Link
                            className="!text-[#cacaca] hover:!text-[#3f78e0]"
                            href="/contact"
                          >
                            Contact Us
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* /.widget */}
                  </div>
                  {/* /column */}
                  <div className="md:w-4/12 lg:w-2/12 xl:w-2/12 w-full flex-[0_0_auto] !px-[15px] max-w-full max-lg:!mt-[30px]">
                    <div className="widget">
                      <h4 className="widget-title !text-white !mb-3">
                        Get in Touch
                      </h4>
                      <address className="not-italic !leading-[inherit] !mb-4">
                        Moonshine St. 14/05 Light City, London, United Kingdom
                      </address>
                      <a
                        className="!text-[#cacaca] hover:!text-[#3f78e0]"
                        href="mailto:first.last@email.com"
                      >
                        info@email.com
                      </a>
                      <br />
                      00 (123) 456 78 90
                    </div>
                    {/* /.widget */}
                  </div>
                  {/* /column */}
                </div>
                {/*/.row */}
                <hr className="!mt-13 xl:!mt-20 lg:!mt-20 md:!mt-20 !mb-7" />
                <div className="xl:!flex lg:!flex md:!flex items-center justify-between">
                  <p className="!mb-2 xl:!mb-0 lg:!mb-0">
                    &copy; {new Date().getFullYear()} All rights reserved.
                  </p>
                  <nav className="nav social social-white xl:!text-right lg:!text-right md:!text-right">
                    <a
                      className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                      href="#"
                    >
                      <i className="uil uil-twitter before:content-['ed59'] text-[1rem] !text-[#5daed5]" />
                    </a>
                    <a
                      className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                      href="#"
                    >
                      <i className="uil uil-facebook-f before:content-['eae2'] text-[1rem] !text-[#4470cf]" />
                    </a>
                    <a
                      className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                      href="#"
                    >
                      <i className="uil uil-dribbble before:content-['eaa2'] text-[1rem] !text-[#e94d88]" />
                    </a>
                    <a
                      className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                      href="#"
                    >
                      <i className="uil uil-instagram before:content-['eb9c'] text-[1rem] !text-[#d53581]" />
                    </a>
                    <a
                      className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                      href="#"
                    >
                      <i className="uil uil-youtube before:content-['edb5'] text-[1rem] !text-[#c8312b]" />
                    </a>
                  </nav>
                  {/* /.social */}
                </div>
                {/* /div */}
              </div>
              {/* /.container */}
            </footer>
  );
}
