import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import Navbar from './Navbar';

const tick = () => new Promise((r) => setTimeout(r, 0));

describe('Navbar — menu mobile', () => {
  it('ouvre et ferme via ESC et clic extérieur', async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const toggle = screen.getByRole('button', { name: /ouvrir le menu/i });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');

    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');

    const dialog = screen.getByRole('dialog', { name: 'Menu' });
    expect(dialog).toBeInTheDocument();

    await tick();
    expect(within(dialog).getByRole('link', { name: 'Accueil' })).toHaveFocus();

    await user.keyboard('{Escape}');
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(toggle).toHaveFocus();

    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');

    const overlay = screen.getByTestId('mobile-menu-overlay');
    await user.click(overlay);
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(toggle).toHaveFocus();
  });

  it('piège le focus dans le panel quand il est ouvert', async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const toggle = screen.getByRole('button', { name: /ouvrir le menu/i });
    await user.click(toggle);

    const dialog = screen.getByRole('dialog', { name: 'Menu' });
    const links = within(dialog).getAllByRole('link');

    await tick();
    expect(links[0]).toHaveFocus();

    for (let i = 1; i < links.length; i += 1) {
      await user.tab();
    }
    expect(links[links.length - 1]).toHaveFocus();

    await user.tab();
    expect(links[0]).toHaveFocus();

    await user.tab({ shift: true });
    expect(links[links.length - 1]).toHaveFocus();
  });
});

