import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { FAQ } from './faq';

type Noeud = { '@type'?: string; mainEntity?: { name: string; acceptedAnswer: { text: string } }[] };

const lireFaqGoogle = (): { question: string; reponse: string }[] => {
  const html = readFileSync(resolve(__dirname, '../../index.html'), 'utf-8');
  const blocs = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  const noeuds: Noeud[] = blocs.flatMap((b) => {
    const json = JSON.parse(b[1]);
    return json['@graph'] ?? [json];
  });
  const faq = noeuds.find((n) => n['@type'] === 'FAQPage');
  if (!faq?.mainEntity) throw new Error('Aucun bloc FAQPage dans index.html');
  return faq.mainEntity.map((q) => ({ question: q.name, reponse: q.acceptedAnswer.text }));
};

describe('FAQ', () => {
  it('le JSON-LD FAQPage lu par Google reprend exactement la FAQ affichée', () => {
    expect(lireFaqGoogle()).toEqual(FAQ.map(({ question, reponse }) => ({ question, reponse })));
  });
});
