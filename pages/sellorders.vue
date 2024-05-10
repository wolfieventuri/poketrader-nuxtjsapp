<script setup lang="ts">

interface ApiDto {
  PokemonName: string;
  RowKey: string;
  SellPrice: string;
}

const isProd = true;
const baseUri = isProd
  ? "https://func-poketraderapi.azurewebsites.net/api"
  : "http://localhost:7164/api";

const sellOrderList = ref<ApiDto[]>([]);

const {
  data: sellOrderData,
  pending,
  error,
} = await useFetch<ApiDto[]>(`${baseUri}/GetSellOrders`);

sellOrderData.value && (sellOrderList.value = sellOrderData.value);

if (pending.value) {
  console.log("Request is pending...");
}
if (error.value) {
  console.error("An error occurred:", error.value);
}

async function placeBuyOrder(rowKey: string) {
  console.log("placing buy order");
  console.log(rowKey);
  try {
    const seedData = await $fetch(`${baseUri}/PlaceBuyOrder`, {
      method: "POST",
      body: {
        sellOrderId: rowKey,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

</script>

<template>
    <h1>Sell orders</h1>
    <li v-for="sellOrder in sellOrderList">
        {{ sellOrder.SellPrice }}
        {{ sellOrder.PokemonName }}
        <button @click="placeBuyOrder(sellOrder.RowKey)">Buy</button>
      </li>

</template>