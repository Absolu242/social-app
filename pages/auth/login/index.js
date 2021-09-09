import React from "react"
import Link from "next/link"
import { useFormik } from "formik"
import * as Yup from "yup"

import { AuthContainer } from "../../../styles/Auth.styles"

export default function Login() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      remember: false,
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(20, "Must be 15 characters or less")
        .required("Required"),
      password: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      remember: Yup.boolean().oneOf(
        [true || false],
        "You must accept the terms and conditions"
      ),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
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
            <h1>Let's Sign You In</h1>
            <p>
              Dont't have an account ?{" "}
              <Link href='/auth/signup'>
                <a>Sign up</a>
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
                  <span
                    style={{
                      display: "flex",
                    }}
                  >
                    <input
                      type='checkbox'
                      name='terms'
                      {...formik.getFieldProps("remember")}
                    />
                    <p>Remember Me</p>
                  </span>
                  <p
                    style={{
                      position: "absolute",
                      right: 0,
                    }}
                  >
                    <Link href='/'>
                      <a>Forgot Password ? </a>
                    </Link>
                  </p>
                </div>
                {formik.touched.remember && formik.errors.remember ? (
                  <div className='error-msg'>{formik.errors.remember}</div>
                ) : null}
              </div>

              <div className='form--item_btns'>
                <span>
                  <button className='btn-primary'>Login</button>
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
