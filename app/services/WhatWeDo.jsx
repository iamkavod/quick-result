import React from "react";
import Image from "next/image";

export default function WhatWeDo() {
  return (
    <>
    <section className="wrapper !bg-[#ffffff]">
      <div className="container pt-32 xl:pt-40 lg:pt-40 md:pt-40 pb-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24">
        <div className="flex flex-wrap mx-[-15px] !text-center">
          <div className="lg:w-10/12 xl:w-9/12 xxl:w-8/12 flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !relative">
            <Image
              className="!h-[3rem] absolute hidden xl:block lg:block"
              style={{ top: "-45%", left: "23%" }}
              alt="image"
              src="/assets/img/svg/doodle3.svg"
              width={85}
              height={82}
            />
            <Image
              className="h-8 absolute hidden xl:block lg:block"
              style={{ top: "6%", right: "2%" }}
              alt="image"
              src="/assets/img/svg/doodle4.svg"
              width={42}
              height={55}
            />
            <h2 className="!text-[0.8rem] !leading-[1.35] !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3">
              Member Portal Access
            </h2>
            <h3 className="xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] font-semibold !leading-[1.2] !mb-12 lg:!px-5 xl:!px-0 xxl:!px-6">
              Login gateway for memners to:
            </h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="flex flex-wrap mx-[-15px] !mb-40">
          <div className="xxl:w-11/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <div className="flex flex-wrap justify-center mx-[-15px] xl:mx-[-20px] lg:mx-[-20px] md:mx-[-20px] !mt-[-50px] !text-center">
              <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px] max-w-full">
              <Image className="block mx-auto visible svg-inject icon-svg icon-svg-sm text-purple-500 " alt=""  width="410" height="410"    src="/assets/img/icons/lineal/coin.svg" />
                <h4 className="!text-[1rem]">View balances, savings, loans</h4>
              </div>
              {/*/column */}
              <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px] max-w-full">
              <Image className="block mx-auto visible svg-inject icon-svg icon-svg-sm text-purple-500 " alt=""  width="418" height="512"    src="/assets/img/icons/lineal/check-list.svg" />
                <h4 className="!text-[1rem]">Submit requests</h4>
              </div>
              {/*/column */}
              <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px] max-w-full">
              <Image className="block mx-auto visible svg-inject icon-svg icon-svg-sm text-purple-500 " alt=""  width="512" height="443"    src="/assets/img/icons/lineal/browser.svg" />
                <h4 className="!text-[1rem]">Recieve cooperative news</h4>
              </div>
            </div>
            {/*/.row */}
          </div>
          {/* /column */}
        </div>
      </div>
      {/* /.container */}
    </section>
    
    <section className="wrapper !bg-[#ffffff]">
      <div className="container pt-32 xl:pt-40 lg:pt-40 md:pt-40 pb-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24">
        <div className="flex flex-wrap mx-[-15px] !text-center">
          <div className="lg:w-10/12 xl:w-9/12 xxl:w-8/12 flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !relative">
            <Image
              className="!h-[3rem] absolute hidden xl:block lg:block"
              style={{ top: "-45%", left: "23%" }}
              alt="image"
              src="/assets/img/svg/doodle3.svg"
              width={85}
              height={82}
            />
            <Image
              className="h-8 absolute hidden xl:block lg:block"
              style={{ top: "6%", right: "2%" }}
              alt="image"
              src="/assets/img/svg/doodle4.svg"
              width={42}
              height={55}
            />
            <h2 className="!text-[0.8rem] !leading-[1.35] !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3">
              Online Payments
            </h2>
            <h3 className="xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] font-semibold !leading-[1.2] !mb-12 lg:!px-5 xl:!px-0 xxl:!px-6">
              Secure options for:
            </h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="flex flex-wrap mx-[-15px] !mb-40">
          <div className="xxl:w-11/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <div className="flex flex-wrap justify-center mx-[-15px] xl:mx-[-20px] lg:mx-[-20px] md:mx-[-20px] !mt-[-50px] !text-center">
              <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px] max-w-full">
              <Image className="block mx-auto visible svg-inject icon-svg icon-svg-sm text-[#3f78e0] " alt=""  width="410" height="285"    src="/assets/img/icons/lineal/money.svg" />
                <h4 className="!text-[1rem]">Loan repayment</h4>
              </div>
              {/*/column */}
              <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px] max-w-full">
              <Image className="block mx-auto visible svg-inject icon-svg icon-svg-sm text-[#3f78e0] " alt=""  width="398" height="410"    src="/assets/img/icons/lineal/calendar.svg" />
                <h4 className="!text-[1rem]">Monthly contributions</h4>
              </div>
              {/*/column */}
              <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[50px] max-w-full">
              <Image className="block mx-auto visible svg-inject icon-svg icon-svg-sm text-[#3f78e0] " alt=""  width="340" height="410"    src="/assets/img/icons/lineal/shield.svg" />
                <h4 className="!text-[1rem]">New member registration</h4>
              </div>
            </div>
            {/*/.row */}
          </div>
          {/* /column */}
        </div>
      </div>
      {/* /.container */}
    </section>
    </>
  );
}