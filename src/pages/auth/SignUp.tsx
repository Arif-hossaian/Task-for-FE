import React, { ChangeEvent, FormEvent, useState } from 'react';
import AuthLayout from '../../layout/AuthLayout';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../../api/baseUrl';
import { signInFailed, signIn } from '../../redux/slices/singInSlice';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

const SignUp = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(false);
  let userInfo: any = {};
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };
  const handleSubmitData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!data.email && !data.password) {
      setError(true);
    }
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
          Create an account to continue
        </p>
        <div className="flex flex-col md:flex-row lg:flex-row  justify-center gap-7 items-center mt-6">
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
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    className={clsx(error ? 'input-validation' : 'input-style')}
                    value={data.email}
                    onChange={handleChange}
                  />
                  {error ? (
                    <span className="text-xs text-red-600 mt-2 ">
                      Please enter a valid email address
                    </span>
                  ) : (
                    ''
                  )}

                  {data.email === '' ? (
                    <>
                      <span
                        className={clsx(
                          error
                            ? 'form-placeholder-svg-error'
                            : 'form-placeholder-svg'
                        )}
                      >
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
                      <span
                        className={clsx(
                          error
                            ? 'form-placeholder-text-error'
                            : 'form-placeholder-text'
                        )}
                      >
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
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
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
                  className={clsx(error ? 'input-validation' : 'input-style')}
                  value={data.password}
                  onChange={handleChange}
                />
                {error ? (
                  <span className="text-xs text-red-600 mt-2 ">
                    Please enter your password
                  </span>
                ) : (
                  ''
                )}

                {data.password === '' ? (
                  <>
                    <span
                      className={clsx(
                        error
                          ? 'form-placeholder-svg-error'
                          : 'form-placeholder-svg'
                      )}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                        />
                      </svg>
                    </span>

                    <span
                      className={clsx(
                        error
                          ? 'form-placeholder-text-error'
                          : 'form-placeholder-text'
                      )}
                    >
                      Your Password
                    </span>
                  </>
                ) : null}
                <span
                  className={clsx(
                    error
                      ? 'form-placeholder-password-svg-error'
                      : 'form-placeholder-password-svg'
                  )}
                >
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
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-gray-900 bg-gray-100 border-gray-300 rounded "
                />
                <label className="ml-2 text-sm font-medium text-gray-400">
                  I agree to the Terms & Condition
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#377DFF] px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign Up
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Already have an account?{' '}
              <Link
                to="/signin"
                className="font-semibold leading-6 text-[#377DFF] hover:text-indigo-500"
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
