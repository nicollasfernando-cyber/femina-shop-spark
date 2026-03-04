const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16 max-w-3xl">
        <h1 className="font-serif text-4xl font-bold text-foreground mb-8">About FemVital Health</h1>

        <div className="text-muted-foreground space-y-6">
          <p>
            FemVital Health is a wellness-focused brand dedicated to supporting women's health through thoughtfully formulated nutritional products designed for modern lifestyles.
          </p>
          <p>
            Our mission is to help women feel balanced, confident, and energized by offering high-quality wellness solutions that support vitality, beauty, and overall well-being.
          </p>
          <p>
            We believe that women deserve reliable health solutions that fit into their daily routines while helping them feel their best from the inside out.
          </p>
          <p>
            Our customer support and operations team works daily to ensure that every customer has a positive experience with our products and services.
          </p>
          <p>
            FemVital Health operates from our mailing office in New York and proudly serves customers across the United States through our online platform.
          </p>
        </div>

        <h2 className="font-serif text-2xl font-semibold text-foreground mt-10 mb-4">Address</h2>
        <div className="text-muted-foreground space-y-1">
          <p>FemVital Health</p>
          <p>1412 Broadway, 21st Floor</p>
          <p>New York, NY 10018</p>
          <p>United States</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
