import React from "react";
import Card from "../../components/Card";

const CardTranstition = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold underline text-gray-100 py-4 mb-2">
        Transitioning cards page
      </h1>
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-7 p-14">
          <div className="hover:row-span-2 ">
            <Card
              t1="this"
              t2="that"
              t3="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Molestias illum alias maxime facilis consectetur unde autem laborum tempore velit provident! 
          Maiores consequatur vel asperiores assumenda ad incidunt debitis aliquid ipsam!"
              linkName="page-one"
            />
          </div>
          <div className="hover:row-span-2">
            <Card
              t1="this"
              t2="that"
              t3="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Molestias illum alias maxime facilis consectetur unde autem laborum tempore velit provident! 
          Maiores consequatur vel asperiores assumenda ad incidunt debitis aliquid ipsam!"
              linkName="page-one"
            />
          </div>
          <div className="hover:row-span-2">
            <Card
              t1="this"
              t2="that"
              t3="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Molestias illum alias maxime facilis consectetur unde autem laborum tempore velit provident! 
          Molestias illum alias maxime facilis consectetur unde autem laborum tempore velit provident! 
          Molestias illum alias maxime facilis consectetur unde autem laborum tempore velit provident! 
          Molestias illum alias maxime facilis consectetur unde autem laborum tempore velit provident! 
          Maiores consequatur vel asperiores assumenda ad incidunt debitis aliquid ipsam!"
              linkName="page-one"
            />
          </div>
          <div className="hover:row-span-2">
            <Card
              t1="this"
              t2="that"
              t3="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Molestias illum alias maxime facilis consectetur unde autem laborum tempore velit provident! 
          Maiores consequatur vel asperiores assumenda ad incidunt debitis aliquid ipsam!"
              linkName="page-one"
            />
          </div>
          <div className="hover:row-span-2">
            <Card
              t1="this"
              t2="that"
              t3="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Molestias illum alias maxime facilis consectetur unde autem laborum tempore velit provident! 
          Maiores consequatur vel asperiores assumenda ad incidunt debitis aliquid ipsam!"
              linkName="page-one"
            />
          </div>
          <div className="hover:row-span-2">
            <Card
              t1="this"
              t2="that"
              t3="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Molestias illum alias maxime facilis consectetur unde autem laborum tempore velit provident! 
          Maiores consequatur vel asperiores assumenda ad incidunt debitis aliquid ipsam!"
              linkName="page-one"
            />
          </div>
          <div className="hover:row-span-2">
            <Card
              t1="this"
              t2="that"
              t3="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Molestias illum alias maxime facilis consectetur unde autem laborum tempore velit provident! 
          Maiores consequatur vel asperiores assumenda ad incidunt debitis aliquid ipsam!"
              linkName="page-one"
            />
          </div>
          <div className="hover:row-span-2">
            <Card
              t1="this"
              t2="that"
              t3="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Molestias illum alias maxime facilis consectetur unde autem laborum tempore velit provident! 
          Maiores consequatur vel asperiores assumenda ad incidunt debitis aliquid ipsam!"
              linkName="page-one"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTranstition;
