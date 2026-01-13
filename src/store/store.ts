import { writable, readable } from "svelte/store";
import paper from "../assets/Home/paper.png";
import paper2 from "../assets/Home/paper2.png";
export const saveData = writable({});
export const boardText = writable("");
export const mounted = writable(false);
export const galleryLock = readable([
  {
    id: "1",
    lock: false,
    images: [paper, paper2, paper, paper2],
  },
  {
    id: "2",
    lock: true,
    images: [],
  },
  {
    id: "3",
    lock: true,
    images: [],
  },
  {
    id: "4",
    lock: true,
    images: [],
  },
  {
    id: "5",
    lock: true,
    images: [],
  },
  {
    id: "6",
    lock: true,
    images: [],
  },
  {
    id: "7",
    lock: true,
    images: [],
  },
]);
export const gamelevel = writable(-1);
