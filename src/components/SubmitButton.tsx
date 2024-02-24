"use client";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type={"submit"}
      disabled={pending}
      className="group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-slate-900 outline-none transition-all disabled:scale-100 disabled:bg-opacity-65 hover:scale-110 hover:bg-slate-950 focus:scale-110 active:scale-105 dark:bg-white dark:bg-opacity-10 dark:text-white"
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit
          <FaPaperPlane className="group:hover:translate-x-1 group:hover:-translate-y-1 text-xs transition-all" />
        </>
      )}
    </button>
  );
};

export default SubmitButton;
