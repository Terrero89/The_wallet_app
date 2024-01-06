import { defineStore } from "pinia";

export const useProfilesStore = defineStore("profiles", {
  state: () => ({
    profiles: [
      {
        id: "1",
        userId: "1",
        name: "Sergio",
        last: "Terrero",
        username: "Admin",
        email: "gio@gmail.com",
        gender: "male",
        age: 34,
        phone: "857-919-1517",
        dateCreated: "05/22/2023",
        dateUpdated: "05/25/2023",
        isAdmin: true,
        isActive: true,

        linkedUsers: ["JackieTerrero"],
        BankAccounts: [
          {
            name: "Bank of america",
            accountType: "Regular",
            balance: 900.0,
            lastFour: "4513",
            transactions: [
              {
                transactionId: "100",
                userId: "1",
                date: "05/25/2022",
                dateUpdated: "05/25/2022",
                place: "Stop and shop",
                transactionType: "Shopping",
                amount: 15.99,
                AccountUsed: "Boston Firefighter",
              },
              {
                transactionId: "105",
                userId: "1",
                date: "05/27/2022",
                dateUpdated: "05/25/2022",
                place: "Stop and shop",
                transactionType: "Groseries",
                {
                amount: 25.33,
                AccountUsed: "Boston Firefighter",
              },
              {
                transactionId: "105",
                userId: "1",
                date: "05/27/2022",
                dateUpdated: "05/25/2022",
                place: "Stop and shop",
                transactionType: "Groseries",
                amount: 25.33,
                AccountUsed: "Boston Firefighter",
              },
            ],
          },
          {
            name: "Boston Firefighter Credit Union",
            accountType: "Savings",
            balance: 150.0,
            lastFour: "2817",
            transactions: [
              {
                transactionId: "2109",
                userId: "1",
                date: "05/27/2022",
                dateUpdated: "05/25/2022",
                place: "Stop and shop",
                transactionType: "Groseries",
                amount: 25.33,
              },
            ],
          },
          {
            name: "Chase Bank",
            accountType: "Credit Card",
            balance: 1500.0,
            limit: 15000,
            balance: 1500.0,
            lastFour: "2915",
            transactions: [
              {
                transactionId: "100",
                userId: "1",
                date: "05/25/2022",
                dateUpdated: "05/25/2022",
                place: "Stop and shop",
                transactionType: "Shopping",
                amount: 15.99,
                AccountUsed: "Boston Firefighter",
              },
              {
                transactionId: "105",
                userId: "1",
                date: "05/27/2022",
                dateUpdated: "05/25/2022",
                place: "Stop and shop",
                transactionType: "Groseries",
                amount: 25.33,
                AccountUsed: "Boston Firefighter",
              },
            ],
          },
          {
            name: "Chase Bank",
            accountType: "Credit Card",
            limit: 15000,
            balance: 1500.0,
            lastFour: "2915",
            transactions: [
              {
                transactionId: "100",
                userId: "1",
                date: "05/25/2022",
                dateUpdated: "05/25/2022",
                place: "Stop and shop",
                transactionType: "Shopping",
                amount: 15.99,
                AccountUsed: "Boston Firefighter",
              },
              {
                transactionId: "105",
                userId: "1",
                date: "05/27/2022",
                dateUpdated: "05/25/2022",
                place: "Stop and shop",
                transactionType: "Groseries",
                amount: 25.33,
                AccountUsed: "Boston Firefighter",
              },
            ],
          },
        ],
      },

      {
        id: "2",
        userId: "1",
        name: "Jackie",
        last: "Terrero",
        username: "Admin2",
        email: "jackie@gmail.com",
        gender: "female",
        age: 32,
        phone: "857-919-1517",
        dateCreated: "05/22/2023",
        dateUpdated: "05/25/2023",
        isAdmin: true,
        isActive: true,

        linkedUsers: [],
        BankAccounts: [
          {
            name: "Bank of america",
            accountType: "Regular",
            balance: 900.0,
            lastFour: "4513",
          },
          {
            name: "Boston Firefighter Credit Union",
            accountType: "Savings",
            balance: 150.0,
            lastFour: "2817",
          },
          {
            name: "Chase Bank",
            accountType: "Credit Card",
            balance: 1500.0,
            limit: 15000,
            balance: 1500.0,
            lastFour: "2915",
          },
          {
            name: "Chase Bank",
            accountType: "Credit Card",
            limit: 15000,
            balance: 1500.0,
            lastFour: "2915",
          },
        ],
      },

      // {
      //   id: "2",
      //   userId: "2",
      //   name: "Jackie",
      //   last: "Terrero",
      //   username: "JTerrero",
      //   email: "jio@gmail.com",
      //   gender: "female",
      //   age: 30,
      //   password: "123",
      //   phone: "857-919-1518",
      //   dateCreated: "05/23/2023",
      //   dateUpdated: "05/25/2023",
      //   isAdmin: false,
      //   isActive: true,
      // },
      // {
      //   id: "3",
      //   userId: "3",
      //   name: "Ezra",
      //   last: "Terrero",
      //   username: "Exra",
      //   email: "Er@gmail.com",
      //   gender: "male",
      //   age: 29,
      //   password: "123",
      //   phone: "857-919-1519",
      //   dateCreated: "05/22/2023",
      //   dateUpdated: "05/25/2023",
      //   isAdmin: false,
      //   isActive: true,
      // },

      // {
      //   id: "4",
      //   userId: "4",
      //   name: "Camila",
      //   last: "Terrero",
      //   username: "JTerrero",
      //   email: "cam@gmail.com",
      //   gender: "female",
      //   age: 20,
      //   password: "123",
      //   phone: "857-919-1516",
      //   dateCreated: "05/23/2023",
      //   dateUpdated: "05/25/2023",
      //   isAdmin: false,
      //   isActive: true,
      // },
    ],
  }),

  actions: {},
});
