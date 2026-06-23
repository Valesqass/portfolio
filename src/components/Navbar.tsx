import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2 } from "lucide-react";
import { cn } from "../utils/cn";

const focusableSelector =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

const getFocusable = (container: HTMLElement | null) => {
  if (!container) return [];
  const nodes = Array.from(container.querySelectorAll<HTMLElement>(focusableSelector));
  return nodes.filter((el) => {
    const style = window.getComputedStyle(el);
    if (style.visibility === "hidden" || style.display === "none") return false;
    if (el.hasAttribute("disabled")) return false;
    return true;
  });
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const barTransition = { type: "spring", stiffness: 220, damping: 20 } as const;
const topBarVariants = {
  closed: { rotate: 0, y: -6, scaleX: 1 },
  open: { rotate: 45, y: 0, scaleX: 0.92 },
};
const midBarVariants = {
  closed: { opacity: 1, y: 0, scaleX: 1 },
  open: { opacity: 0, y: 0, scaleX: 0.6 },
};
const botBarVariants = {
  closed: { rotate: 0, y: 6, scaleX: 1 },
  open: { rotate: -45, y: 0, scaleX: 0.92 },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const wasOpenRef = useRef(false);

  /* ---------------- SCROLL SPY ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        "home",
        "about",
        "services",
        "experience",
        "projects",
        "skills",
        "contact",
      ];

      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (!el) continue;

        const { offsetTop, offsetHeight } = el;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- LOCK SCROLL ---------------- */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = useCallback(() => {
    setIsOpen((v) => !v);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  /* ---------------- FOCUS TRAP ---------------- */
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeMenu();
        return;
      }

      if (e.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;

      const focusables = getFocusable(panel);

      if (focusables.length === 0) {
        e.preventDefault();
        panel.focus();
        return;
      }

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey) {
        if (!active || active === first || !panel.contains(active)) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeMenu]);

  /* ---------------- AUTO FOCUS ---------------- */
  useEffect(() => {
    if (!isOpen) return;
    requestAnimationFrame(() => {
      const focusables = getFocusable(panelRef.current);
      (focusables[0] ?? panelRef.current)?.focus();
    });
  }, [isOpen]);

  useEffect(() => {
    if (wasOpenRef.current && !isOpen) {
      buttonRef.current?.focus();
    }
    wasOpenRef.current = isOpen;
  }, [isOpen]);

  /* ---------------- NAV LINKS ---------------- */
  const navLinks = useMemo(
    () => [
      { name: "Accueil", id: "home" },
      { name: "À propos", id: "about" },
      { name: "Services", id: "services" },
      { name: "Expérience", id: "experience" },
      { name: "Projets", id: "projects" },
      { name: "Compétences", id: "skills" },
      { name: "Contact", id: "contact" },
    ],
    []
  );

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    closeMenu();

    const el = document.getElementById(id);
    if (!el) return;

    const navHeight = 80;
    const offset =
      el.getBoundingClientRect().top + window.pageYOffset - navHeight;

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  };

  /* ---------------- RENDER ---------------- */
  return (
    <header>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-[padding,box-shadow] duration-300",
          isOpen
            ? "bg-white shadow-sm border-b border-gray-100 py-3 duration-0"
            : scrolled
              ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-100 py-3"
              : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* LOGO */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "home")}
            className="flex items-center space-x-2 font-bold text-lg"
          >
            <Code2 className="w-6 h-6" />
            <span>Mikaël Lahlou</span>
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={cn(
                  "text-sm tracking-wide transition-colors",
                  activeSection === link.id
                    ? "text-black font-semibold"
                    : "text-gray-500 hover:text-black"
                )}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* HAMBURGER */}
          <motion.button
            ref={buttonRef}
            onClick={toggleMenu}
            className={cn(
              "lg:hidden group relative w-12 h-12 flex items-center justify-center rounded-full border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/15",
              isOpen
                ? "bg-white shadow-xl border-gray-300"
                : "bg-white/90 backdrop-blur-lg shadow-lg border-gray-200 hover:bg-white"
            )}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-controls="mobile-menu"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <span
              aria-hidden
              className="absolute inset-0 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_70%_30%,rgba(0,0,0,0.06),transparent_40%)]"
            />
            <motion.span
              className="absolute w-6 h-0.5 bg-black rounded-full origin-center"
              variants={topBarVariants}
              animate={isOpen ? "open" : "closed"}
              transition={barTransition}
              whileHover={{ scaleX: 1.06 }}
            />
            <motion.span
              className="absolute w-6 h-0.5 bg-black rounded-full origin-center"
              variants={midBarVariants}
              animate={isOpen ? "open" : "closed"}
              transition={{ duration: 0.18 }}
              whileHover={{ scaleX: 1.08 }}
            />
            <motion.span
              className="absolute w-6 h-0.5 bg-black rounded-full origin-center"
              variants={botBarVariants}
              animate={isOpen ? "open" : "closed"}
              transition={barTransition}
              whileHover={{ scaleX: 1.06 }}
            />
          </motion.button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={closeMenu}
                data-testid="mobile-menu-overlay"
                className="fixed inset-0 bg-black/60 backdrop-blur-md z-[90]"
              />

              {/* Panel */}
              <motion.div
                ref={panelRef}
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                aria-label="Menu"
                tabIndex={-1}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                className="fixed inset-y-0 right-0 w-[min(420px,92vw)] bg-white border-l border-gray-200 shadow-2xl z-[100] pt-28 pb-10 px-8 flex flex-col"
              >
                <motion.nav
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="flex flex-col space-y-8"
                >
                  {navLinks.map((link) => (
                    <motion.a
                      key={link.id}
                      variants={itemVariants}
                      href={`#${link.id}`}
                      onClick={(e) => scrollToSection(e, link.id)}
                      className="text-2xl font-semibold tracking-wide text-gray-700 hover:text-black transition-colors"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </motion.nav>

                <div className="mt-auto text-center text-xs text-gray-400 uppercase tracking-widest">
                  © {new Date().getFullYear()} Mikaël Lahlou
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
