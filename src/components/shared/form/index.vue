<template>
  <form v-on="$listeners" class="form">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "Form",
  provide() {
    return {
      form: this,
    };
  },
  data() {
    return {
      inputs: [],
    };
  },
  methods: {
    registerInput(input) {
      this.inputs.push(input);
    },
    unregisterInput(input) {
      this.inputs.filter((item) => item !== input);
    },
    validate() {
      return this.inputs.reduce((isValid, input) => {
        const isInputValidate = input.validate();
        return isValid && isInputValidate;
      }, true);
    },
    reset() {
      this.inputs.forEach((input) => input.reset());
    },
  },
};
</script>

<style lang="scss" scoped></style>
