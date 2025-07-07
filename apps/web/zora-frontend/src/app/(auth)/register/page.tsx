import styles from "./page.module.css";
import Link from "next/link";

export default function Login() {
  return (
    <div className={"h-full flex flex-col justify-center items-center"}>
      <div
        className={
          styles.registerModal + " flex flex-col justify-center items-center"
        }
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="mb-10 flex flex-col items-center">
            <h2 className={"text-2xl/9 font-calistoga text-gray-600"}>
              Create an account
            </h2>
          </div>
        </div>
        <div className={styles.formWidth + " my-2"}>
          <form action="#" method="POST">
            <div>
              <div className="mt-2">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    placeholder="First Name"
                    id="firstname"
                    name="firstname"
                    type="firstname"
                    required
                    autoComplete="firstname"
                    className="block w-full rounded-4xl bg-white px-3 py-2.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                  <input
                    placeholder="Last Name"
                    id="lastname"
                    name="lastname"
                    type="lastname"
                    required
                    autoComplete="lastname"
                    className="block w-full rounded-4xl bg-white px-3 py-2.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
                <input
                  placeholder="Email address"
                  id="email"
                  name="email"
                  type="date"
                  required
                  autoComplete="email"
                  className="mt-5 block w-full rounded-4xl bg-white px-3 py-2.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                <input
                  placeholder="Email address"
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-5 block w-full rounded-4xl bg-white px-3 py-2.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                  autoComplete="current-password"
                  className="mt-5 block w-full rounded-4xl bg-white px-3 py-2.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                <input
                  id="reenter-password"
                  name="reenter-password"
                  type="password"
                  placeholder="Reenter Password"
                  required
                  autoComplete="reenter-password"
                  className="mt-5 block w-full rounded-4xl bg-white px-3 py-2.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className={
                  "mt-10 flex w-full justify-center rounded-4xl px-3 font-semibold py-2.5 text-sm/6 text-white " +
                  styles.submitButton
                }
              >
                Submit
              </button>
            </div>
          </form>
          <Link href="/">
            <button
              className={
                "mt-2 flex w-full justify-center font-semibold rounded-4xl px-3 py-2.5 text-sm/6 text-white " +
                styles.alreadyHaveAccountButton
              }
            >
              Already have an account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
