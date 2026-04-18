import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Full Solution" },
      { name: "description", content: "Get in touch with Full Solution about wholesale, private label and contract manufacturing." },
      { property: "og:title", content: "Contact — Full Solution" },
      { property: "og:description", content: "Speak with our wholesale team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="container-page py-20 md:py-28 grid lg:grid-cols-2 gap-16">
      <div>
        <p className="eyebrow">Contact</p>
        <h1 className="mt-4 font-serif text-5xl md:text-6xl leading-[1.05]">
          Let's build the next{" "}
          <span className="italic text-gold-gradient">shelf hero</span> together.
        </h1>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          Our wholesale team responds to every enquiry within one business day.
        </p>

        <div className="mt-10 space-y-5">
          {[
            { i: Mail, l: "Email", v: "hello@fullsolution.vip" },
            { i: Phone, l: "Phone", v: "+27 (0) 11 000 0000" },
            { i: MapPin, l: "HQ", v: "Johannesburg, South Africa" },
          ].map(({ i: Icon, l, v }) => (
            <div key={l} className="flex items-start gap-4">
              <div className="size-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <Icon className="size-4 text-gold" />
              </div>
              <div>
                <p className="eyebrow">{l}</p>
                <p className="mt-1">{v}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <form
        className="rounded-3xl border border-border bg-card p-8 md:p-10 space-y-4 self-start"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message sent — we'll be in touch shortly.");
        }}
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <input required placeholder="Full name" className="w-full rounded-full border border-border bg-background px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40" />
          <input required placeholder="Company" className="w-full rounded-full border border-border bg-background px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40" />
        </div>
        <input required type="email" placeholder="Work email" className="w-full rounded-full border border-border bg-background px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40" />
        <select className="w-full rounded-full border border-border bg-background px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40">
          <option>Wholesale enquiry</option>
          <option>Private label</option>
          <option>Bespoke development</option>
          <option>Press / media</option>
          <option>Other</option>
        </select>
        <textarea rows={5} placeholder="How can we help?" className="w-full rounded-3xl border border-border bg-background px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40" />
        <button type="submit" className="w-full rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-medium hover:opacity-90 transition">
          Send message
        </button>
      </form>
    </section>
  );
}
