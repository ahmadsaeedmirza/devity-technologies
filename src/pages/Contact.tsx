import Layout from "@/components/devity/Layout";
import PageHero from "@/components/devity/PageHero";
import ContactForm from "@/components/devity/ContactForm";
import { Mail, Clock, MapPin } from "lucide-react";

const Contact = () => (
  <Layout>
    <PageHero
      eyebrow="Contact"
      title={<>Let's build something <span className="display-italic text-gradient-brand">exceptional.</span></>}
      description="Ready to scale? Drop us a message and our technical lead will reply within 24 hours. No sales loops, no discovery calls before there's substance."
    />

    <section className="pb-32">
      <div className="container grid lg:grid-cols-12 gap-12">
        <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-28 self-start">
          <div className="bg-mint-soft/40 border border-border p-8">
            <p className="label-mono mb-4">Direct lines</p>
            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <Mail className="w-5 h-5 text-teal mt-0.5 shrink-0" />
                <div>
                  <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-1">Email</div>
                  <a href="mailto:hello@devity.tech" className="text-foreground hover:text-teal transition-colors">
                    hello@devity.tech
                  </a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Clock className="w-5 h-5 text-teal mt-0.5 shrink-0" />
                <div>
                  <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-1">Response</div>
                  <div className="text-foreground">Within 24h, Mon–Fri</div>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-teal mt-0.5 shrink-0" />
                <div>
                  <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-1">Where</div>
                  <div className="text-foreground">Remote-first · IST / GMT</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-border p-8">
            <p className="label-mono mb-4">Engagement size</p>
            <ul className="space-y-3 font-mono text-sm text-foreground-soft">
              <li className="flex justify-between"><span>Audit / sprint</span><span className="text-foreground">$8K+</span></li>
              <li className="flex justify-between"><span>MVP build</span><span className="text-foreground">$30K+</span></li>
              <li className="flex justify-between"><span>Platform / SaaS</span><span className="text-foreground">$80K+</span></li>
            </ul>
          </div>
        </aside>

        <div className="lg:col-span-8 bg-background border border-border p-8 md:p-12 shadow-card">
          <ContactForm />
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
