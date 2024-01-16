<script setup lang="ts">
import FooterInput from '@/components/FooterInput.vue';
import Footer from '@/components/Layout/Footer.vue';
import Header from '@/components/Layout/Header.vue';
import Main from '@/components/Layout/Main.vue';

import Conversation from "@/components/Conversation/index.vue"
</script>

<template>
  <Header>
  </Header>
  <Main>
   <Conversation/>
  </Main>
  <Footer>
    <FooterInput />
  </Footer>
</template>

<style scoped></style>
