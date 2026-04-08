import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How do I place an order?",
    answer: "You can browse our collections and tap 'Order on WhatsApp' to speak directly with our team. We'll guide you through pricing, availability, and delivery.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship worldwide. Delivery times and costs vary by location. Contact us on WhatsApp for a shipping quote.",
  },
  {
    question: "Are your jewelry pieces authentic?",
    answer: "Absolutely. Every piece in our collection is carefully curated and authenticated. We stand behind the quality and craftsmanship of everything we sell.",
  },
  {
    question: "Can I return or exchange an item?",
    answer: "We accept returns and exchanges within 7 days of delivery, provided the item is in its original condition. Please contact us to initiate a return.",
  },
  {
    question: "Do you offer custom or bespoke pieces?",
    answer: "Yes, we can work with you to create custom jewelry pieces. Reach out to us on WhatsApp to discuss your vision.",
  },
  {
    question: "How do I care for my jewelry?",
    answer: "We recommend storing your pieces in a cool, dry place and avoiding contact with perfumes and chemicals. Clean gently with a soft cloth.",
  },
];

const FAQs = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label">SUPPORT</p>
          <h1 className="text-3xl md:text-5xl tracking-[0.04em] mt-4" style={{ fontFamily: "var(--font-display)" }}>
            Frequently Asked Questions
          </h1>
          <div className="gold-line mt-6" />
        </motion.div>
      </section>

      {/* FAQ List */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="space-y-8">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="border-b border-border/30 pb-8"
            >
              <h3
                className="text-[13px] md:text-[14px] tracking-[0.12em] uppercase font-medium mb-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {faq.question}
              </h3>
              <p
                className="text-muted-foreground text-sm leading-relaxed font-normal"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQs;
