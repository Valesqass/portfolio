# Spécification de design — Hamburger menu responsive (minimaliste / luxe discret)

## Global Styles (tokens)
- Couleurs
  - Fond: `#0B0B0C` (noir profond) ou `#FFFFFF` (blanc cassé) selon ton thème existant
  - Texte: `rgba(255,255,255,0.92)` sur fond sombre / `#111111` sur fond clair
  - Accent discret: `#C8B280` (doré pâle) *optionnel*, uniquement pour focus/hover subtil
  - Overlay: `rgba(0,0,0,0.55)`
- Typographie
  - Police: celle du site (sinon : serif moderne pour titres + sans pour UI)
  - Échelle: 14–16px UI, 18–20px items menu mobile
  - Capitalisation: éviter le full uppercase agressif; préférer petites capitales discrètes si besoin
- Spacing
  - 8px base; header padding 16–24px
  - Menu items: 12–16px vertical
- Interactions
  - Hover: underline fin (1px) ou variation d’opacité
  - Focus visible (obligatoire): outline 2px (accent discret) + offset 2px
  - Transitions: 160–220ms, easing doux (`cubic-bezier(0.2,0.8,0.2,1)`)

## Page: Header (composant global)

### Layout
- Desktop-first.
- Header en flex horizontal (Flexbox) :
  - Gauche: logo/nom
  - Droite: navigation inline (desktop) + actions optionnelles
  - Hamburger visible uniquement sous le breakpoint (ex. < 1024px).

### Meta Information
- N/A (composant global). Assurer que les pages conservent leurs titres/OG existants.

### Page Structure
- Zone sticky (optionnel) : header fixe en haut avec fond semi-opaque (blur léger) si déjà présent.
- Deux modes:
  1) Desktop : nav inline, pas d’overlay.
  2) Mobile/Tablet : bouton hamburger + panel latéral / dropdown plein écran.

### Sections & Components

#### 1) Barre du header
- Logo
  - Clic → retour accueil.
  - Taille sobre, respirations généreuses.
- Navigation desktop
  - Liste horizontale.
  - Indicateur page active discret (underline fin / opacité).
- Bouton hamburger (mobile)
  - Zone cliquable min. 44x44.
  - Icône 2–3 lignes fines (stroke 1.5–2px) ou pictogramme minimal.
  - États:
    - Default
    - Hover (desktop si visible): opacité +5–10%
    - Focus-visible: contour accent + léger halo
    - Open: icône devient “X” (rotation/transition subtile)
  - Accessibilité:
    - `aria-expanded` reflète l’état.
    - Label: “Ouvrir le menu” / “Fermer le menu”.

#### 2) Overlay (quand menu ouvert)
- Plein écran, derrière le panel.
- Clic overlay → ferme.
- Empêche interaction avec le contenu derrière (visuel + logique).

#### 3) Menu Panel (mobile)
- Variante recommandée (luxe discret): panel latéral droit ~ 320–420px (selon viewport) avec fond opaque.
- Alternative: dropdown plein écran centré (si architecture de page le nécessite).
- Contenu
  - Titre discret (optionnel): “Menu” ou rien.
  - Liens en colonne
    - Taille 18–20px, interlignage confortable
    - Séparateurs très fins (1px, faible contraste) optionnels
  - (Optionnel) zone basse: liens secondaires (mentions, contact) en plus petit
- Interaction
  - Ouverture: slide-in + fade overlay.
  - Fermeture: inverse.
  - Clic sur lien: ferme le menu avant/pendant la navigation.
  - ESC: ferme.
  - Focus:
    - À l’ouverture: focus sur le premier lien (ou le conteneur nav).
    - Piège de focus recommandé tant que le panel est ouvert.
    - À la fermeture: focus revient au bouton hamburger.

### Responsive behavior
- Breakpoints (indicatifs)
  - ≥ 1024px: nav inline visible; hamburger caché.
  - < 1024px: nav inline cachée; hamburger visible; panel activable.
- Le panel ne doit jamais dépasser la hauteur viewport; contenu scrollable si besoin.

### Animation & motion guidelines
- Respect `prefers-reduced-motion` : désactiver transitions de slide, garder un fade léger ou aucun.

### États d’erreur/edge cases
- Menu ouvert + rotation écran: recalcul largeur panel, conserver focus.
- Rapid toggle: empêcher double animations (désactiver bouton pendant 150ms si nécessaire).
