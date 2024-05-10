<script setup lang="ts">

const isProd = true;
const baseUri = isProd
  ? "https://func-poketraderapi.azurewebsites.net/api"
  : "http://localhost:7164/api";


interface BuyOrderDto {
  sellOrderId: string;
}
const buyOrderList = ref<BuyOrderDto[]>([]);
const {
  data: buyOrderData,
  pending,
  error,
} = await useFetch<BuyOrderDto[]>(`${baseUri}/GetBuyOrders`);

buyOrderData.value && (buyOrderList.value = buyOrderData.value);

</script>

<template>
    <h1>Buy orders</h1>
    <li v-for="item in buyOrderList">
        {{ item.sellOrderId }}
    </li>
</template>