import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Download, Instagram, Mail, Menu, X } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/Button";
import flavourLaddoos from "@/assets/catalogue-four-flavours.jpg";
import heroLaddoos from "@/assets/catalogue-hero-laddoos.jpg";
import ingredientsFlatlay from "@/assets/ingredients-flatlay.jpg";
import logoAsset from "@/assets/catalogue-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Let It Crave | Goodness You Crave, Naturally" },
      {
        name: "description",
        content:
          "Discover Let It Crave's date-sweetened nut laddoos—four bold flavours made for cravings, not compromises.",
      },
      { property: "og:title", content: "Let It Crave | Goodness You Crave, Naturally" },
      {
        property: "og:description",
        content: "Date-sweetened laddoos packed with nuts, flavour and a whole lot of craving.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const flavours = [
  { number: "01", name: "Belgian Chocolate", description: "Rich, nutty & deeply chocolatey." },
  { number: "02", name: "Coffee Almond", description: "Bold coffee. Crunchy almonds." },
  { number: "03", name: "Choco Orange", description: "Chocolate with a bright citrus twist." },
  { number: "04", name: "Choco Vanilla", description: "Smooth, comforting & delicately sweet." },
];

const benefits = ["Sweetened with Dates", "Real Nuts", "Thoughtfully Made", "Flavour First"];
const ingredients = ["Dates", "Almonds", "Hazelnuts", "Cashews", "Cacao", "Coconut", "Coffee", "Chia Seeds"];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="overflow-hidden">
      <header className="site-header">
        <a href="#top" aria-label="Let It Crave home" className="logo-link">
          <img src={logoAsset} alt="Let It Crave" className="brand-logo" />
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#cravings">Our Cravings</a>
          <a href="#why-us">Why Us</a>
          <a href="#story">Our Story</a>
        </nav>

        <Button asChild className="header-cta">
          <a href="#early-access">Get first bite <ArrowRight aria-hidden="true" /></a>
        </Button>

        <button
          className="menu-button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <a href="#cravings" onClick={() => setMenuOpen(false)}>Our Cravings</a>
          <a href="#why-us" onClick={() => setMenuOpen(false)}>Why Us</a>
          <a href="#story" onClick={() => setMenuOpen(false)}>Our Story</a>
          <a href="#early-access" onClick={() => setMenuOpen(false)}>Get first bite</a>
        </nav>
      )}

      <section id="top" className="hero-section">
        <img
          src={heroLaddoos}
          alt="Chocolate date and nut laddoos with almonds and hazelnuts"
          className="hero-image"
          width={1600}
          height={1200}
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow light">Goodness You Crave, Naturally.</p>
          <h1>Cravings never tasted this good.</h1>
          <p className="hero-copy">Date-sweetened laddoos packed with nuts, flavour and a whole lot of craving.</p>
          <Button asChild variant="cream">
            <a href="#cravings">Meet the Cravings <ArrowDown aria-hidden="true" /></a>
          </Button>
        </div>
        <p className="hero-note">Small bites. Big goodness.</p>
      </section>

      <section id="cravings" className="section cravings-section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Four ways to crave</p>
            <h2>Pick your craving.</h2>
          </div>
          <p>Four flavours.<br />One difficult decision.</p>
        </div>

        <div className="flavours-layout">
          <div className="flavour-image-wrap">
            <img
              src={flavourLaddoos}
              alt="Belgian Chocolate and Coffee Almond laddoos above Choco Orange and Choco Vanilla laddoos, with their ingredients"
              loading="lazy"
              width={1600}
              height={1000}
            />
            <span className="image-label">Made to disappear quickly</span>
          </div>
          <div className="flavour-list">
            {flavours.map((flavour) => (
              <article className="flavour-row" key={flavour.name}>
                <span>{flavour.number}</span>
                <div>
                  <h3>{flavour.name}</h3>
                  <p>{flavour.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="catalogue-cta">
          <p>Everything in one file.</p>
          <a className="button-base button-primary" href="/let-it-crave-catalogue.pdf" download>
            Download Our Catalogue <Download aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="why-us" className="why-section">
        <div className="section-heading why-heading">
          <p className="eyebrow light">The Let It Crave way</p>
          <h2>Made for cravings.<br /><span>Not compromises.</span></h2>
        </div>
        <div className="benefit-grid">
          {benefits.map((benefit, index) => (
            <div className="benefit" key={benefit}>
              <span>0{index + 1}</span>
              <h3>{benefit}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="section ingredients-section">
        <div className="ingredients-copy">
          <p className="eyebrow">The good stuff</p>
          <h2>You should know what's in your snack.</h2>
          <div className="ingredient-list">
            {ingredients.map((ingredient) => <span key={ingredient}>{ingredient}</span>)}
          </div>
        </div>
        <div className="ingredients-image-wrap">
          <img
            src={ingredientsFlatlay}
            alt="Dates, almonds, hazelnuts, cashews, cacao, coconut, coffee and chia seeds"
            loading="lazy"
            width={1600}
            height={1008}
          />
        </div>
      </section>

      <section id="story" className="story-section">
        <p className="story-kicker">Our story</p>
        <div className="story-inner">
          <h2>It started with<br /><em>a craving.</em></h2>
          <blockquote>
            “We weren't looking to create another ‘healthy snack.’ We wanted something we'd genuinely reach for when the craving hit — something delicious, satisfying and made from ingredients we actually understood. That's how Let It Crave started.”
          </blockquote>
        </div>
      </section>

      <section id="early-access" className="early-section">
        <div className="early-copy">
          <p className="eyebrow light">Coming soon</p>
          <h2>Something craveable is coming.</h2>
          <p>We're getting our first batches ready. Be among the first to try Let It Crave.</p>
        </div>
        {submitted ? (
          <div className="success-message" role="status">
            <span>You're on the list.</span>
            <p>We'll save you a first bite.</p>
          </div>
        ) : (
          <form className="early-form" onSubmit={handleSubmit}>
            <label>
              <span>Name</span>
              <input name="name" autoComplete="name" placeholder="Your name" required />
            </label>
            <label>
              <span>Email or phone</span>
              <input name="contact" autoComplete="email" placeholder="you@example.com" required />
            </label>
            <Button type="submit" variant="cream">I Want First Bite <ArrowRight aria-hidden="true" /></Button>
          </form>
        )}
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <img src={logoAsset} alt="Let It Crave" />
          <p>Goodness You Crave, Naturally.</p>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#cravings">Our Cravings</a>
          <a href="#why-us">Why Us</a>
          <a href="#story">Our Story</a>
          <a href="mailto:hello@letitcrave.com">Contact</a>
          <a href="/let-it-crave-catalogue.pdf" download>Download Catalogue</a>
        </nav>
        <div className="footer-socials">
          <a href="https://www.instagram.com/letitcrave/" target="_blank" rel="noopener noreferrer" aria-label="Let It Crave on Instagram"><Instagram aria-hidden="true" /> Instagram</a>
          <a href="mailto:hello@letitcrave.com"><Mail aria-hidden="true" /> Email</a>
          <a href="https://wa.me/917984487662" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
        <p className="copyright">© 2026 Let It Crave</p>
      </footer>
    </main>
  );
}
