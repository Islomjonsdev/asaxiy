import React from "react";
import Cards from "./cards";
import Text from "./text";

const Buyers = () => {
  return (
    <section className="mb-[96px]">
      <div className="max-w-[1336px] w-full sm:flex-wrap ml-auto mr-auto pl-[20px] pr-[20px]">
        <Text title="Buyers Choice" />
        <Cards />
      </div>
    </section>
  );
};

export default Buyers;
