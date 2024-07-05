import React from 'react';

function Contact() {
  return (
    <section id="contact" className="w-full h-auto md:h-screen bg-[#000051] text-gray-300 py-40">
      <div className="flex flex-col justify-center items-center w-full h-full px-5 md:px-16">
        <div className="max-w-[1000px] w-full">
          <div className="md:text-center pb-8">
            <h2 className="text-4xl lg:text-6xl font-bold inline border-b-4 border-[#ffbb00]">CONTACT</h2>
            <p className="mt-4 lg:text-xl">Get in touch</p>
          </div>
          <div className="CONTACT-CONTENT text-white mx-4">
            <form action="" className="CONTACT-FORM">
              <div className="grid md:grid-cols-2 gap-4 w-full my-6">
                <div className="CONTACT-FORM-DIV flex flex-col relative ">
                  <label
                    htmlFor=""
                    className="CONTACT-FORM-TAG uppercase absolute top-[-0.70rem] left-5 bg-[#000051] px-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="CONTACT-FORM-INPUT border-2 rounded-lg p-3 flex border-white bg-[#000051]"
                    placeholder="Insert your name"
                  />
                </div>

                <div className="CONTACT-FORM-DIV flex flex-col relative mt-2 md:mt-0">
                  <label
                    htmlFor=""
                    className="CONTACT-FORM-TAG uppercase absolute top-[-0.70rem] left-5 bg-[#000051] px-2"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    className="CONTACT-FORM-INPUT border-2 rounded-lg p-3 flex border-white bg-[#000051]"
                    placeholder="Insert your phone number"
                  />
                </div>
              </div>

              <div className="CONTACT-FORM-DIV flex flex-col relative my-6">
                <label
                  htmlFor=""
                  className="CONTACT-FORM-TAG uppercase absolute top-[-0.70rem] left-5 bg-[#000051] px-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="CONTACT-FORM-INPUT border-2 rounded-lg p-3 flex border-white bg-[#000051]"
                  placeholder="Insert your email"
                />
              </div>

              <div className="CONTACT-FORM-DIV flex flex-col relative my-6">
                <label
                  htmlFor=""
                  className="CONTACT-FORM-TAG uppercase absolute top-[-0.70rem] left-5 bg-[#000051] px-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  rows="10"
                  className="border-2 rounded-lg p-3 flex border-white bg-[#000051]"
                  placeholder="Write your message"
                ></textarea>
              </div>
              <button className="bg-[#ffbb00] text-[#000051] font-bold w-full p-3 rounded-lg">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
