import React from "react";

const Contact = () => {
  return (
    <>
      {/* 1st div container */}
      <div className="h-full w-full">
        {/* Form div */}
        <div>
          <form onSubmit={onSubmit}>
            <label>First Name</label>
            <input {...register("firstName")} />
            <label>Last Name</label>
            <input {...register("lastName")} />
            <button
              type="button"
              onClick={() => {
                setValue("lastName", "luo"); // ✅
                setValue("firstName", true); // ❌: true is not string
                errors.bill; // ❌: property bill does not exist
              }}
            >
              SetValue
            </button>
          </form>
        </div>
        {/* Grid div */}
        <div>
          {/* 4 divs  */}

          <div>
            Notre Bureau principal
            {/* 3 divs flex */}
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
            Numéro de téléphone
            {/* 3 divs flex */}
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
            {/* 3 divs flex */}
            Fax
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
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
