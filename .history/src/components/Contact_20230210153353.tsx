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
  user_lastName: string;
  user_firstName: string;
  user_number: string;
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
        <div className="eight w-2/3 py-10 pt-32 lg:pb-20 ">
          <h1 className={clsx(cabin.className, "font-bold")}>Contact</h1>
        </div>
      </div>
      {/* 1st div container */}
      <div className=" grid  place-items-center gap-5  lg:flex ">
        <div></div>
        {/* Grid div */}
        <div className="grid w-full place-items-center lg:w-[40%] lg:place-items-center">
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
              <div>06.83.28.93.63</div>
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
              <div>aubert.celest@wanadoo.fr</div>
              <div></div>
            </div>
          </div>
        </div>
        {/* Form div */}
        <div className="w-[80%] gap-3 bg-gray-100 lg:m-0 lg:w-[50%]  ">
          <form
            ref={form}
            className="flex w-full flex-col rounded p-5 lg:py-10 lg:px-28"
            onSubmit={onSubmit}
          >
            <label className="py-2 pt-3">Nom</label>
            <input className="" {...register("lastName", { required: true })} />
            <label className="py-2 pt-3">Prénom</label>
            <input {...register("user_lastName", { required: true })} />
            <label className="py-2 pt-3">Téléphone</label>
            <input {...register("user_number", { required: true })} />
            <label className="py-2 pt-3">Email</label>
            <input {...register("user_email", { required: true })} />
            <label className="py-2 pt-5" htmlFor="message">
              Message
            </label>
            <textarea
              cols={20}
              rows={10}
              id="message"
              {...register("message", { required: true })}
            />

            <h3 className="mt-5 flex place-items-center content-center justify-center  rounded bg-black  transition delay-150 duration-300  ease-in-out hover:-translate-y-1 hover:scale-110 lg:hidden ">
              <p
                className={clsx(
                  cabin.className,
                  "btn-blk  rounded px-4 py-2 text-center  text-2xl font-bold   transition"
                )}
              >
                Envoyer
              </p>
            </h3>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
