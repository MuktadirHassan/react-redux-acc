import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "redux/actions/authAction";
interface ILoginForm {
  email: string;
  password: string;
}
const Login = () => {
  const { handleSubmit, register } = useForm<ILoginForm>();
  const dispatch = useDispatch();
  const handleLogin = (data: ILoginForm) => {
    dispatch(login(data));
  };
  return (
    <div className="container mx-auto">
      <div className="max-w-md p-5 mx-auto rounded-sm shadow-md my-14 bg-slate-100">
        <form
          className="flex flex-col w-full gap-y-5"
          onSubmit={handleSubmit(handleLogin)}
        >
          <input
            type="email"
            placeholder="Email"
            className="border-none"
            {...register("email")}
          />
          <input
            type="password"
            placeholder="Password"
            className="border-none"
            {...register("password")}
          />
          <button
            type="submit"
            className="p-3 text-white bg-slate-500 hover:bg-slate-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
