import { Form, redirect } from "react-router-dom";
import customFetch from "../utils/customFetch.js";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/users/login", data);
    return redirect("/");
  } catch (error) {
    console.error(error.statusText);
    return error;
  }
};
const Login = () => {
  return (
    <main className="main">
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
        <Form method="post" className="form">
          <div className="form__group">
            <label htmlFor="email" className="form__label">
              Email address
            </label>
            <input
              className="form__input"
              placeholder="you@example.com"
              required
              id="email"
              name="email"
              type="email"
            />
          </div>

          <div className="form__group ma-bt-md">
            <label htmlFor="password" className="form__label">
              Password
            </label>
            <input
              className="form__input"
              placeholder="••••••••"
              required
              minLength="8"
              id="password"
              name="password"
              type="password"
            />
          </div>

          <div className="form__group">
            <button className="btn btn--green">Login</button>
          </div>
        </Form>
      </div>
    </main>
  );
};

export default Login;
