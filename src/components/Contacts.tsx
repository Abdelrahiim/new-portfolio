"use client";

import SectionHeading from "./SectionHeading";
import { useSectionInView } from "~/lib/hooks";
import { motion } from "framer-motion";
import { cn } from "~/utils/cn";
import { useState } from "react";
import { type SendEmailFormState, sendEmail } from "~/actions/sendEmail";
import toast from "react-hot-toast";
import SubmitButton from "./SubmitButton";
const Contacts = () => {
  const { ref } = useSectionInView("Contact");
  const [formState, setFormState] = useState<SendEmailFormState>({
    errors: {},
  });
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-28 w-[min(100%,38rem)] sm:mb-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="-mt-5 text-center text-slate-700 dark:text-white/80">
        Please contact me directly at{" "}
        <a
          className="underline"
          href="mailto:abdelrhiimabdelmoneim@outlook.com"
        >
          abdelrhiimabdelmoneim@outlook.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { errors, success } = await sendEmail(formData);
          if (success) {
            toast.success(success?.message);
            return;
          }
          setFormState({ errors });
        }}
      >
        <input
          className={cn(
            "my-3 h-14 rounded-lg px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100",
            formState.errors.email ? "border-red-500" : "borderBlack",
          )}
          name="email"
          type="email"
          placeholder="Your Email"
        />
        {formState.errors.email && (
          <div className="mb-4 rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-800 dark:border-red-800 dark:bg-slate-800 dark:text-red-400">
            {formState.errors.email.join(", ")}
          </div>
        )}

        <textarea
          className={cn(
            "my-3 h-52 rounded-lg p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100",
            formState.errors.message ? "border-red-500" : "borderBlack",
          )}
          name="message"
          placeholder="Your Message"
        />
        {formState.errors.message && (
          <div className="mb-4 rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-800 dark:border-red-800 dark:bg-slate-800 dark:text-red-400">
            {formState.errors.message.join(", ")}
          </div>
        )}
        <SubmitButton />
        {formState.errors._form && (
          <div className="mb-4 rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-800 dark:border-red-800 dark:bg-slate-800 dark:text-red-400">
            {formState.errors._form.join(", ")}
          </div>
        )}
      </form>
    </motion.section>
  );
};

export default Contacts;
