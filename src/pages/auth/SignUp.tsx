import React, { useState } from 'react';
import AuthLayout from '../../layout/AuthLayout';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../../api/baseUrl';
import { signInFailed, signIn } from '../../redux/slices/singInSlice';
import { useDispatch } from 'react-redux';

const SignUp = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  let userInfo: any = {};
  const handleChange = (e: any) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };
  const handleSubmitData = async (e: any) => {
    e.preventDefault();
    try {
      await axios
        .post(`${baseURL}/register`, data)
        .then((res) => {
          console.log(res.data);
          if (res.data.token) {
            userInfo.email = data.email;
            userInfo.token = res.data.token;
            sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
            dispatch(signIn(userInfo));
            navigate('/dashboard');
          } else {
            console.log('user registration failed');
          }
        })
        .catch((err: any) => {
          console.log(err);
          dispatch(signInFailed('Authentication failed'));
        });
    } catch (error) {
      console.log(error, 'server error');
    }
  };
  return (
    <AuthLayout>
      <div className="mx-auto max-w-screen-sm mt-16">
        <h1 className="text-3xl font-bold text-center">Getting start</h1>
        <p className="text-lg mt-5 text-gray-400 text-center">
          create ur account to continiue
        </p>
        <div className="flex flex-col md:flex-row lg:flex-row  justify-center gap-7 items-center">
          <div>
            <button className="px-4 py-3 border flex gap-2 border-slate-200 bg-[#F0F5FA] rounded-lg text-slate-500 hover:shadow transition duration-150">
              <img
                className="w-6 h-6"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                loading="lazy"
                alt="google logo"
              />
              <span>Sing up with Google</span>
            </button>
          </div>
          <div>
            <button className="px-4 py-3 border flex gap-2 border-slate-200 bg-[#F0F5FA] rounded-lg text-slate-500 hover:shadow transition duration-150">
              <img
                className="w-6 h-6"
                src="https://seeklogo.com/images/A/apple-logo-52C416BDDD-seeklogo.com.png"
                loading="lazy"
                alt="google logo"
              />
              <span>Sing up with Apple ID</span>
            </button>
          </div>
        </div>
        <div className="px-20">
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink mx-4 text-gray-400">OR</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center px-20 lg:px-0 md:px-0">
          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmitData}>
              <div>
                {/* <div className="text-left text-sm font-semibold">
            <label htmlFor="email" className="text-left">
              Email
            </label>
          </div> */}

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={data.email}
                    onChange={handleChange}
                  />

                  {data.email === '' ? (
                    <>
                      <span className="absolute inset-y-0 start-0 grid place-content-center px-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                          />
                        </svg>
                      </span>
                      <span className="ml-10 text-gray-400 absolute inset-y-0 start-0 grid place-content-center">
                        Your Email
                      </span>
                    </>
                  ) : null}
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="name"
                  className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />

                <span className="absolute inset-y-0 start-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>

                <span className="ml-10 text-gray-400 absolute inset-y-0 start-0 grid place-content-center">
                  Your Name
                </span>
              </div>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={data.password}
                  onChange={handleChange}
                />

                <span className="absolute inset-y-0 start-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>

                <span className="ml-10 text-gray-400 absolute inset-y-0 start-0 grid place-content-center">
                  Your Password
                </span>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Already have an account?{' '}
              <Link
                to="/signin"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
