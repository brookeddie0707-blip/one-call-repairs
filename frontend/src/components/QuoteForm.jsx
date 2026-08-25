import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react";
import { SERVICES, BUSINESS } from "@/data/site";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const inputCls =
  "w-full border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition-[border-color,background-color] duration-300 focus:border-gold/60 focus:bg-white/[0.08]";

export const QuoteForm = ({ defaultService = "" }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: defaultService,
    area: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API}/quotes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("failed");
      setDone(true);
      toast.success("Quote request received — we'll call you back shortly.");
    } catch {
      toast.error("Something went wrong. Please call or WhatsApp us instead.");
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div
        data-testid="quote-form-success"
        className="flex flex-col items-start gap-5 border border-gold/30 bg-gold/5 p-10"
      >
        <CheckCircle size={44} weight="fill" className="text-gold" />
        <h3 className="font-display text-3xl font-bold tracking-tight">Request received.</h3>
        <p className="max-w-md text-sm leading-relaxed text-slate-400">
          Thanks {form.name.split(" ")[0]} — your {form.service || "service"} request is in. We
          respond fast during working hours. Need us right now?
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={BUSINESS.phoneLink}
            data-testid="quote-success-call-button"
            className="rounded-full bg-gold px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-navy transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-gold-dark"
          >
            Call {BUSINESS.phoneDisplay}
          </a>
          <a
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="quote-success-whatsapp-button"
            className="rounded-full border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-slate-100 transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} data-testid="quote-form" className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="qf-name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Your Name *
          </label>
          <input
            id="qf-name"
            data-testid="quote-form-name-input"
            required
            minLength={2}
            value={form.name}
            onChange={set("name")}
            placeholder="Thabo Mokoena"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="qf-phone" className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Phone *
          </label>
          <input
            id="qf-phone"
            data-testid="quote-form-phone-input"
            required
            minLength={7}
            type="tel"
            value={form.phone}
            onChange={set("phone")}
            placeholder="073 000 0000"
            className={inputCls}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="qf-email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Email (optional)
          </label>
          <input
            id="qf-email"
            data-testid="quote-form-email-input"
            type="email"
            value={form.email}
            onChange={set("email")}
            placeholder="you@example.co.za"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="qf-area" className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Suburb / Area
          </label>
          <input
            id="qf-area"
            data-testid="quote-form-area-input"
            value={form.area}
            onChange={set("area")}
            placeholder="e.g. Sandton"
            className={inputCls}
          />
        </div>
      </div>

      <div>
        <label htmlFor="qf-service" className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Service Needed *
        </label>
        <select
          id="qf-service"
          data-testid="quote-form-service-select"
          required
          value={form.service}
          onChange={set("service")}
          className={`${inputCls} appearance-none bg-navy-surface`}
        >
          <option value="" disabled>
            Select a service…
          </option>
          {SERVICES.map((s) => (
            <option key={s.num} value={s.title} className="bg-navy-surface">
              {s.title}
            </option>
          ))}
          <option value="General Enquiry" className="bg-navy-surface">
            Something else
          </option>
        </select>
      </div>

      <div>
        <label htmlFor="qf-message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Tell Us More
        </label>
        <textarea
          id="qf-message"
          data-testid="quote-form-message-input"
          rows={4}
          value={form.message}
          onChange={set("message")}
          placeholder="e.g. DStv showing E48-32 since the storm last night…"
          className={`${inputCls} resize-none`}
        />
      </div>

      <button
        type="submit"
        data-testid="quote-form-submit-button"
        disabled={loading}
        className="group flex w-full items-center justify-center gap-3 rounded-full bg-gold px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-navy transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Sending…" : "Request My Quote"}
        {!loading && (
          <ArrowRight size={18} weight="bold" className="transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </button>
    </form>
  );
};
