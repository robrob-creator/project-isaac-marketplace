/* eslint-disable prettier/prettier */
/* eslint-disable no-empty-pattern */
/* eslint-disable prettier/prettier */
import * as React from "react";
export type SideDisplayProps = { logo: any; background: any };

export const SideDisplay = <PROPS extends SideDisplayProps>({
  logo,
  background,
}: PROPS): JSX.Element => {
  return (
    <div
      className={`flex items-start justify-center bg-main bg-cover`}
      style={{ width: "550px", height: "832px" }}
    >
      <div className="flex-row mt-32 ">
        <img className="w-80 h-20" src={logo?.src} />
        <div
          className="flex flex-col space-y-2 items-center justify-end"
          style={{ width: "432px", height: "206px" }}
        >
          <p
            className="text-4xl mt-64 mb-4 font-bold tracking-wider text-white"
            style={{ width: "432px" }}
          >
            Welcome guest!
          </p>
          <p
            className="text-xl tracking-wider text-white"
            style={{ width: "432px", height: "143px" }}
          >
            ut eu sem integer vitae justo eget magna fermentum iaculis eu non
            diam phasellus vestibulum lorem sed risus ultricies tristique
          </p>
        </div>
      </div>
    </div>
  );
};
