<template>
  <amplify-authenticator>
    <!-- eslint-disable -->
    <amplify-sign-up
      :formFields.prop="formFields"
      slot="sign-up"
    ></amplify-sign-up>
    <!-- eslint-enable -->
  </amplify-authenticator>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      formFields: [
        { type: "username" },
        { type: "email" },
        { type: "password" },
      ],
    };
  },
};
</script>

<style></style>
