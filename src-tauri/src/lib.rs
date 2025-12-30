// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
pub mod util;
use serde::{Deserialize, Serialize};
use util::*;
#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct MapEntity {
    index: i32,
    name: String,
    image: String,
    description: String,
}
#[tauri::command]
fn get_config_file() -> Option<String> {
    get_file(path_join!(HOME_DIR.get()?, "config.json").as_str()).ok()
}
#[tauri::command]
fn set_config_file(config: &str) -> Option<()> {
    set_file(path_join!(HOME_DIR.get()?, "config.json").as_str(), config.to_string()).ok()
}
#[tauri::command]
fn set_map_file(index: i32, content: &str) {
    let map_entity: MapEntity = serde_json::from_str(content).unwrap();
    set_sqlite_map_file(index, map_entity.clone());
}
#[tauri::command]
fn get_map_file(index: i32) -> Option<String> {
    get_sqlite_map_file(index)
}
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    init_home_dir();
    init_config_file();
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![get_config_file, set_config_file, set_map_file, get_map_file])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
