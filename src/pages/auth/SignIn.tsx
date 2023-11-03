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
  let userInfo: any = {};
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setpasswordError] = useState(false);
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

  const validate = () => {
    return !data.email && !data.password;
  };

  return (
    <AuthLayout>
      <div className="mx-auto max-w-screen-sm mt-16">
        <h1 className="text-3xl font-bold text-center">Sign In</h1>
        <p className="text-lg mt-5 text-gray-400 text-center">Welcome back</p>
        <div className="flex flex-col md:flex-row lg:flex-row  justify-center gap-7 items-center">
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
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmitData}>
              <div>
                <div className="mt-2">
                  <input
                    name="email"
                    type="email"
                    placeholder="your email"
                    value={data.email}
                    onChange={handleChange}
                    className={clsx(
                      emailError == true
                        ? 'block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-600 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                        : 'block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                    )}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between"></div>
                <div className="mt-2">
                  <input
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    value={data.password}
                    onChange={handleChange}
                    className={clsx(
                      passwordError == true
                        ? 'block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-600 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                        : 'block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                    )}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className={clsx(
                    validate()
                      ? 'flex w-full justify-center rounded-md bg-gray-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 '
                      : 'flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 '
                  )}
                  disabled={!validate()}
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Dont have account?{' '}
              <Link
                to="/"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
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
