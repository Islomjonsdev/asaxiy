import Image from "next/image";
import React from "react";
import mobileLogo from "../../public/images/mobilelogo.png";
import googlePlay from "../../public/svg/google-play.svg";
// import appStore from "../../public/svg/appStore.svg";
import Link from "next/link";
import phoneImage from "../../public/images/phone.png"

const Mobile = () => {
  return (
    <section className="bg-[#E0E8FF] mb-[96px]">
      <div className="max-w-[1336px] w-full sm:flex-wrap ml-auto mr-auto pl-[20px] pr-[20px]">
        <div className="flex items-center gap-[108px]">
          <div>
            <div className="flex items-center gap-[11px] mb-[8px]">
              <Image
                src={mobileLogo}
                width={134}
                height={32}
                alt="mobileLogo"
              />
              <span className="border border-[#1B5BF7] h-[20px] w-[1px]"></span>
              <p className="text-[#5C596D] text-[17px] font-semibold leading-[25px]">
                mobile application
              </p>
            </div>
            <h3 className="text-[#1D1A2F] font-bold text-[40px] leading-[56px] mb-[24px]">
              Order via mobile app
            </h3>
            <div className="flex items-center gap-[10px]">
              <Link href={"/"}>
                <Image
                  src={googlePlay}
                  width={168}
                  height={49}
                  alt="googleplay"
                />
              </Link>
              <Link href={"/"}>
                {/* <Image src={appStore} width={168} height={49} alt="appstore" /> */}
                Apple store
              </Link>
            </div>
          </div>

            <div className="flex items-center">
                <Image src={phoneImage} width={360} alt="phoneImage"/>
                <p className="text-[#5C596D] font-bolder text-[20px] leading-[24px]">Scan the QR code <br /> and install the application</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Mobile;
