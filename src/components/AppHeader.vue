<template>
  <div>
    <button v-if="loggedIn">Logout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: false
    };
  }
};
</script>
