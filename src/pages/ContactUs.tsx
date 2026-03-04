const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16 max-w-3xl">
        <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Contact Us</h1>

        <h2 className="font-serif text-2xl font-semibold text-foreground mt-10 mb-4">CUSTOMER SUPPORT</h2>
        <div className="text-muted-foreground mb-6 space-y-1">
          <p>Email: support@femvitalhealth.online</p>
          <p>Phone: ‪1 347 954 6786</p>
          <p>Hours: Monday – Friday, 9am – 5pm EST</p>
        </div>

        <h2 className="font-serif text-2xl font-semibold text-foreground mt-10 mb-4">MAILING ADDRESS</h2>
        <div className="text-muted-foreground mb-6 space-y-1">
          <p>FemVital</p>
          <p>1412 Broadway 21st Floor,</p>
          <p>New York, NY 10018</p>
          <p>United States</p>
        </div>

        <h2 className="font-serif text-2xl font-semibold text-foreground mt-10 mb-4">SMS SUPPORT</h2>
        <div className="text-muted-foreground mb-6 space-y-1">
          <p>To get help with text messages: Reply HELP to any message</p>
          <p>To stop receiving texts: Reply STOP to any message</p>
        </div>

        <h2 className="font-serif text-2xl font-semibold text-foreground mt-10 mb-4">RESPONSE TIME</h2>
        <p className="text-muted-foreground mb-6">
          We typically respond to inquiries within 24-48 business hours.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
