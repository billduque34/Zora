import styles from "./page.module.css";
import Link from "next/link";

export default function Login() {
  return (
    <div className={styles.login + " h-full grid grid-cols-4"}>
      <div className="col-span-3 flex flex-col justify-center items-center">
        <h1 className={styles.fontWelcome + " font-calistoga text-white"}>
          Welcome to Zora!
        </h1>
        <p className="font-calistoga text-white text-4xl">
          Where Communities Thrive and You Belong
        </p>
        <p className="font-sans italic text-white mt-7">
          Chat freely. Personalize your space. Connect your way.
        </p>
      </div>
      <div
        className={
          styles.loginModal + " flex flex-col justify-center items-center"
        }
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="mb-10 flex flex-col justify-center items-center">
            <h2 className={"mt-5 text-2xl/9 font-calistoga text-gray-600"}>
              Sign in to your account
            </h2>
          </div>
        </div>
        <div className="my-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <div className="mt-2">
                <input
                  placeholder="Email address"
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-4xl bg-white px-3 py-2.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                  autoComplete="current-password"
                  className="mt-2 block w-full rounded-4xl bg-white px-3 py-2.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className={
                  "mt-10 flex w-full justify-center rounded-4xl px-3 font-semibold py-2.5 text-sm/6 text-white " +
                  styles.signinButton
                }
              >
                Sign in
              </button>
              <Link href="#">
                <p
                  className={
                    styles.forgotPasswordLink +
                    " mt-4 text-center font-semibold text-sm/6 text-gray-600"
                  }
                >
                  Forgot Password?
                </p>
              </Link>
            </div>
          </form>

          <Link href="/register">
            <button
              className={
                "mt-10 flex w-full justify-center font-semibold rounded-4xl px-3 py-2.5 text-sm/6 text-white " +
                styles.createAccountButton
              }
            >
              Create an account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
