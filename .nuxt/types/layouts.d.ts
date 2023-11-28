import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "admin" | "default" | "login" | "regular" | "signup"
declare module "/home/terrero/Documents/2- Web Development/Frontend/Vue-Nuxt/Nuxt3_tracker_app/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}