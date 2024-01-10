// It will be available as useFoo() (camelCase of file name without extension)
export const useBanks  = () => {
  
    return useState('banks', () =>  [
        {
          accountId: "15",
          addedBy: "Jackie",
          name: "Bank of america",
          accountType: "Regular",
          balance: 400.0,
          lastFour: "4513",
          dateAdded: "10/31/2023",
        },
        {
          accountId: "15",
          addedBy: "Sergio",
          name: "Boston Firefighter",
          accountType: "Savings",
          balance: 150.0,
          lastFour: "2817",
          dateAdded: "10/31/2023",
        },
        {
          accountId: "15",
          addedBy: "Jackie",
          name: "Chase Bank",
          accountType: "Credit Card",
          balance: 1500,
          limit: 15000,
          lastFour: "2915",
          dateAdded: "10/31/2023",
        },
        {
          accountId: "15",
          addedBy: "Jackie",
          name: "Chase Bank",
          accountType: "Credit Card",
          limit: 15000,
          balance: 1500.0,
          lastFour: "2915",
          dateAdded: "10/31/2023",
        },
      ])
}



const len = "TEXTTTTH+ING"
export const useText = ()=>{
  return useState('text', ()=> len)
}
  

