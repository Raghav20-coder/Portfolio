import { FormEvent, useState } from 'react';

export function Contact() {
  const [status, setStatus] = useState<'idle'|'sending'|'sent'>('idle');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus('sending');
    // Simulate send
    setTimeout(() => {
      console.log('Contact form submitted', data);
      setStatus('sent');
      form.reset();
    }, 800);
  };

  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Get in touch</h3>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Have a question or want to collaborate? Send a message or reach me below.</p>
        <form onSubmit={onSubmit} className="mt-6 card p-5 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-600 dark:text-slate-300">Name</label>
              <input name="name" required className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm text-slate-600 dark:text-slate-300">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-slate-600 dark:text-slate-300">Message</label>
            <textarea name="message" required rows={5} className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
              <a href="https://linkedin.com/in/raghavdixit09/" target="_blank" rel="noreferrer" className="hover:text-blue-600">LinkedIn</a>
              <a href="https://github.com/Raghav20-coder" target="_blank" rel="noreferrer" className="hover:text-blue-600">GitHub</a>
              <a href="mailto:raghavdixit8413@gmail.com" className="hover:text-blue-600">Email</a>
              <a href="tel:+918449000480" className="hover:text-blue-600">Phone</a>
            </div>
            <button disabled={status!=='idle'} className="btn btn-accent disabled:opacity-60">
              {status==='sending'?'Sending…':status==='sent'?'Sent ✓':'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}



