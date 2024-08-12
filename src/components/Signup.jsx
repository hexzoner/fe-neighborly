import { useContext, useState } from "react";

import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";

export default function SignupForm() {
  const { signup, userInfo } = useContext(AuthContext);

  const [signupData, setSignupData] = useState({ email: "", password: "", firstName: "", lastName: "" });

  function onSubmit(data) {
    console.log(data);
    signup(data);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // console.log(signupData);
    signup(signupData);
  }

  function handleChange(e) {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  }
  return (
    <>
      {userInfo ? (
        <Navigate to="/" />
      ) : (
        <div>
          <div className="text-3xl">
            <form action="submit" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-3 items-center justify-center min-h-screen max-w-[20rem]  m-auto">
                <p>Register new account</p>

                <label className="input input-bordered flex items-center gap-2 w-full">
                  Email
                  <input onChange={handleChange} value={signupData.email} type="text" name="email" className="grow" placeholder="daisy@site.com" />
                </label>

                <label className="input input-bordered flex items-center gap-2 w-full">
                  Password
                  <input
                    onChange={handleChange}
                    value={signupData.password}
                    type="password"
                    name="password"
                    className="grow"
                    placeholder="daisy@site.com"
                  />
                </label>

                <label className="input input-bordered flex items-center gap-2 w-full">
                  First Name
                  <input onChange={handleChange} value={signupData.firstName} type="text" name="firstName" className="grow" placeholder="John" />
                </label>

                <label onChange={handleChange} value={signupData.lastName} className="input input-bordered flex items-center gap-2 w-full">
                  Last Name
                  <input type="text" name="lastName" className="grow" placeholder="Doe" />
                </label>

                <button type="submit" className="btn btn-outline">
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
