import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Github, AlertCircle } from 'lucide-react';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const encode = (data: Record<string, string>): string =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [botField, setBotField] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          'bot-field': botField,
          ...formData,
        }),
      });

      if (!response.ok) {
        throw new Error(`Réponse inattendue : ${response.status}`);
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Échec de l’envoi du formulaire de contact', error);
      setStatus('error');
    }
  };

  const isSubmitting = status === 'submitting';

  return (
    <section
      id="contact"
      className="py-24 bg-black text-white border-t border-white/10"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-white uppercase tracking-tight">
              Contact
            </h2>
            <p className="text-gray-400 text-lg font-light mb-12 max-w-md">
              Un projet de site ou d'application en tête ? Décrivez-moi votre
              besoin : je vous réponds sous 24&nbsp;h avec une première piste
              concrète.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <Mail className="w-6 h-6 text-white mt-1" />
                <div>
                  <h4 className="font-bold text-white text-lg uppercase tracking-wide mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:m_lahlou4@hetic.eu"
                    className="text-gray-400 hover:text-white transition-colors underline decoration-1 underline-offset-4"
                  >
                    m_lahlou4@hetic.eu
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <MapPin className="w-6 h-6 text-white mt-1" />
                <div>
                  <h4 className="font-bold text-white text-lg uppercase tracking-wide mb-1">
                    Localisation
                  </h4>
                  <p className="text-gray-400">Montreuil, France</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <Phone className="w-6 h-6 text-white mt-1" />
                <div>
                  <h4 className="font-bold text-white text-lg uppercase tracking-wide mb-1">
                    Disponibilité
                  </h4>
                  <p className="text-green-400 font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Ouvert aux opportunités
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/Valesqass"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-4 border border-white/20 hover:bg-white hover:text-black transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {status === 'success' ? (
              <div className="bg-white/5 p-8 border border-white/10 text-center py-12">
                <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Message envoyé !
                </h3>
                <p className="text-gray-400 mb-6">
                  Merci de m'avoir contacté. Je vous réponds sous 24&nbsp;h.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="text-white font-bold hover:underline underline-offset-4 transition-all"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Champs requis par Netlify Forms */}
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Ne pas remplir si vous êtes humain :
                    <input
                      name="bot-field"
                      value={botField}
                      onChange={(e) => setBotField(e.target.value)}
                    />
                  </label>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide"
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      className="w-full px-4 py-4 bg-transparent border border-white/20 focus:outline-none focus:border-white focus:bg-white/5 transition-all text-white placeholder-gray-600"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide"
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
                      autoComplete="email"
                      className="w-full px-4 py-4 bg-transparent border border-white/20 focus:outline-none focus:border-white focus:bg-white/5 transition-all text-white placeholder-gray-600"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-transparent border border-white/20 focus:outline-none focus:border-white focus:bg-white/5 transition-all text-white resize-none placeholder-gray-600"
                    placeholder="Parlez-moi de votre projet..."
                  />
                </div>

                {status === 'error' && (
                  <p
                    role="alert"
                    className="flex items-center gap-2 text-sm text-red-400"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    L'envoi a échoué. Réessayez ou écrivez-moi directement à
                    m_lahlou4@hetic.eu.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-white hover:bg-gray-200 text-black font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Envoi en cours...'
                  ) : (
                    <>
                      Envoyer le message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
