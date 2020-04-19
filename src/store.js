import { writable } from 'svelte/store';

function createMenuOpen() {
  const { subscribe, set, update } = writable(false);

  return {
    subscribe,
    toggle: () => update(state => !state),
    reset: () => set(false)
  };
}

export const menuOpen = createMenuOpen();