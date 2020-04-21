import { writable } from 'svelte/store';
import { stores } from '@sapper/app';

function createMenuIsOpen() {
  const { subscribe, set, update } = writable(false);

  return {
    subscribe,
    toggle: () => update(state => !state),
    reset: () => set(false)
  };
}

export const menuIsOpen = createMenuIsOpen();

function createCurrentPage() {
  const { subscribe, set, update } = writable(null);
  return {
    subscribe,
    set: (page) => set(page),
    reset: () => set(null)
  };
}

export const currentPage = createCurrentPage();