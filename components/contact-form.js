import { useForm, ValidationError } from "@formspree/react";
// icons
import { BsArrowRight } from 'react-icons/bs';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xbjnjddb");

  if (state.succeeded) {
    return <div className="w-full flex flex-col items-center justify-center">
        <p>Thanks for your submission!</p>
        <br />
        <a href="/">
        <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
      <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
            Go Home
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
      </button></a>
    </div> 
    ;
  }

  return (
    <form onSubmit={handleSubmit}  className='flex-1 flex flex-col gap-6 w-full mx-auto'>
          <div className='flex gap-x-6 w-full'>
              <input id="name" name="name" type='text' placeholder='Name' className='input' />
              <input id="email" name="email" type="email" placeholder="Email" className="input" />
            </div>      
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" className="textarea" placeholder="Message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting} className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
      <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Let's talk
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
}
