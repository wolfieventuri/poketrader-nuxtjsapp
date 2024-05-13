<script setup lang="ts">

const runtimeConfig = useRuntimeConfig()
const baseUri = runtimeConfig.public.apiBase


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