<script setup lang="ts">
const route = useRoute()
const paramId = route.params.userId

const link = computed(()=> `/auth/${paramId}/accounts`)

</script>


<template>
  <div>
    <div>user accounts page</div>
    <p>Will show list of accounts by 5 at the time</p>
    <ul>
      <li>showing 6 accounts max</li>
      <li>option to show all accounts "see more"</li>
      <li>Options to see each detail of each account</li>
      <li>create accounts</li>
      <li>update accounts</li>
    </ul>

    <NuxtLink :to="link">UserId</NuxtLink>
  </div>
</template>
