import * as React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
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
        <div className="top-40 right-20 m-0 w-full place-items-center justify-center gap-3 bg-gray-100 lg:absolute lg:min-h-[50%]  lg:w-[50%] lg:p-2">
          <h2 className="text-center text-2xl lg:pt-5">Contactez-nous</h2>
          <form
            className="flex flex-col rounded sm:p-5 lg:py-5 lg:px-40"
            onSubmit={onSubmit}
          >
            <label>Nom</label>
            <input className="" {...register("lastName")} />
            <label>Prénom</label>
            <input {...register("lastName", { required: true })} />
            <label>Email</label>
            <input {...register("email", { required: true })} />
            <label className="pt-5" htmlFor="message">
              Message
            </label>
            <textarea
              cols={20}
              rows={10}
              id="message"
              {...register("lastName", { required: true })}
            />
            <button
              className="py-5"
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
        <div className="top-40 m-0 grid min-h-[100%]  w-full grid-cols-2  gap-3 border-0 pb-5  lg:absolute lg:left-10 lg:min-h-[40%] lg:w-[40%]  ">
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
