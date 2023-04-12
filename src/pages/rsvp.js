import Layout from "@/components/layout";
import React, { useState } from "react";
import LoadingIndicator from "@/components/loading";

const Rsvp = () => {
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [numGuests, setNumGuests] = useState("");
  const [songRequest, setSongRequest] = useState("");
  const [foodPrefs, setFoodPrefs] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      // handle form submission
      const data = {
        email: email,
        name: name,
        numGuests: numGuests,
        songRequest: songRequest,
        foodPrefs: foodPrefs,
      };
      fetch("https://a1kpniueil.execute-api.us-west-2.amazonaws.com/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        //Then with the data from the response in JSON...
        .then((data) => {
          console.log("Success:", data);
          setLoading(false);
          setSubmitted(true);
        })
        //Then with the error genereted...
        .catch((error) => {
          console.error("Error:", error);
          setLoading(false);
        });
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const validationErrors = {};
    if (name.trim() === "") {
      validationErrors.name = "Name is required";
    }
    if (email.trim() === "") {
      validationErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      validationErrors.email = "Email is invalid";
    }
    if (numGuests.trim() === "") {
      validationErrors.numGuests = "# of guests is required";
    } else if (!/^\d+$/.test(numGuests)) {
      validationErrors.numGuests = "# of guests must be a number";
    }
    return validationErrors;
  };

  return (
    <div className="max-w-screen overflow-hidden">
      <Layout>
        <h1
          className="absolute top-[45%] -translate-x-[50%] -translate-y-[50%] left-[50%]
        text-[750px] cursive text-[#7baac8]/[0.8] mb-0 pb-0 leading-none overflow-hidden"
        >
          RSVP
        </h1>
        <form
          onSubmit={handleSubmit}
          className={`absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[48%] w-[90%] lg:w-[500px]
          bg-white/[0.9] bg-white/[0.9] p-[24px] lg:p-[32px] flex flex-col items-center max-h-[75%]
          gap-[28px] cursive text-[#7baac8] w-[90%] lg:w-[500px] text-center text-[36px] z-[20]`}
        >
          {loading ? (
            <LoadingIndicator />
          ) : (
            <>
              {submitted ? (
                <div className="flex flex-col items-center gap-[16px] text-[#d56647]">
                  <span>Thanks {name}!</span>
                  <span className="text-md">
                    You RSVP'd for {numGuests} guests.
                  </span>
                </div>
              ) : (
                <>
                  <div className="max-h-[450px] overflow-y-scroll w-full px-[20px] flex flex-col gap-[20px] shadow-lg pb-4">
                    <div className="mb-2 w-full">
                      <label
                        htmlFor="name"
                        className="block mb-2 font-medium text-gray-700 text-[36px] lg:text-[36px]"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="name"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`w-full px-4 bg-[#d56647] text-white font-semibold
                  indent-2 input-font text-[20px] py-1 border rounded-md focus:outline-none ${
                    errors.name ? "border-[#a61e51]" : ""
                  }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-[20px] input-font text-[#7baac8]">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="mb-2 w-full">
                      <label
                        htmlFor="email"
                        className="block mb-2 font-medium text-gray-700 text-[36px] lg:text-[40px]"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full px-4 bg-[#d56647] text-white font-semibold
                  indent-2 input-font text-[20px] py-1 border rounded-md focus:outline-none ${
                    errors.email ? "border-[#a61e51]" : ""
                  }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-[20px] input-font text-[#7baac8]">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div className="mb-2 w-full">
                      <label
                        htmlFor="numGuests"
                        className="block mb-2 font-medium text-gray-700 text-[36px] lg:text-[40px]"
                      >
                        # of guests
                      </label>
                      <input
                        type="text"
                        placeholder="# guests"
                        id="numGuests"
                        name="numGuests"
                        value={numGuests}
                        onChange={(e) => setNumGuests(e.target.value)}
                        className={`w-full px-4 bg-[#d56647] text-white font-semibold
                  indent-2 input-font text-[20px] py-1 border rounded-md focus:outline-none ${
                    errors.numGuests ? "border-[#a61e51]" : ""
                  }`}
                      />
                      {errors.numGuests && (
                        <p className="mt-1 text-[20px] input-font text-[#7baac8]">
                          {errors.numGuests}
                        </p>
                      )}
                    </div>
                    <div className="mb-2 w-full">
                      <label
                        htmlFor="songRequest"
                        className="block mb-2 font-medium text-gray-700 text-[36px] lg:text-[40px]"
                      >
                        Song request?
                      </label>
                      <input
                        type="text"
                        placeholder="song"
                        id="songRequest"
                        name="songRequest"
                        value={songRequest}
                        onChange={(e) => setSongRequest(e.target.value)}
                        className={`w-full px-4 bg-[#d56647] text-white font-semibold
                  indent-2 input-font text-[20px] py-1 border rounded-md focus:outline-none`}
                      />
                    </div>
                    <div className="mb-2 w-full">
                      <label
                        htmlFor="foodPrefs"
                        className="block mb-2 font-medium text-gray-700 text-[20px] lg:text-[32px]"
                      >
                        Food allergies or preferences?
                      </label>
                      <textarea
                        type="text"
                        placeholder="allergies etc..."
                        id="foodPrefs"
                        name="foodPrefs"
                        value={foodPrefs}
                        onChange={(e) => setFoodPrefs(e.target.value)}
                        className={`w-full px-4 bg-[#d56647] text-white font-semibold
                  indent-2 input-font text-[20px] py-1 border rounded-md focus:outline-none resize-none`}
                      />
                    </div>
                  </div>
                  <input
                    type="submit"
                    className="cursor-pointer text-[40px] bg-black rounded-[8px] px-[16px] py-[8px] text-[#d56647]"
                  />
                </>
              )}
            </>
          )}
        </form>
      </Layout>
    </div>
  );
};

export default Rsvp;
