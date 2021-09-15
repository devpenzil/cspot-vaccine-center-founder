import React, { useState } from "react";
import axios from "axios";
function SearchByPin() {
  const [pincode, setpincode] = useState();
  const [slots, setslots] = useState([]);
  const [message, setMessage] = useState("");

  var today = new Date(),
    date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();

  const getApi = (e) => {
    e.preventDefault();
    if (pincode.length != 6) {
      setMessage("Invalid Pincode 😢");
    }

    axios
      .get(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${date}`
      )
      .then((Response) => {
        console.log(Response.data.sessions);
        setslots(Response.data.sessions);
        setMessage("");

        if (Response.data.sessions == "") {
          setMessage("No slots found 😢");
        }
      });
  };

  return (
    <div className="w-full">
      <div className="text-center mt-8 text-2xl font-semibold">
        🔍 Find Vaccination Center with your Pincode
      </div>

      <div className="w-64 mx-auto my-10">
        <form onSubmit={getApi} className="mx-auto">
          <input
            type="text"
            minLength="6"
            onChange={(e) => setpincode(e.target.value)}
            name="pin"
            id="pin"
            className="w-64 mx-auto px-6 py-2 bg-green-100 shadow-md focus:ring-2 focus:ring-green-600 rounded-2xl border-0 outline-none"
            placeholder="Enter your Pincode 📮"
          />
          <div className="text-center text-red-600 text-xl font-semibold mt-6">
            {message}
          </div>
        </form>
      </div>

      <div className="container mx-auto flex flex-row flex-wrap">
        {slots.map((obj) => {
          return (
            <div className="w-full mt-8 md:w-1/2 p-2">
              <div className="card  z-40 bg-green-400 shadow-md rounded-md   w-full min-h-full ">
                <div className="bg-green-600 z-40 p-4 text-2xl rounded-md  font-semibold text-white">
                  <div className="-mt-6 z-0 px-2 rounded-full bg-red-400 text-sm w-min">
                    {obj.fee_type}
                  </div>
                  <h2>{obj.name}</h2>
                </div>
                <div className="p-4">
                  <div className="text-center text-xl font-bold">
                    {" "}
                    {obj.date}
                  </div>
                  <div className="py-2">
                    {/* {" "} */}
                    {obj.address} <br /> {obj.block_name} <br />{" "}
                    {obj.district_name}
                  </div>
                  <div className="row">
                    From : {obj.from} To : {obj.to}{" "}
                  </div>
                  <div className="py-2">
                    <div className="row">
                      Available doss 1 &nbsp; : &nbsp;{" "}
                      {obj.available_capacity_dose1}
                    </div>
                    <div className="row">
                      Available doss 2 &nbsp; : &nbsp;{" "}
                      {obj.available_capacity_dose2}
                    </div>
                  </div>
                  <div className="row">
                    Minimum Age &nbsp; : &nbsp; {obj.min_age_limit}
                  </div>

                  <div className="text-center font-bold">{obj.vaccine}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchByPin;
