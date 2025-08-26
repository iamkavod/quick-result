import Footer from "@/components/layout-ui/Footer";
import Header from "@/components/layout-ui/Header";
import Projects1 from "@/components/projects/Projects1";

export const metadata = {
  title:
    "Projects || Sandbox - Modern & Multipurpose React Next.js Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose React Next.js Template with Tailwind CSS",
};
export default function ProductsPage() {
  return (
    <>
      <div className="grow shrink-0">
        <Header />
        <section className="section-frame overflow-hidden xl:mx-6 xl:rounded-2xl lg:mx-6 lg:rounded-2xl md:mx-6 md:rounded-2xl">
          <div className="wrapper bg-[rgba(246,247,249,1)]">
            <div className="container py-16 xl:!py-28 lg:!py-28 md:!py-28 !text-center">
              <div className="flex flex-wrap mx-[-15px]">
                <div className="lg:w-10/12 xl:w-10/12 xxl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                  <h1 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !mb-1">
                    Check out some of our awesome products.
                  </h1>
                </div>
                {/* /column */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container */}
          </div>
          {/* /.wrapper */}
        </section>
        <Projects1 />
      </div>
      <Footer />
    </>
  );
}
