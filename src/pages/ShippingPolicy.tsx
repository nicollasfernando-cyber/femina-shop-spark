const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16 max-w-3xl">
        <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Shipping Policy</h1>

        <h2 className="font-serif text-2xl font-semibold text-foreground mt-10 mb-4">FULFILLMENT</h2>
        <div className="text-muted-foreground mb-6 space-y-2">
          <p>Orders received by 12 PM EST Monday – Friday typically ship the same day.</p>
          <p>Orders received after 12 PM EST Monday – Friday typically ship the next business day.</p>
          <p>Orders received on Saturday and Sunday typically ship the next business day.</p>
          <p>Standard business days for fulfillment are Monday – Friday (excluding U.S. holidays).</p>
        </div>

        <h2 className="font-serif text-2xl font-semibold text-foreground mt-10 mb-4">SHIPPING OPTIONS</h2>
        <p className="text-muted-foreground mb-2">We currently ship to addresses in the United States only.</p>
        <div className="text-muted-foreground mb-4 space-y-2">
          <p>Standard Shipping: Typically delivered in 3-7 business days after ship date.</p>
          <p>Express Shipping (if available): Typically delivered within 2 business days after ship date.</p>
        </div>
        <p className="text-muted-foreground mb-6">
          Shipping times are estimates and not guaranteed. Delays may occur due to carrier issues, weather, or high volume periods.
        </p>

        <h2 className="font-serif text-2xl font-semibold text-foreground mt-10 mb-4">SHIPPING COSTS</h2>
        <p className="text-muted-foreground mb-6">
          Shipping costs are calculated at checkout based on your location and selected shipping method. Free shipping may be available on orders over a certain amount (see current promotions).
        </p>

        <h2 className="font-serif text-2xl font-semibold text-foreground mt-10 mb-4">TRACKING</h2>
        <p className="text-muted-foreground mb-6">
          Once your order ships, you will receive an email with tracking information. You can also track your order by logging into your account on our website.
        </p>

        <h2 className="font-serif text-2xl font-semibold text-foreground mt-10 mb-4">INTERNATIONAL SHIPPING</h2>
        <p className="text-muted-foreground mb-6">
          We do not currently offer international shipping. We only ship to addresses within the United States.
        </p>

        <h2 className="font-serif text-2xl font-semibold text-foreground mt-10 mb-4">QUESTIONS</h2>
        <p className="text-muted-foreground mb-6">
          For shipping questions, contact us at support@femvitalhealth.online.
        </p>
      </div>
    </div>
  );
};

export default ShippingPolicy;
