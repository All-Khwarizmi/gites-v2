import * as React from "react";
import { useForm } from "react-hook-form";
import { BsTelephone, BsPhone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { useRef } from "react";
/* BsTelephone */
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));
  // firstName and lastName will have correct type
const form = useRef()
  return (
    <>
      {/* 1st div container */}
      <div className="grid  place-items-center gap-5 lg:relative lg:grid lg:w-full">
        {/* Form div */}
        <div className="div-form px-5 w-[80%] gap-3 bg-gray-100 lg:absolute  lg:top-40 lg:right-20 lg:m-0 lg:min-h-[50%]  lg:w-[50%] lg:p-2">
          <h2 className="text-center text-2xl lg:pt-5">Contactez-nous</h2>
          <form
            ref={form}
            className="flex w-full flex-col rounded p-5 lg:py-5 lg:px-40"
            onSubmit={onSubmit}
          >
            <label>Nom</label>
            <input className="" {...register("lastName", { required: true })} />
            <label>Prénom</label>
            <input {...register("firstName", { required: true })} />
            <label>Email</label>
            <input {...register("email", { required: true })} />
            <label className="pt-5" htmlFor="message">
              Message
            </label>
            <textarea
              cols={20}
              rows={10}
              id="message"
              {...register("message", { required: true })}
            />
            <button className="py-5" type="button" onClick={onSubmit}>
              Envoyer
            </button>
          </form>
        </div>
        {/* Grid div */}
        <div className="top-40 m-0 grid min-h-[100%] w-[80%] w-full grid-cols-2  gap-3 border-0 pb-5  lg:absolute lg:left-10 lg:min-h-[40%] lg:w-[40%]  ">
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
    </>
  );
};

export default Contact;
