import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-black">Contact</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Vous avez un projet en tête ou vous souhaitez simplement échanger ? N'hésitez pas à me contacter.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-white p-8 border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-2xl font-bold mb-8 text-black border-b border-black pb-4">Coordonnées</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-black text-white group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-black text-lg">Email</h4>
                  <a href="mailto:contact@mikaellahlou.com" className="text-gray-600 hover:text-black transition-colors underline decoration-1 underline-offset-4">
                    contact@mikaellahlou.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-black text-white group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-black text-lg">Localisation</h4>
                  <p className="text-gray-600">Montreuil, France</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-black text-white group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-black text-lg">Disponibilité</h4>
                  <p className="text-black font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
                    Ouvert aux opportunités
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="bg-white p-8 border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-6">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">Message envoyé !</h3>
                <p className="text-gray-600 mb-6">Merci de m'avoir contacté. Je vous répondrai dans les plus brefs délais.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-black font-bold hover:underline underline-offset-4 transition-all"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <>
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">Nom complet</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-black focus:outline-none focus:bg-gray-50 transition-all text-black placeholder-gray-400"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-black focus:outline-none focus:bg-gray-50 transition-all text-black placeholder-gray-400"
                    placeholder="votre@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white border-2 border-black focus:outline-none focus:bg-gray-50 transition-all text-black resize-none placeholder-gray-400"
                    placeholder="Votre message..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-black hover:bg-gray-800 text-white font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed border-2 border-transparent hover:border-black hover:bg-white hover:text-black"
                >
                  {isSubmitting ? 'Envoi en cours...' : (
                    <>
                      Envoyer le message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
