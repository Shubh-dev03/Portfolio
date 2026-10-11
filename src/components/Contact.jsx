import { useState } from "react";
import emailjs from "@emailjs/browser";

import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// ── DATA ──────────────────────────────────────────────────────────────────────

const contactLinks = [
  {
    label: "Email",
    value: "shubhambharti478@gmail.com",
    icon: <HiOutlineMail size={20} />,
    href: "mailto:shubhambharti478@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/Shubh-dev03",
    icon: <FaGithub size={18} />,
    href: "https://github.com/Shubh-dev03",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/shubham-s-bharti",
    icon: <FaLinkedin size={18} />,
    href: "https://linkedin.com/in/shubham-s-bharti",
  },
  {
    label: "Phone",
    value: "+91 7620395855",
    icon: <FaPhone size={16} />,
    href: "tel:+917620395855",
  },
];

// ── COMPONENT ─────────────────────────────────────────────────────────────────
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Bug 3 fix — guard missing env vars early
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS env vars are missing. Check your .env file.");
      alert("Configuration error — please contact the site owner.");
      return;
    }

    setLoading(true); // Bug 2 fix — disable button while sending

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        { publicKey }, // Bug 1 fix — object, not a raw string
      );

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert(
        `Failed to send message: ${error?.text ?? error?.message ?? "Unknown error"}`,
      );
    } finally {
      setLoading(false); // always re-enable button
    }
  }

  return (
    <section id="contact" className="on-dark bg-ink py-24 text-chalk md:py-32">
      <div className="wrap">
        <SectionHeading
          title={
            <>
              Let&apos;s Build Something Great{" "}
              <br className="hidden lg:block" />
              Together
            </>
          }
        />

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Info */}
          <Reveal className="lg:col-span-5">
            <h3 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
              Looking for Internship Opportunities
            </h3>

            <p className="mt-4 max-w-[30rem] text-pretty text-chalk/75">
              I&apos;m actively seeking backend or full-stack internship
              opportunities where I can contribute to real-world systems and
              grow as an engineer. Let&apos;s connect if you&apos;re looking for
              someone passionate about building scalable APIs!
            </p>

            <p className="mt-6 flex items-center gap-2 text-chalk/75">
              <HiOutlineLocationMarker
                size={18}
                className="shrink-0 text-signal"
                aria-hidden="true"
              />
              Nashik, Maharashtra — Open to Remote
            </p>

            <ul className="mt-10 flex flex-col">
              {contactLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group -mx-4 flex items-center gap-4 rounded-2xl px-4 py-3.5 transition-colors duration-300 hover:bg-chalk/[0.06]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-chalk/10 text-signal transition-colors duration-300 group-hover:bg-signal group-hover:text-ink">
                      {item.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-sm font-medium text-chalk/60">
                        {item.label}
                      </span>
                      <span className="block break-words text-lg">
                        {item.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Form */}
          <Reveal className="lg:col-span-7" delay={100}>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-7 rounded-[28px] bg-pine p-6 sm:p-8 md:p-10"
            >
              <h3 className="font-display text-2xl font-bold tracking-tight">
                Send a Message
              </h3>

              <div className="grid gap-7 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="font-display text-sm font-medium text-chalk/70"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Alex Johnson"
                    className="field"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="font-display text-sm font-medium text-chalk/70"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@example.com"
                    className="field"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="font-display text-sm font-medium text-chalk/70"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Let's work together!"
                  className="field"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="font-display text-sm font-medium text-chalk/70"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="field resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                aria-live="polite"
                className={`btn btn-signal self-start px-8 py-4 max-sm:w-full ${
                  submitted ? "!bg-chalk" : ""
                }`}
              >
                {submitted ? (
                  <span>✓ Message Sent!</span>
                ) : loading ? (
                  <span>Sending..</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
