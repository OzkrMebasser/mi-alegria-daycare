"use client";

import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Contact() {
  const { t, i18n } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEmailClick = () => {
    const { name, email, subject, message } = formData;
    const body = `Nombre: ${name}\nEmail: ${email}\n\n${message}`;
    const mailtoLink = `mailto:mialegriadaycare@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-white to-primary-light/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-medium text-center text-gray-800 mb-2">
          {/* Contact Us */}
          {t("contact.title")}
        </h1>

        <h3 className="text-xl font-medium text-center text-gray-800 mb-12">
          {/* Need more time? We can help you with childcare */}
          {t("contact.subtitle")}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div className="relative py-3 sm:max-w-xl sm:mx-auto w-full">
            {/* Decorative Backgrounds */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform sm-skew-y-6 sm:skew-y-0 sm:-rotate-6 -rotate-[5deg] rounded-3xl" />

            <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-yellow-500 shadow-lg transform smskew-y-6 sm:skew-y-0 sm:rotate-6 rotate-[5deg] rounded-3xl" />

            <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg rounded-3xl sm:p-10">
              <div className="text-center pb-6">
                <h2 className="text-3xl">{t("contact.formTitle")}</h2>
                <p className="text-gray-300">{t("contact.formSubtitle")}</p>
              </div>

              <form>
                <input
                  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder={t("contact.form.name") }
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />

                <input
                  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder={t("contact.form.email")}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />

                <input
                  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder={t("contact.form.subject")}
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />

                <textarea
                  className="shadow mb-4 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder={
                    t("contact.form.message") || "Type your message here..."
                  }
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  style={{ height: "121px" }}
                ></textarea>

                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={handleEmailClick}
                    className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    {t("contact.form.submit") || "Send"} ➤
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Image */}
          <div className="flex justify-center">
            <img
              src="https://images.pexels.com/photos/4959712/pexels-photo-4959712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Contact us"
              className="rounded-lg shadow-lg w-full h-auto object-cover max-h-[500px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
