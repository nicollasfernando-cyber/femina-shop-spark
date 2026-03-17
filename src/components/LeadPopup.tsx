import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Sparkles } from "lucide-react";

const LeadPopup = () => {
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [smsConsent, setSmsConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = (value: boolean) => {
    if (!value) {
      setOpen(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const trimmedName = firstName.trim();
    const trimmedEmail = email.trim();
    const phoneDigits = phone.replace(/\D/g, "");

    if (trimmedName.length < 2) { setErrorMsg("Please enter your first name (at least 2 characters)."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) { setErrorMsg("Please enter a valid email address."); return; }
    if (phoneDigits.length !== 10) { setErrorMsg("Please enter a valid 10-digit phone number."); return; }
    if (!smsConsent) { setErrorMsg("Please accept SMS consent to continue."); return; }

    const formattedPhone = `+1${phoneDigits}`;
    setSubmitting(true);

    try {
      const params = new URLSearchParams({
        u: "1",
        f: "1",
        or: "bd95184d-cefb-44b6-b74e-4a53fe012399",
        act: "sub",
        v: "2",
        fullname: trimmedName,
        firstname: trimmedName,
        email: trimmedEmail,
        phone: formattedPhone,
        sms_consent: "on",
        jsonp: "true"
      });

      const response = await fetch(
        `https://contatoescalify19849.activehosted.com/proc.php?${params.toString()}`
      );
      const text = await response.text();

      if (text.includes("_show_thank_you")) {
        setSubmitted(true);
        setTimeout(() => setOpen(false), 2500);
      } else {
        // Extract error message from ActiveCampaign response
        const errorMatch = text.match(/_show_error\("[^"]*",\s*"([^"]*)"\)/);
        if (errorMatch) {
          setErrorMsg(errorMatch[1]);
        } else {
          setErrorMsg("Submission failed. Please check your information and try again.");
        }
      }
    } catch {
      setErrorMsg("Connection error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden rounded-2xl border-0 gap-0">
        {/* Header */}
        <div className="bg-gradient-hero px-6 py-8 text-center text-primary-foreground">
          <div className="inline-flex items-center gap-1.5 bg-accent/20 backdrop-blur-sm text-accent px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Exclusive Offer
          </div>
          <DialogHeader>
            <DialogTitle className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground">
              Get 15% Off Your First Order
            </DialogTitle>
            <DialogDescription className="text-primary-foreground/80 text-sm mt-2">
              Plus, be the first to know about exclusive deals and wellness tips.
            </DialogDescription>
          </DialogHeader>
        </div>

        {submitted ?
        <div className="px-6 py-10 text-center space-y-3">
            <Sparkles className="w-10 h-10 text-accent mx-auto" />
            <p className="text-xl font-serif font-bold text-foreground">Welcome to Velara!</p>
            <p className="text-sm text-muted-foreground">Check your email for your 15% discount code.</p>
          </div> :

        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="popup-name" className="text-sm font-semibold">
                First Name <span className="text-destructive">*</span>
              </Label>
              <Input
              id="popup-name"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              maxLength={100}
              required
              className="h-12 rounded-lg" />
            
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="popup-email" className="text-sm font-semibold">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
              id="popup-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxLength={255}
              required
              className="h-12 rounded-lg" />
            
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="popup-phone" className="text-sm font-semibold">
                Phone Number
              </Label>
              <div className="flex gap-2">
                <div className="flex items-center justify-center h-12 px-3 rounded-lg bg-muted text-sm text-muted-foreground font-medium">
                  +1
                </div>
                <Input
                id="popup-phone"
                type="tel"
                placeholder="(555) 123-4567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                maxLength={20}
                className="h-12 rounded-lg" />
              
              </div>
            </div>

            {/* SMS Consent */}
            <div className="bg-muted/50 rounded-lg p-4 space-y-3">
              <div className="flex items-start gap-3">
                <Checkbox
                id="sms-consent"
                checked={smsConsent}
                onCheckedChange={(v) => setSmsConsent(v === true)}
                className="mt-0.5" />
              
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-foreground mb-1">
                    💎 SMS Marketing Consent
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    By checking this box, I agree to receive recurring promotional and personalized marketing text messages
                    (e.g., cart reminders, exclusive offers) from <strong>Velara Health</strong> at the cell phone number used
                    when signing up. Consent is not a condition of any purchase.
                  </p>
                </div>
              </div>
              <ul className="text-[11px] text-muted-foreground space-y-0.5 ml-7 list-disc">
                <li>Message frequency varies. Approx. 4-8 msgs/month.</li>
                <li>Message and data rates may apply.</li>
                <li>Reply <strong>STOP</strong> to cancel at any time.</li>
                <li>Reply <strong>HELP</strong> for assistance.</li>
              </ul>
              <p className="text-[10px] text-muted-foreground/70 italic ml-7">
                Consent to receive text messages is not required to make a purchase.
              </p>
            </div>

            {errorMsg && (
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg px-4 py-3 text-sm text-destructive text-center">
                {errorMsg}
              </div>
            )}

            <Button variant="hero" type="submit" disabled={submitting} className="w-full h-14 text-base rounded-xl">
              {submitting ? "Submitting..." : <>Unlock My 15% Discount <ArrowRight className="w-5 h-5 ml-1" /></>}
            </Button>

            <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground pt-1">
              <a href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <span className="text-border">|</span>
              <a href="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </form>
        }
      </DialogContent>
    </Dialog>);

};

export default LeadPopup;