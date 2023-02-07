import * as React from "react";
import { useForm } from "react-hook-form";

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

  return (
    <>
      {/* 1st div container */}
      <div className="lg:place-items-center flex  justify-center gap-5 lg:relative lg:grid lg:w-full">
        {/* Form div */}
        <div className="div-form  w-[80%] gap-3 bg-gray-100 lg:absolute  lg:top-40 lg:right-20 lg:m-0 lg:min-h-[50%]  lg:w-[50%] lg:p-2">
          <h2 className="text-center text-2xl lg:pt-5">Contactez-nous</h2>
          <form
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
