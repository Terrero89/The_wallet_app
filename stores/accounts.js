import { defineStore } from "pinia";

export const useAccountsStore = defineStore("accounts", {
  state: () => ({
    wasAccountAdded: null,
    url: "https://wallet-app-d08ee-default-rtdb.firebaseio.com/accounts.json",
    accountsList: [],
  }),

  actions: {
    async createAccount(id, data) {
      this.wasAccountAdded = false;
      const response = await fetch(
        "https://wallet-app-d08ee-default-rtdb.firebaseio.com/accounts.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Add any additional headers if needed
          },
          body: JSON.stringify({ ...data }),
        }
      );

      if (!response.ok) {
        throw new Error("Could not add account");
      }
      this.wasAccountAdded = true;

      setTimeout(() => {
        this.wasAccountAdded = null;
      }, 2000);
    },
    updateAccount(id) {},
    deleteAccount(id) {},
  },
  getters: {},
});
