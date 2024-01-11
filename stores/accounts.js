import { defineStore } from "pinia";

export const useAccountsStore = defineStore("accounts", {
  state: () => ({
    wasAccountAdded: null,
    url: "https://wallet-app-d08ee-default-rtdb.firebaseio.com/accounts.json",
    accountsList: [
      {
        accountId: "1",
        addedBy: "Jackie",
        name: "Bank of america",
        accountType: "Regular",
        balance: 400.0,
        limit: 15000,
        lastFour: "4513",
        dateAdded: "10/31/2023",
        status: true,
      },
      {
        accountId: "2",
        addedBy: "Sergio",
        name: "Boston Firefighter",
        accountType: "Savings",
        balance: 150.0,
        limit: 15000,
        lastFour: "2817",
        dateAdded: "10/31/2023",
        status: true,
      },
    
      {
        accountId: "3",
        addedBy: "Jackie",
        name: "Chase Bank",
        accountType: "Credit Card",
        balance: 1500,
        limit: 15000,
        lastFour: "2915",
        dateAdded: "10/31/2023",
        status: true,
      },
      {
        accountId: "4",
        addedBy: "Jackie",
        name: "Chase Bank",
        accountType: "Credit Card",
        limit: 15000,
        balance: 1500.0,
        lastFour: "2915",
        dateAdded: "10/31/2023",
        status: true,
      },]
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


  getters: {
    getAccountId: (state) => {
      return (id)=> state.accountsList.find((item)=> item.accountId === id)
    }
  },
});
