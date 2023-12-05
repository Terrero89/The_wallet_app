import { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "admin" | "default" | "login" | "regular" | "signup"
declare module "../../node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}