import React, { useState } from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import "../styles/contact.css";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";

//chakra
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Contact() {
  // Initialize our states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const isHamOpen = useSelector((state) => state.portfolio.isHamOpen); //state
  const router = useRouter();

  //bu kısmı modal kapanınca inputlar boş olsun diye yazdım
  const [inputName, setInputName] = useState("");
  const [inputMail, setInputMail] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  const handleInputName = (e) => {
    setInputName(e.target.value);
  };

  const handleInputMail = (e) => {
    setInputMail(e.target.value);
  };

  const handleInputMessage = (e) => {
    setInputMessage(e.target.value);
  };

  // Yup error message overrides
  const errMess = {
    req: "Please fill this out",
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setInputName("");
    setInputMail("");
    setInputMessage("");
    router.push("/contact");
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
    <div
    id="contact_page"
      className={` contect flex flex-col py-20 justify-center align-center min-w-full container ${
        isHamOpen ? "open" : "close"
      }`}
    >
      <Head>
        <title>Contact</title>
      </Head>

      <div>
        <p className="html">&lt;html&gt;</p>
        <p className="body">&lt;body&gt;</p>
        <p className="form mb-5">&lt;form&gt;</p>
        <main className="flexbox-col ">
          <div className="form-wrapper flex flex-col">
            <form
              id="form"
              name="emailform"
              onSubmit={handleSubmit((data) => submitForm(data))}
            >
              <p className="flex flex-row justify-content items-center mb-5 text-xl text-center ml-10">
                If you want to contact me, please send an e-mail.
                <Icon icon="noto:purple-heart" className="heart ml-2" />
              </p>
              <div className="form-input-grid">
                <div>
                 
                  <p className="form-text">  <Icon icon="uil:user" className="icon" /> Username*</p>
                  <div className="form-input-wrapper flexbox-left">
                    <input
                      className="form-input"
                      id="uname"
                      name="uname"
                      type="text"
                      placeholder="Username"
                      aria-label=""
                      required
                      {...register("name")}
                      value={inputName}
                      onChange={handleInputName}
                    />
                  </div>
                </div>

                <div>
                  <p className="form-text">
                  <Icon icon="uil:at" className="icon" /> Email*</p>
                  <div className="form-input-wrapper flexbox-left">
                    <input
                      className="form-input"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      aria-label=""
                      required
                      {...register("email")}
                      value={inputMail}
                      onChange={handleInputMail}
                    />
                  </div>
                </div>
              </div>

              <div>
                
                <p className="form-text"><Icon icon="uil:comment-alt-heart" className="icon" /> Message* (Min 10 characters)</p>
                <div
                  id="textarea"
                  className="form-input-wrapper flexbox-left-start"
                >
                  <textarea
                    className="form-input"
                    id="message"
                    name="message"
                    placeholder=" Please type your message..."
                    maxLength="500"
                    aria-label=""
                    required
                    {...register("message")}
                    value={inputMessage}
                    onChange={handleInputMessage}
                  ></textarea>
                </div>
              </div>

              <div className="button-wrapper ">
                <button
                  id="form-button"
                  type="submit"
                  className="button btn-primary flex flex-row justify-center items-center text-xl font-bold"
                >
                  <Icon  icon= {isSubmitting ? "" : "uil:envelope-heart"} className="text-4xl mr-3 button_icon" />
                  {isSubmitting ? "Sending..." : "Submit"}
                  <div className="btn-secondary"></div>
                </button>
              </div>
            </form>
          </div>
        </main>
        <p className="form">&lt;form /&gt;</p>
        <p className="body">&lt;body /&gt;</p>
        <p className="html">&lt;html /&gt;</p>

        <Modal
          onClose={handleClose}
          isOpen={isSubmitted}
          isCentered
          motionPreset="scale"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Thank You!</ModalHeader>
            <ModalCloseButton className="modeCloseBtn" />
            <ModalBody>
              Your message has been received. Please check your email for
              confirmation.
            </ModalBody>
            <ModalFooter>
              <Button onClick={handleClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}
