import React from 'react';
import { useForm } from 'react-hook-form';
import { RevealYUp, RevealYDown } from './Reveals';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation('contact');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section
      id="contact"
      className="w-full md:min-h-screen bg-stone-200 dark:bg-[#000051] pt-20 pb-[100px] md:py-40 flex items-center transition-colors duration-500"
    >
      <div className="flex flex-col justify-center items-center w-full h-full px-5 md:px-16">
        <div className="max-w-[800px] w-full">
          <RevealYUp>
            <div className="md:text-center pb-8">
              <h2 className="text-4xl lg:text-6xl text-[#000051] dark:text-gray-100 font-bold inline border-b-4 border-[#ffbb00] uppercase">
                {t('title')}
              </h2>
              <p className="mt-4 lg:text-xl text-gray-400">{t('subtitle')}</p>
            </div>
          </RevealYUp>
          <div className="text-[#000051] dark:text-white mx-4">
            <RevealYDown>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid md:grid-cols-2 gap-4 w-full my-6">
                  <div className="flex flex-col relative">
                    <label
                      htmlFor="firstName"
                      className="uppercase absolute top-[-0.70rem] left-5 bg-stone-200 dark:bg-[#000051] px-2 rounded-xl"
                    >
                      {t('firstName')}
                    </label>
                    <input
                      type="text"
                      {...register('firstName', { required: true })}
                      className="border-2 rounded-lg p-3 flex border-[#000051] dark:border-white bg-stone-200 dark:bg-[#000051]"
                      placeholder={t('placeholderFirstName')}
                    />
                    {errors.firstName && <span className="mt-1 text-red-500">{t('error')}</span>}
                  </div>

                  <div className="flex flex-col relative">
                    <label
                      htmlFor="lastName"
                      className="uppercase absolute top-[-0.70rem] left-5 bg-stone-200 dark:bg-[#000051] px-2 rounded-xl"
                    >
                      {t('lastName')}
                    </label>
                    <input
                      type="text"
                      {...register('lastName', { required: true })}
                      className="border-2 rounded-lg p-3 flex border-[#000051] dark:border-white bg-stone-200 dark:bg-[#000051]"
                      placeholder={t('placeholderLastName')}
                    />
                    {errors.lastName && <span className="mt-1 text-red-500">{t('error')}</span>}
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
                      type="text"
                      {...register('email', { required: true })}
                      className="border-2 rounded-lg p-3 flex border-[#000051] dark:border-white bg-stone-200 dark:bg-[#000051]"
                      placeholder={t('placeholderEmail')}
                    />
                    {errors.email && <span className="mt-1 text-red-500">{t('error')}</span>}
                  </div>

                  <div className="flex flex-col relative">
                    <label
                      htmlFor="phone"
                      className="uppercase absolute top-[-0.70rem] left-5 bg-stone-200 dark:bg-[#000051] px-2 rounded-xl"
                    >
                      {t('phone')}
                    </label>
                    <input
                      type="text"
                      {...register('phone', { required: true })}
                      className="border-2 rounded-lg p-3 flex border-[#000051] dark:border-white bg-stone-200 dark:bg-[#000051]"
                      placeholder={t('placeholderPhone')}
                    />
                    {errors.phone && <span className="mt-1 text-red-500">{t('error')}</span>}
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
                    {...register('message', { required: true })}
                    rows="6"
                    className="border-2 rounded-lg p-3 flex border-[#000051] dark:border-white bg-stone-200 dark:bg-[#000051]"
                    placeholder={t('placeholderMessage')}
                  ></textarea>
                  {errors.message && <span className="mt-1 text-red-500">{t('error')}</span>}
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
