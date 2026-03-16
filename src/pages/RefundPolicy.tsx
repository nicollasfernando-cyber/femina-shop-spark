const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16 max-w-3xl">
        <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Refund Policy</h1>

        <h2 className="font-serif text-2xl font-semibold text-foreground mt-10 mb-4">RETURNS</h2>
        <p className="text-muted-foreground mb-4">
          We have a 30-day return policy, which means you have 30 days after delivery to request a return.
        </p>
        <p className="text-muted-foreground mb-2">To be eligible for a return:</p>
        <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1 pl-4">
          <li>Item must be in original, unused condition</li>
          <li>Item must be in original packaging</li>
          <li>You must have receipt or proof of purchase</li>
        </ul>
        <p className="text-muted-foreground mb-4">
          To start a return, contact us at support@velarahealth.com with your order number.
        </p>
        <p className="text-muted-foreground mb-4">
          If your return is accepted, we will provide instructions on how and where to send your package. Customers are responsible for return shipping costs.
        </p>
        <p className="text-muted-foreground mb-6">
          Items sent back without prior authorization will not be accepted.
        </p>

        <h2 className="font-serif text-2xl font-semibold text-foreground mt-10 mb-4">EXCLUSIONS</h2>
        <p className="text-muted-foreground mb-2">The following items cannot be returned:</p>
        <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-1 pl-4">
          <li>Perishable goods</li>
          <li>Gift cards</li>
          <li>Opened or used products</li>
          <li>Items marked as final sale</li>
        </ul>

        <h2 className="font-serif text-2xl font-semibold text-foreground mt-10 mb-4">SATISFACTION GUARANTEE</h2>
        <p className="text-muted-foreground mb-6">
          If you are not satisfied with your purchase, contact us at support@velarahealth.com. We want you to be happy with your order and will work to find a solution.
        </p>

        <h2 className="font-serif text-2xl font-semibold text-foreground mt-10 mb-4">DAMAGES AND DEFECTS</h2>
        <p className="text-muted-foreground mb-6">
          Please inspect your order upon delivery. If you receive a damaged, defective, or incorrect item, contact us immediately at support@velarahealth.com so we can resolve the issue.
        </p>

        <h2 className="font-serif text-2xl font-semibold text-foreground mt-10 mb-4">EXCHANGES</h2>
        <p className="text-muted-foreground mb-6">
          For exchanges, please return the original item and place a new order for the desired item.
        </p>

        <h2 className="font-serif text-2xl font-semibold text-foreground mt-10 mb-4">REFUNDS</h2>
        <p className="text-muted-foreground mb-4">
          Once we receive and inspect your return, we will notify you of approval or denial.
        </p>
        <p className="text-muted-foreground mb-4">
          If approved, your refund will be processed to your original payment method within 10 business days. Your bank may take additional time to post the refund.
        </p>
        <p className="text-muted-foreground mb-6">
          If more than 15 business days have passed since approval, contact us at support@velarahealth.com.
        </p>

        <h2 className="font-serif text-2xl font-semibold text-foreground mt-10 mb-4">CONTACT US</h2>
        <p className="text-muted-foreground mb-2">For return or refund questions:</p>
        <div className="text-muted-foreground mb-6 space-y-1">
          <p>500 Fifth Avenue, Suite 1230</p>
          <p>New York, NY 10110</p>
          <p>United States</p>
          <p>Email: support@velarahealth.com</p>
          <p>Phone: 1 (855) 832-5274</p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;