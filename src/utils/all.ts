import { saveData } from "../store/store";
import { invoke } from "@tauri-apps/api/core";
import { goto } from "$app/navigation";
export async function sleep(second: number) {
  return new Promise((resolve) => setTimeout(resolve, second));
}
export async function init() {
  const savedata = JSON.parse(
    await invoke("get_all_data", {
      galleryCount: 10,
      saveCount: 40,
      branchCount: 7,
    }),
  );
  console.log(savedata);
  saveData.set(savedata);
}

export const router = {
  push: (path: string) => goto(path),
  replace: (path: string) => goto(path, { replaceState: true }),
  back: () => window.history.back(),
};
