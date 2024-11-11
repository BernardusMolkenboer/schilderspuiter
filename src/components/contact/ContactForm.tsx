"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResultMessage(null);

    const payload = {
      fields: [
        { name: "name", value: formData.name },
        { name: "email", value: formData.email },
        { name: "phone", value: formData.phone },
        { name: "service", value: formData.service },
        { name: "message", value: formData.message },
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title,
      },
    };

    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID}/${process.env.NEXT_PUBLIC_HUBSPOT_CONTACT_FORM_GUID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        setResultMessage("Bedankt! Uw bericht is succesvol verzonden.");
      } else {
        const errorData = await response.json();
        console.error("Error response from HubSpot:", errorData);
        setResultMessage(
          "Er is iets misgegaan bij het verzenden van uw bericht. Probeer het opnieuw."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResultMessage(
        "Er is een onverwachte fout opgetreden. Probeer het later opnieuw."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="rounded-lg bg-muted/10 p-8 shadow-md lg:p-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground">
          Stuur ons een bericht
        </h2>
        <p className="mt-2 text-muted-foreground">
          Vul het formulier in en we nemen zo snel mogelijk contact met u op.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-muted-foreground"
            >
              Naam
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-xl border border-border bg-muted/10 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/50"
              placeholder="Uw volledige naam"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-muted-foreground"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-xl border border-border bg-muted/10 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/50"
                placeholder="uw@email.nl"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-muted-foreground"
              >
                Telefoon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-xl border border-border bg-muted/10 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/50"
                placeholder="06 12345678"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="service"
              className="block text-sm font-medium text-muted-foreground"
            >
              Dienst
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-xl border border-border bg-muted/10 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/50"
            >
              <option value="">Selecteer een dienst</option>
              <option value="spackspuiten">Spackspuiten</option>
              <option value="verfspuiten">Verfspuiten</option>
              <option value="schilderwerk">Schilderwerk</option>
              <option value="speciaal">Speciale Technieken</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-muted-foreground"
            >
              Bericht
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="mt-1 block w-full resize-none rounded-xl border border-border bg-muted/10 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/50"
              placeholder="Beschrijf uw project of vraag..."
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center rounded-xl bg-primary px-8 py-4 text-white transition-all duration-300 hover:bg-primary/80 disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Verzenden...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Verstuur Bericht
            </>
          )}
        </button>
      </form>

      {resultMessage && (
        <div
          className={`mt-4 rounded-xl p-4 ${
            resultMessage.includes("succesvol")
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {resultMessage}
        </div>
      )}
    </div>
  );
}
