import { useState } from 'react';
import AuthLayout from '../../layout/AuthLayout';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import axios from 'axios';
import { baseURL } from '../../api/baseUrl';
import { signInFailed, signIn } from '../../redux/slices/singInSlice';

const SignIn = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(false);
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
    if (!data.email && !data.password) {
      setError(true);
    }
    try {
      await axios
        .post(`${baseURL}/login`, data)
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
        <h1 className="text-3xl font-bold text-center">Sign In</h1>
        <p className="text-lg mt-5 text-gray-400 text-center">
          Welcome back, you've been missed!
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
              <span>Sing in with Google</span>
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
              <span>Sing in with Apple ID</span>
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
                    plz enter a valid email address
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
                  Remember Me
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#377DFF] px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign In
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Dont have account?{' '}
              <Link
                to="/"
                className="font-semibold leading-6 text-[#377DFF] hover:text-indigo-500"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignIn;
