import React from "react";

const Contact = () => {
  return (
    <div className=" container mx-auto">
      <h2 className=" text-2xl sm:text-3xl md:text-4xl text-center  m-10">
        Get in Touch
      </h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116302.8384081535!2d91.46574995374068!3d24.36516746217412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751684a2e2ae12b%3A0xb02bd1fdff59a650!2sBahubal%20Upazila!5e0!3m2!1sen!2sbd!4v1689511353342!5m2!1sen!2sbd"
        width="100%"
        title="name"
        height="500"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="fast"
        referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="box">
        <div className="contact_form gap-4 leading-10 bg-slate-200 ">
          <form
            action="https://formspree.io/f/mqkvkrrn"
            method="POST"
            className="p-10">
            <input
              className="w-[50%] py-2 rounded-lg mb-4"
              type="text"
              placeholder=" Name"
              name="username"
              required
              autoComplete="off"
            />

            <input
              className="w-[50%] py-2 rounded-lg mb-4"
              type="tex"
              name="email"
              placeholder=" E-mail"
              autoComplete="off"
              required
            />

            <textarea
              className="w-[50%] py-2 rounded-lg mb-4"
              name="message"
              cols="30"
              rows="5"
              autoComplete="off"
              placeholder=" Enter your message..."></textarea>
            <input
              className=" py-2 px-8 rounded-lg text-white font-bold uppercase bg-blue-400"
              type="submit"
              value="SEND"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
