import * as React from "react";
import { useForm } from "react-hook-form";
import { BsTelephone, BsPhone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { env } from "../env/client.mjs";
import clsx from "clsx";
import { cabin } from "../pages/_app";


type FormData = {
  user_name: string;
  lastName: string;
  user_email: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);

    emailjs
      .sendForm(
        env.NEXT_PUBLIC_SERVICE_ID || "",
        env.NEXT_PUBLIC_TEMPLATE_ID || "",
        form.current || "",
        env.NEXT_PUBLIC_PUBLIC_KEY || ""
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  });
  // firstName and lastName will have correct type
  const form = useRef<HTMLFormElement>(null);


  return (
    <>
      <div className="grid w-full place-items-center ">
        <div className="eight w-2/3 py-10 pt-32 ">
          <h1 className={clsx(cabin.className, "font-bold")}>Contact</h1>
        </div>
      </div>
      {/* 1st div container */}
      <div className=" grid  place-items-center gap-5  lg:flex lg:w-full ">
        <div></div>
        {/* Grid div */}
        <div className="w-full grid lg:place-items-center place-items-center">
          {" "}
          <div className="   m-0 grid min-h-[100%] w-[80%] gap-3  border-0 pb-5 md:grid-cols-2   ">
            {/* 4 divs  */}

            <div className=" grid place-items-center gap-2 bg-white py-5">
              <BsTelephone className="text-black-300 text-3xl" />
              {/* 3 divs flex */}
              <div>Notre Bureau principal</div>
              <div></div>
              <div></div>
            </div>
            <div className=" grid place-items-center gap-2 bg-white py-5">
              <BsPhone className="text-black-300 text-3xl" />
              {/* 3 divs flex */}
              <div>Numéro de téléphone</div>
              <div></div>
              <div></div>
            </div>
            <div className=" grid place-items-center gap-2 bg-white py-5">
              {/* 3 divs flex */}{" "}
              <GoLocation className="text-black-300 text-3xl" />
              <div>Adresse</div>
              <div></div>
              <div></div>
            </div>
            <div className=" grid place-items-center gap-2 bg-white py-5">
              {/* 3 divs flex */}
              <HiOutlineMail className="text-black-300 text-3xl" />
              <div>Email</div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        {/* Form div */}
        <div className="  w-[80%] gap-3 bg-gray-100 px-5  lg:m-0  ">
          <form
            ref={form}
            className="flex w-full flex-col rounded p-5 lg:py-5 lg:px-40"
            onSubmit={onSubmit}
          >
            <label>Nom</label>
            <input className="" {...register("lastName", { required: true })} />
            <label>Prénom</label>
            <input {...register("user_name", { required: true })} />
            <label>Email</label>
            <input {...register("user_email", { required: true })} />
            <label className="pt-5" htmlFor="message">
              Message
            </label>
            <textarea
              cols={20}
              rows={10}
              id="message"
              {...register("message", { required: true })}
            />
            <button className="py-5" type="submit" onClick={onSubmit}>
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
