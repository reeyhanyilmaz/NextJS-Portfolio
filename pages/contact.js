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

export default function Contact() {
  // Initialize our states
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

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
    <>
      <Head>
        <title>RY | Contact</title>
      </Head>
      {/* <Navbar bg="dark" expand="lg">
        <Navbar.Brand>
          <Link href="/">
            Home
          </Link>
        </Navbar.Brand>
      </Navbar> */}
      {/* <Container className="flex flex-column"> */}
      {!isSubmitted ? (
        <>
          <p>&lt;html&gt;</p>
          <p>&lt;body&gt;</p>

          <p>&lt;h1&gt;</p>
          <h1 className="mb-5">
            If you want to get in touch, please fill out the form
          </h1>
          <p>&lt;h1 /&gt;</p>
          <p>&lt;form&gt;</p>
          {/* <Form onSubmit={handleSubmit((data) => submitForm(data))}>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="nameField">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="e.g. John Doe"
                      isInvalid={errors.name}
                      {...register("name")}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="emailField">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="e.g. john@example.com"
                      isInvalid={errors.email}
                      {...register("email")}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col lg={12}>
                  <Form.Group className="mb-3" controlId="messageField">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Please type your message..."
                      isInvalid={errors.message}
                      {...register("message")}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.message?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </Button>
                </Col>
              </Row>
            </Form> */}

          <main class="flexbox-col">
            <div class="form-wrapper">
              <Form
                id="form"
                name="emailform"
                onSubmit={handleSubmit((data) => submitForm(data))}
              >
                {/* <p class="form-undertitle">Fields marked "*" are required.</p> */}
                <div class="form-input-grid" >
                  <div controlId="nameField">
                    <p class="form-text">Username*</p>
                    <div class="form-input-wrapper flexbox-left">
                      {/* <i class="uil uil-user"></i> */}
                      {/* <Icon
                        icon="fluent-mdl2:profile-search"
                        color="#a1a6fc"
                        className="uil uil-user"
                      /> */}
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
                  {/* <p type="invalid"> {errors.name?.message}</p> */}
                  {/* <div>
                    <p class="form-text">Password*</p>
                    <div class="form-input-wrapper flexbox-left">
                      <i class="uil uil-asterisk"></i>
                      <input
                        class="form-input"
                        id="pword"
                        name="pword"
                        type="password"
                        placeholder="Password"
                        aria-label=""
                        required
                      />
                    </div>
                  </div> */}

                  <div class="form-input-max" controlId="emailField">
                    <p class="form-text">Email*</p>
                    <div class="form-input-wrapper flexbox-left">
                      <i class="uil uil-at"></i>
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
                  {/* <p type="invalid"> {errors.email?.message}</p> */}
                </div>

                <div class="form-input-max" controlId="messageField">
                  <div class="form-text">Message* (Max 500)</div>
                  <div
                    id="textarea"
                    class="form-input-wrapper flexbox-left-start"
                  >
                    <i class="uil uil-comment-dots"></i>
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
                <div class="form-input-max flexbox-left">
                  <div class="button-wrapper">
                    <button
                      id="form-button"
                      type="submit"
                      class="button btn-primary"
                      // disabled={isSubmitting}
                    >
                      <i class="uil uil-envelope-heart"></i>  {isSubmitting ? "Sending..." : "Submit"}
                      <div class="btn-secondary"></div>
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          </main>

          <p>&lt;form /&gt;</p>
          <p>&lt;body /&gt;</p>
          <p>&lt;html/&gt;</p>
        </>
      ) : (
        <>
          <p>&lt;html&gt;</p>
          <p>&lt;body&gt;</p>

          <p>&lt;h1&gt;</p>
          <h1>Thank you!</h1>
          <p>&lt;h1 /&gt;</p>
          <p>&lt;p&gt;</p>
          <p>
            Your message has been received. Please check your email for
            confirmation.
          </p>
          <p>&lt;p /&gt;</p>
          <p>&lt;body /&gt;</p>
          <p>&lt;html/&gt;</p>
        </>
      )}
      {/* </Container> */}
    </>
  );
}
