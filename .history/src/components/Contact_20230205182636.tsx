import * as React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
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

  return (
    <>
      {/* 1st div container */}
      <div className="grid h-screen w-full place-items-center justify-center gap-1 lg:relative">
        {/* Form div */}
        <div className="top-40 right-20 m-0 w-full lg:p-2 place-items-center justify-center gap-3 bg-gray-100 lg:absolute  lg:min-h-[50%] lg:w-[50%]">
            <h2 className="text-center text-2xl py-4">Contactez-nous</h2>
          <form
            className="flex flex-col sm:p-5 lg:py-20 lg:px-40"
            onSubmit={onSubmit}
          >
            <label>Nom</label>
            <input className="" {...register("firstName")} />
            <label>Prénom</label>
            <input {...register("lastName")} />
            <label>Email</label>
            <input {...register("lastName")} />
            <label
            className="pt-5"
             htmlFor="message">Message</label>
            <textarea
              cols={20}
              rows={10}
              id="message"
              {...register("lastName")}
            />
            <button
              type="button"
              onClick={() => {
                setValue("lastName", "luo"); // ✅
                // ❌: property bill does not exist
              }}
            >
              SetValue
            </button>
          </form>
        </div>
        {/* Grid div */}
        <div className="min-h-[100%] pb-5 grid-cols-2 top-40  m-0 grid  w-full gap-3 border-0  lg:absolute lg:left-10 lg:min-h-[40%] lg:w-[40%]  ">
          {/* 4 divs  */}

          <div className=" bg-white">
            Notre Bureau principal
            {/* 3 divs flex */}
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className=" bg-white">
            Numéro de téléphone
            {/* 3 divs flex */}
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className=" bg-white">
            {/* 3 divs flex */}
            Fax
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className=" bg-white">
            {/* 3 divs flex */}
            Email
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
