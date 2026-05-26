import { useState } from "react";
import emailjs from "@emailjs/browser";

import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";

// ── DATA ──────────────────────────────────────────────────────────────────────

const contactLinks = [
  {
    label: "EMAIL",
    value: "shubhambharti478@gmail.com",
    icon: <HiOutlineMail size={20} />,
    iconBg: "bg-[#EEF2FF] border border-[#C7D2FE]",
    iconColor: "text-[#3730A3]",
    href: "mailto:shubhambharti478@gmail.com",
  },
  {
    label: "GITHUB",
    value: "github.com/Shubh-dev03",
    icon: <FaGithub size={18} />,
    iconBg: "bg-[#FFF8EE] border border-[#F0E6D3]",
    iconColor: "text-[#1C1917]",
    href: "https://github.com/Shubh-dev03",
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/shubham-s-bharti",
    icon: <FaLinkedin size={18} />,
    iconBg: "bg-[#E6FFFA] border border-[#99F6E4]",
    iconColor: "text-[#0D9488]",
    href: "https://linkedin.com/in/shubham-s-bharti",
  },
  {
    label: "PHONE",
    value: "+91 7620395855",
    icon: <FaPhone size={16} />,
    iconBg: "bg-[#FFF7ED] border border-[#FED7AA]",
    iconColor: "text-[#D97706]",
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
    <div id="contact" className="mt-24 pb-16">
      {/* Section heading */}
      <div className="text-white flex flex-col items-center mb-16">
        <p className="text-[#7c3aed] tracking-[0.3rem] text-sm uppercase mb-3">
          Get In Touch
        </p>
        <h2 className="font-bold text-[#1C1917] text-4xl md:text-5xl text-center leading-tight">
          Let's Build Something Great <br /> Together
        </h2>
        <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#06b6d4]" />
      </div>

      {/* Two-column layout */}
      <div className="flex flex-col md:flex-row gap-8 px-6 md:px-16">
        {/* ── LEFT — Info card ───────────────────────────────────────────── */}
        <div
          className="flex flex-col gap-6 rounded-2xl p-6 md:p-8 md:max-w-[420px] w-full"
          style={{
            background: "#FFF8EE",
            border: "1px solid #F0E6D3",
            borderTop: "2px solid",
            borderImage: "linear-gradient(90deg, #3730A3, #0D9488) 1",
          }}
        >
          <div>
            <h3 className="text-[#1C1917] font-bold text-xl mb-3">
              Looking for Internship Opportunities
            </h3>
            <p className="text-[#78716C] text-sm leading-relaxed">
              I'm actively seeking backend or full-stack internship
              opportunities where I can contribute to real-world systems and
              grow as an engineer. Let's connect if you're looking for someone
              passionate about building scalable APIs!
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-[#78716C] text-sm">
            <HiOutlineLocationMarker size={16} className="text-[#3730A3]" />
            <span>Nashik, Maharashtra — Open to Remote</span>
          </div>

          {/* Contact link cards — looped */}
          <div className="flex flex-col gap-3">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-4 py-3 rounded-xl
                  bg-[#FFFBF5] border border-[#F0E6D3]
                  hover:border-[#3730A3] hover:bg-[#F5F3FF]
                  transition-all duration-300 group"
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${item.iconBg} ${item.iconColor}`}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] tracking-widest text-[#78716C] uppercase">
                    {item.label}
                  </p>
                  <p className="text-sm text-[#1C1917] group-hover:text-[#3730A3] transition-colors duration-200 break-all">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ── RIGHT — Contact form ───────────────────────────────────────── */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 rounded-2xl p-8 flex-1"
          style={{
            background: "#FFF8EE",
            border: "1px solid #F0E6D3",
          }}
        >
          <h3 className="text-[#1C1917] font-bold text-xl">Send a Message</h3>

          {/* Name + Email row */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-1.5 flex-1">
              <label className="text-[#78716C] text-sm">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Alex Johnson"
                className="px-4 py-3 rounded-xl text-[#000000] text-sm placeholder-[#A8A29E]
                  bg-[#FFFBF5] border border-[#F0E6D3]
                  focus:outline-none focus:border-[#3730A3] focus:ring-1 focus:ring-[#3730A3]/20
                  transition-all duration-200"
              />
            </div>
            <div className="flex flex-col gap-1.5 flex-1">
              <label className="text-[#78716C] text-sm">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="alex@example.com"
                className="px-4 py-3 rounded-xl text-[#000000] text-sm placeholder-[#A8A29E]
                  bg-[#FFFBF5] border border-[#F0E6D3]
                  focus:outline-none focus:border-[#3730A3] focus:ring-1 focus:ring-[#3730A3]/20
                  transition-all duration-200"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[#78716C] text-sm">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Let's work together!"
              className="px-4 py-3 rounded-xl text-[#000000] text-sm placeholder-[#A8A29E]
                bg-[#FFFBF5] border border-[#F0E6D3]
                focus:outline-none focus:border-[#3730A3] focus:ring-1 focus:ring-[#3730A3]/20
                transition-all duration-200"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5 flex-1">
            <label className="text-[#78716C] text-sm">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows={6}
              className="px-4 py-3 rounded-xl text-[#000000] text-sm placeholder-[#A8A29E]
                bg-[#FFFBF5] border border-[#F0E6D3] resize-none
                focus:outline-none focus:border-[#3730A3] focus:ring-1 focus:ring-[#3730A3]/20
                transition-all duration-200"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-4 rounded-xl text-white font-semibold flex items-center
              justify-center gap-2 transition-all duration-300 hover:opacity-90 hover:scale-[1.01]"
            style={{
              background: submitted
                ? "linear-gradient(90deg, #0D9488, #14B8A6)"
                : "linear-gradient(90deg, #3730A3, #0D9488)",
            }}
          >
            {submitted ? (
              "✓ Message Sent!"
            ) : loading ? (
              "Sending.."
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
