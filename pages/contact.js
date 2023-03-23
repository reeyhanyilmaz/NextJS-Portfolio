import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { Col, Container, Row, Navbar, Form } from "react-bootstrap";
import { Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import "../styles/contact.css";
import { Icon } from "@iconify/react";
import {useSelector} from "react-redux";

export default function Contact() {
  // Initialize our states
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const isHamOpen = useSelector((state) => state.portfolio.isHamOpen);//state

  // Yup error message overrides
  const errMess = {
    req: "Please fill this out",
  };

  // Our Yup Schema for this form
  const ContactSchema = yup.object().shape({
    name: yup.string().label("Full Name").required(errMess.req).min(3).max(20),
    email: yup
      .string()
      .label("Email Address")
      .required(errMess.req)
      .email("Invalid Email Address"),
    message: yup
      .string()
      .label("Message")
      .required(errMess.req)
      .min(10)
      .max(1000),
  });

  // Destruct useForm() and set our Yup schema as the validation resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ContactSchema),
  });

  // Send our valid form data to our back-end API
  const submitForm = async (data) => {
    setIsSubmitting(true);

    const res = await axios({
      method: "POST",
      url: "/api/contact-form",
      data: data,
    })
      .then((res) => {
        setIsSubmitting(false);
        return res;
      })
      .catch((e) => {
        alert("An error occurred. See log for details.");
        console.error(e);
      });

    if (res.data.status === 1) {
      setIsSubmitted(true);
    } else {
      alert(res.data.message);
    }
  };

  return (
    <div className={`flex flex-col py-20 justify-center align-center min-w-full container ${isHamOpen ? "open" : "close"}`}>
      <Head>
        <title>RY | Contact</title>
      </Head>
      {!isSubmitted ? (
        <div >
          <p className="html">&lt;html&gt;</p>
          <p className="body">&lt;body&gt;</p>

          {/* <p className="h1 mt-5">&lt;h1&gt;</p>
          <h1 className="mb-5 text-center">
            If you want to get in touch, please fill out the form
          </h1>
          <p className="h1">&lt;h1 /&gt;</p> */}
          <p className="form mb-5">&lt;form&gt;</p>
          <main class="flexbox-col">
            <div class="form-wrapper">
              <form
                id="form"
                name="emailform"
                onSubmit={handleSubmit((data) => submitForm(data))}
              >
                <div class="form-input-grid">
                  <div controlId="nameField">
                    <p class="form-text">Username*</p>
                    <div class="form-input-wrapper flexbox-left">
                      {/* <i class="uil uil-user"></i> */}
                      {/* <Icon
                        icon="fluent-mdl2:profile-search"
                        color="#a1a6fc"
                        className="uil uil-user"
                      /> */}
                      <Icon icon="uil:user" className="icon"/>
                      <input
                        class="form-input"
                        id="uname"
                        name="uname"
                        type="text"
                        placeholder="Username"
                        aria-label=""
                        required
                        isInvalid={errors.name}
                        {...register("name")}
                      />
                    </div>
                  </div>

                  <div class="form-input-max" controlId="emailField">
                    <p class="form-text">Email*</p>
                    <div class="form-input-wrapper flexbox-left">
                    <Icon icon="uil:at" className="icon" />
                      <input
                        class="form-input"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        aria-label=""
                        required
                        isInvalid={errors.email}
                        {...register("email")}
                      />
                    </div>
                  </div>
                </div>

                <div class="form-input-max" controlId="messageField">
                  <div class="form-text">Message* </div>
                  <div
                    id="textarea"
                    class="form-input-wrapper flexbox-left-start"
                  >
                   <Icon icon="uil:comment-alt-heart" className="icon mt-5" />
                    <textarea
                      class="form-input"
                      id="message"
                      name="message"
                      placeholder="Please type your message..."
                      maxlength="500"
                      aria-label=""
                      required
                      isInvalid={errors.message}
                      {...register("message")}
                    ></textarea>
                  </div>
                </div>
                <div class="form-input-max flexbox-left ml-10">
                  <div class="button-wrapper ">
                    <button
                      id="form-button"
                      type="submit"
                      class="button btn-primary flex flex-row justify-center items-center text-xl font-medium"
                      // disabled={isSubmitting}
                    >
                      <Icon icon="uil:envelope-heart" className="text-4xl mr-3"/>
                      {isSubmitting ? "Sending..." : "Submit"}
                      <div class="btn-secondary"></div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </main>

          <p className="form mt-5" >&lt;form /&gt;</p>
          <p className="body">&lt;body /&gt;</p>
          <p className="html">&lt;html/&gt;</p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <p className="html">&lt;html&gt;</p>
          <p className="body">&lt;body&gt;</p>

          <p className="h1">&lt;h1&gt;</p>
          <h1>Thank you!</h1>
          <p className="h1">&lt;h1 /&gt;</p>
          <p className="p">&lt;p&gt;</p>
          <main class="flexbox-col">
            <div class="form-wrapper">
              <form id="form">
                <p>
                  Your message has been received. Please check your email for
                  confirmation.
                </p>
              </form>
            </div>
          </main>
          <p className="p">&lt;p /&gt;</p>
          <p className="body">&lt;body /&gt;</p>
          <p className="html">&lt;html/&gt;</p>
        </div>
      )}
    </div>
  );
}
