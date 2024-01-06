<script lang="ts" setup>
import { ref } from "vue";

import { useAccountsStore } from "@/stores/accounts";

const authStore = useAccountsStore();
const { addAccount, accounts } = useAccountsStore();
const account = ref<string>("");
const accountType = ref<string>("");
const balance = ref<number>(0);
const lastFour = ref<number>(0);
const dateCreated = ref<string>(new Date().toLocaleDateString());
const dateMofidied = ref<string>(new Date().toLocaleDateString());
const isAccountActive = ref<boolean>(true);

const submitForm = async () => {
  const accountObj = {
    account: account.value,
    accountType: accountType.value,
    balance: balance.value,
    lastFour: lastFour.value,
    dateCreated: dateCreated.value,
    dateMofidied: dateMofidied.value,
    isAccountActive: isAccountActive.value,
  };

  const response = await fetch(
    "https://wallet-app-d08ee-default-rtdb.firebaseio.com/accounts.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any additional headers if needed
      },
      body: JSON.stringify({ ...accountObj, id: "ACC001" }),
    }
  );

  //delete form after use
  (account.value = ""), (accountType.value = "");
  balance.value = 0;
  dateCreated.value = "";
  (lastFour.value = 0),
    (dateMofidied.value = ""),
    (isAccountActive.value = true);
};
</script>

<template>
  <div class="form">
    <form @submit.prevent="submitForm">
      <div class="header">
        <h3>Add Account</h3>
      </div>
      <div>
        <label class="label" for="account">Account Name:</label>
        <el-input class="input" v-model="account" placeholder="Account" />
      </div>
      <div>
        <label class="label" for="type">Account Type:</label>
        <el-input
          class="input"
          v-model="accountType"
          placeholder="Account Type"
        />
      </div>

      <div>
        <label class="label" for="Balance">Balance</label>
        <el-input
          class="input"
          v-model="balance"
          placeholder="Current Balance"
        />

        <label class="label" for="Last four numbers">Last four digits</label>
        <el-input
          class="input"
          v-model="lastFour"
          placeholder="Last 4 digits"
        />
      </div>

      <div>
        <div>
          <label class="label" for="Last four numbers">Created</label>
          <el-input
            disabled
            class="input"
            v-model="dateCreated"
            placeholder="Date Created"
          />
          <label class="label" for="Last Modified">Last Modified</label>
          <el-input
            disabled
            class="input"
            v-model="dateMofidied"
            placeholder="Last Modified"
          />
        </div>
        <div></div>
      </div>

      <div></div>

      <div>
        <label class="label2" for="">Active</label>
        <el-switch
          v-model="isAccountActive"
          active-color="#13ce66"
          inactive-color="#ff4949"
        >
        </el-switch>
      </div>

      <button class="submit-btn" type="submit">Submit</button>
    </form>
  </div>
</template>

<style scoped>
.submit-btn {
  border: solid rgb(240, 240, 240) 1px;
  padding: 0.7rem 2rem;
  border-radius: 5px;
  margin: 2rem 0;
  color: black;
  width: 100%;
}

.submit-btn:hover {
  background-color: rgb(138, 179, 255);
  transition: 0.5s ease-in-out;
  color: white;
}

.form {
  border: solid rgb(233, 233, 233) 1px;
  max-width: 32rem;
  margin: 8rem auto;
  padding: 1.5rem 1rem;
  border-radius: 10px;
  background-color: white;
  box-shadow: 5px 5px 17px 5px rgba(0, 0, 0, 0.1);
}

.input {
  margin: 1.52em 0;
}

.label {
  font-size: 0.8rem;
}

.label2 {
  margin-right: 1rem;
  font-size: 0.8rem;
}
</style>
