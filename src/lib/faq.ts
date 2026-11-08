export type QuestionReponse = {
  question: string;
  reponse: string;
};

/**
 * FAQ affichée sur la page d'accueil.
 * Le même contenu est repris dans le JSON-LD FAQPage de index.html :
 * le test faq.test.ts vérifie que les deux restent identiques.
 */
export const FAQ: readonly QuestionReponse[] = [
  {
    question: 'Combien de temps faut-il pour créer un site vitrine ?',
    reponse:
      "En général de 2 à 4 semaines, selon le nombre de pages et le contenu à préparer. Je vous donne un délai précis dans le devis, et je vous tiens au courant à chaque étape.",
  },
  {
    question: 'Combien coûte un site ou une application ?',
    reponse:
      "Chaque projet est différent : un site vitrine et une application avec paiement en ligne n'ont pas le même prix. Après un premier échange, je vous envoie un devis gratuit et détaillé, sans engagement.",
  },
  {
    question: 'Mon site sera-t-il bien référencé sur Google ?',
    reponse:
      "Oui. Le référencement technique est inclus : site rapide, adapté au mobile, bien structuré, avec les balises, les données structurées et le sitemap dont Google a besoin pour vous trouver.",
  },
  {
    question: 'Pourrai-je modifier mon site moi-même ?',
    reponse:
      "Oui si vous le souhaitez : je peux intégrer un espace d'administration simple pour mettre à jour vos textes, vos photos ou vos produits sans toucher au code.",
  },
  {
    question: 'Travaillez-vous à distance ?',
    reponse:
      "Oui, partout en France. Je suis basé à Montreuil et je me déplace volontiers à Paris et en Île-de-France pour les rendez-vous.",
  },
  {
    question: 'Proposez-vous la maintenance après la mise en ligne ?',
    reponse:
      "Oui : mises à jour, sécurité, corrections et nouvelles fonctionnalités. C'est ce que je fais au quotidien sur la plateforme SYC75, que je maintiens en production.",
  },
  {
    question: 'Êtes-vous disponible pour un CDI ?',
    reponse:
      "Oui, je suis ouvert à un CDI de développeur full-stack (React, Next.js, React Native, Node.js) à Paris, en Île-de-France ou en télétravail. Mon CV est téléchargeable en haut de la page.",
  },
];
