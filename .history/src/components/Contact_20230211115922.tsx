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
      setValue("message", "")
      setValue("user_lastName", "")
      setValue("user_firstName", "")
      setValue("user_number", "")
      setValue("user_email", "")
  });
  // firstName and lastName will have correct type
  const form = useRef<HTMLFormElement>(null);

  return (
    <>
      <div className="grid w-full place-items-center py-10 pt-20 md:pt-32">
        <div className="eight w-2/3  ">
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
              <div className="font-bold">Notre bureau principal</div>
              <div className="text-xl">05.90.22.20.01</div>
              <div></div>
            </div>
            <div className=" grid place-items-center gap-2 bg-white py-5">
              <BsPhone className="text-black-300 text-3xl" />
              {/* 3 divs flex */}
              <div className="font-bold">Numéro de téléphone</div>
              <div className="text-xl">06.83.28.93.63</div>
              <div></div>
            </div>
            <div className=" grid place-items-center gap-2 bg-white py-5">
              {/* 3 divs flex */}{" "}
              <GoLocation className="text-black-300 text-3xl" />
              <div className="font-bold text-3">Adresse</div>
              <div className="text-center text-xl">
                Catherine et Laurent AUBERT
              </div>
              <div className="text-center text-xl">
                Rue du Moulin de Montrésor, 97121 ANSE BERTRAND GUADELOUPE -
                FRANCE
              </div>
            </div>
            <div className=" grid place-items-center gap-2 bg-white py-5">
              {/* 3 divs flex */}
              <HiOutlineMail className="text-black-300 text-3xl" />
              <div className="font-bold">Email</div>
              <div className="text-xl">aubert.celest@wanadoo.fr</div>
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
            <input
              className=""
              {...register("user_lastName", { required: true })}
            />
            <label className="py-2 pt-3">Prénom</label>
            <input {...register("user_firstName", { required: true })} />
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

            <h3 className="mt-5 flex place-items-center content-center justify-center  rounded bg-black lg:hidden ">
              <button
                className={clsx(
                  cabin.className,
                  "btn-blk w-full rounded px-4 py-2 text-center  text-2xl font-bold   transition"
                )}
              >
                Envoyer
              </button>
            </h3>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
