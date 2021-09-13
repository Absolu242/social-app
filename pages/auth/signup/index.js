import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useFormik } from "formik"
import * as Yup from "yup"

import { AuthContainer } from "../../../styles/Auth.styles"

async function createUser(info) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify(info),
    headers: {
      "Content-Type": "application/json",
    },
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!")
  }

  return response
}

export default function Signup() {
  const [isSuccess, setIsSuccess] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (isSuccess) {
      router.push("/auth/login")
    }
  }, [isSuccess, router])

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      username: "",
      password: "",
      terms: false,
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .max(15, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      username: Yup.string()
        .max(20, "Must be 15 characters or less")
        .required("Required"),
      password: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      terms: Yup.boolean().oneOf(
        [true],
        "You must accept the terms and conditions"
      ),
    }),
    onSubmit: async (values) => {
      const result = await createUser(values)

      if (result.ok) {
        setIsSuccess(true)
      }
    },
  })

  return (
    <AuthContainer>
      <div className='auth__wrapper'>
        <div className='auth__wrapper--top'>
          <div className='logo'>
            <img src='../images/logo.png' alt='logo' />
          </div>

          <form>
            <select id='mySelect'>
              <option value='en'>English(USA)</option>
              <option value='fr'>Francais</option>
            </select>
          </form>
        </div>

        <div className='auth__wrapper--content'>
          <div className='content_top'>
            <h1>Sign up to CaDas</h1>
            <p>
              Alreday have an account ?{" "}
              <Link href='/auth/login'>
                <a>Sign in</a>
              </Link>
            </p>
          </div>

          <div className='content_form'>
            <form onSubmit={formik.handleSubmit}>
              <div className='form--item'>
                <input
                  className='form--item_input'
                  type='text'
                  placeholder=''
                  {...formik.getFieldProps("fullname")}
                />
                <label htmlFor='' className='form--item_label'>
                  Full Name
                </label>
                {formik.touched.fullname && formik.errors.fullname ? (
                  <div className='error-msg'>{formik.errors.fullname}</div>
                ) : null}
              </div>

              <div className='form--item'>
                <input
                  className='form--item_input'
                  type='text'
                  placeholder=''
                  {...formik.getFieldProps("username")}
                />
                <label htmlFor='' className='form--item_label'>
                  Username
                </label>
                {formik.touched.username && formik.errors.username ? (
                  <div className='error-msg'>{formik.errors.username}</div>
                ) : null}
              </div>

              <div className='form--item'>
                <input
                  className='form--item_input'
                  type='email'
                  placeholder=''
                  {...formik.getFieldProps("email")}
                />
                <label htmlFor='' className='form--item_label'>
                  Email
                </label>
                {formik.touched.email && formik.errors.email ? (
                  <div className='error-msg'>{formik.errors.email}</div>
                ) : null}
              </div>

              <div className='form--item'>
                <input
                  className='form--item_input'
                  type='password'
                  placeholder=''
                  {...formik.getFieldProps("password")}
                />
                <label className='form--item_label'>Password</label>
                {formik.touched.password && formik.errors.password ? (
                  <div className='error-msg'>{formik.errors.password}</div>
                ) : null}
              </div>

              <div className='form--item'>
                <div className='form--item_check'>
                  <input
                    type='checkbox'
                    name='terms'
                    {...formik.getFieldProps("terms")}
                  />
                  <p>
                    By creating an account, you agree to our{" "}
                    <Link href='/'>
                      <a>Privacy Policy, Term and Conditions </a>
                    </Link>{" "}
                    and{" "}
                    <Link href='/'>
                      <a>Notification settings </a>
                    </Link>
                  </p>
                </div>
                {formik.touched.terms && formik.errors.terms ? (
                  <div className='error-msg'>{formik.errors.terms}</div>
                ) : null}
              </div>

              <div className='form--item_btns'>
                <span>
                  <button className='btn-primary'>Create Account</button>
                </span>
                <p className='btn-divider'>OR</p>
                <span>
                  <button className='btn-secondary btn-google'>
                    <img src='../icons/google.png' alt='google logo' />{" "}
                    <p>Continue with Google</p>
                  </button>
                </span>
                <span>
                  <button className='btn-secondary btn-facebook'>
                    <img src='../icons/facebook.png' alt='facebook logo' />
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
        <img
          className='auth__banner'
          src='../images/authImage.png'
          alt='banner'
        />
      </div>
    </AuthContainer>
  )
}
