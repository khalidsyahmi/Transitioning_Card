import React from "react";
import Card from "../../components/Card";

import { CardData } from "../../data/dummy";

const CardTranstition = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold underline text-gray-100 py-4 mb-2">
        Transitioning cards page
      </h1>
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-7 p-14">
          {CardData.map((item) => (
            <div className="hover:row-span-2">
              <Card
                tN1={item.tN1}
                tN2={item.tN2}
                t1={item.t1}
                t2={item.t2}
                t3={item.t3}
                linkName={item.linkName}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardTranstition;
