import React from 'react'
import { Card, CardBody, Heading, Text } from "@chakra-ui/react";
import clsx from "clsx";
import { cabin } from "../pages/_app";
const Welcome = () => {
  return (
    <div className=" flex w-[100%] justify-center pt-20  px-5 ">
  
        <Card className="welcome w-[100%]  border-4 border-double border-black bg-transparent lg:w-[60%]">
          <Heading className="flex-column flex place-items-center justify-center p-2 text-center">
            <p className={clsx(cabin.className, "font-bold")}>
              {" "}
              Bienvenue en Guadeloupe !
            </p>
          </Heading>
          <CardBody>
            <div  >

            </div>
            <Text >
              
            </Text>
          </CardBody>
        </Card>

    </div>
  );
}

export default Welcome