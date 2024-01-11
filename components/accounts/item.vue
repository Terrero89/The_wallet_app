<script lang="ts" setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useAccountsStore } from "@/stores/accounts";
import { storeToRefs } from "pinia";

const props = defineProps(["id"]);

//?route Params
const route = useRoute();
const userId = route.params.userId; //? use id
const accDetailId = route.params.detailsId; // id specific

//?store
const accountStore = useAccountsStore(); //projects store
//?PROPERTIES DESTRUCTURING
const { getAccountId } = storeToRefs(accountStore);

//?route with route param id for the accID selected
const accountId = computed(() => getAccountId.value(accDetailId)!);

</script>

<template>
  <div>
    <div>USer ID: {{ userId }}</div>
    <div>Details ID:{{ accDetailId }}</div>
    {{ accountId.name }}
    <AccountsDescription
      :account="accountId.name"
      :type="accountId.accountType"
      :four="accountId.lastFour"
      :limit="accountId.limit"
      :date="accountId.dateAdded"
      :balance="accountId.balance"
      :user="accountId.addedBy"
      :status="accountId.status"
    />
  </div>
</template>
