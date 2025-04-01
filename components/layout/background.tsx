import clsx from "clsx";
import Image, { StaticImageData } from "next/image";

import bg_ui_desktop from "@/assets/layout/bg_section_ui_desktop.svg";
import bg_ui_mobile from "@/assets/layout/bg_section_ui_mobile.svg";

type SectionBGWrapperProps = {
  children: React.ReactNode;
  // isRight?: boolean;
  imageMobile?: StaticImageData;
  imageDesktop?: StaticImageData;
  className?: string;
};

export default function Background({
  children,
  className,
  // isRight = false,
  imageMobile = bg_ui_mobile,
  imageDesktop = bg_ui_desktop,
}: SectionBGWrapperProps) {
  return (
    <div className="relative overflow-clip">
      <div className={clsx(className, "relative z-30")}>{children}</div>
      {/* <div
				className={`from-theme-orange to-theme-purple pointer-events-none absolute left-0 top-0 z-20 h-[2px] w-full ${
					isRight ? 'bg-gradient-to-r' : 'bg-gradient-to-l'
				}`}></div> */}
      <figure className="absolute left-0 top-0 z-10 w-full">
        <Image src={imageDesktop} alt="" className="hidden w-full lg:block" />
        <Image src={imageMobile} alt="" className="w-full lg:hidden" />
      </figure>
    </div>
  );
}
