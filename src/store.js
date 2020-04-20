import { writable } from 'svelte/store';

function createMenuIsOpen() {
  const { subscribe, set, update } = writable(false);

  return {
    subscribe,
    toggle: () => update(state => !state),
    reset: () => set(false)
  };
}

export const menuIsOpen = createMenuIsOpen();