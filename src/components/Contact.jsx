import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { RevealYUp, RevealYDown } from './Reveals';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

function Contact() {
  const { t } = useTranslation('contact');
  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const sendEmail = () => {
    emailjs.sendForm('service_rrwffo4', 'template_h6ym29s', form.current, 'BbLOH8Uh0FrFsiM4T').then(
      () => {
        console.log('SUCCESS!');
        alert('Messaggio inviato con successo!');
        reset(); // Resetta il form dopo l'invio
      },
      (error) => {
        console.log('FAILED...', error.text);
      }
    );
  };

  const onSubmit = (data, e) => {
    e.preventDefault();
    sendEmail();
  };

  return (
    <section
      id="contact"
      className="w-full md:min-h-screen bg-stone-200 dark:bg-[#000051] pt-20 pb-[100px] md:py-40 flex items-center transition-colors duration-500"
    >
      <div className="flex flex-col justify-center items-center w-full h-full px-5 md:px-16">
        <div className="max-w-[800px] w-full">
          <RevealYUp>
            <header className="md:text-center pb-8">
              <h2 className="text-4xl lg:text-6xl text-[#000051] dark:text-gray-100 font-bold inline border-b-4 border-[#ffbb00] uppercase">
                {t('title')}
              </h2>
              <p className="mt-4 lg:text-xl text-gray-400">{t('subtitle')}</p>
            </header>
          </RevealYUp>
          <div className="text-[#000051] dark:text-white mx-4">
            <RevealYDown>
              <form ref={form} onSubmit={handleSubmit(onSubmit)} aria-label="Contact Form">
                <div className="grid md:grid-cols-2 gap-4 w-full my-6">
                  <div className="flex flex-col relative">
                    <label
                      htmlFor="firstName"
                      className="uppercase absolute top-[-0.70rem] left-5 bg-stone-200 dark:bg-[#000051] px-2 rounded-xl"
                    >
                      {t('firstName')}
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      {...register('firstName', { required: true })}
                      className="border-2 rounded-lg p-3 flex border-[#000051] dark:border-white bg-stone-200 dark:bg-[#000051]"
                      placeholder={t('placeholderFirstName')}
                      aria-invalid={errors.firstName ? 'true' : 'false'}
                    />
                    {errors.firstName && (
                      <span className="mt-1 text-red-500" role="alert">
                        {t('error')}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col relative">
                    <label
                      htmlFor="lastName"
                      className="uppercase absolute top-[-0.70rem] left-5 bg-stone-200 dark:bg-[#000051] px-2 rounded-xl"
                    >
                      {t('lastName')}
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      {...register('lastName', { required: true })}
                      className="border-2 rounded-lg p-3 flex border-[#000051] dark:border-white bg-stone-200 dark:bg-[#000051]"
                      placeholder={t('placeholderLastName')}
                      aria-invalid={errors.lastName ? 'true' : 'false'}
                    />
                    {errors.lastName && (
                      <span className="mt-1 text-red-500" role="alert">
                        {t('error')}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 w-full my-6">
                  <div className="md:col-span-2 flex flex-col relative">
                    <label
                      htmlFor="email"
                      className="uppercase absolute top-[-0.70rem] left-5 bg-stone-200 dark:bg-[#000051] px-2 rounded-xl"
                    >
                      {t('email')}
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register('email', {
                        required: t('error'),
                        pattern: {
                          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                          message: t('invalidEmail'),
                        },
                      })}
                      className="border-2 rounded-lg p-3 flex border-[#000051] dark:border-white bg-stone-200 dark:bg-[#000051]"
                      placeholder={t('placeholderEmail')}
                      aria-invalid={errors.email ? 'true' : 'false'}
                    />
                    {errors.email && (
                      <span className="mt-1 text-red-500" role="alert">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col relative">
                    <label
                      htmlFor="phone"
                      className="uppercase absolute top-[-0.70rem] left-5 bg-stone-200 dark:bg-[#000051] px-2 rounded-xl"
                    >
                      {t('phone')}
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      {...register('phone', {
                        required: t('error'),
                        pattern: {
                          value: /^[0-9]+$/,
                          message: t('invalidPhone'),
                        },
                      })}
                      className="border-2 rounded-lg p-3 flex border-[#000051] dark:border-white bg-stone-200 dark:bg-[#000051]"
                      placeholder={t('placeholderPhone')}
                      aria-invalid={errors.phone ? 'true' : 'false'}
                    />
                    {errors.phone && (
                      <span className="mt-1 text-red-500" role="alert">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col relative my-6">
                  <label
                    htmlFor="message"
                    className="uppercase absolute top-[-0.70rem] left-5 bg-stone-200 dark:bg-[#000051] px-2 rounded-xl"
                  >
                    {t('message')}
                  </label>
                  <textarea
                    id="message"
                    {...register('message', { required: true })}
                    rows="6"
                    className="border-2 rounded-lg p-3 flex border-[#000051] dark:border-white bg-stone-200 dark:bg-[#000051]"
                    placeholder={t('placeholderMessage')}
                    aria-invalid={errors.message ? 'true' : 'false'}
                  ></textarea>
                  {errors.message && (
                    <span className="mt-1 text-red-500" role="alert">
                      {t('error')}
                    </span>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-[#ffbb00] text-[#000051] hover:bg-[#dba818] font-bold w-full p-3 rounded-lg active:scale-90 active:bg-[#b68f23] transition-all duration-300"
                >
                  {t('send')}
                </button>
              </form>
            </RevealYDown>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
