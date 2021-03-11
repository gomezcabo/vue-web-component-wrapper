<template>
  <div class="hello">
    <input v-model="mutableValue" />
  </div>
</template>

<script>
export default {
  name: "MyInput",
  props: {
    value: String,
  },
  data() {
    return {
      mutableValue: this.value || "",
    }
  },
  watch: {
    value(newValue) {
      this.mutableValue = newValue
    },
    mutableValue(newValue) {
      this.$emit("input", newValue.toUpperCase())
      this.$emit("change", newValue.toUpperCase())
    },
  },
}
</script>

<style>
input {
  border: 2px dashed lightcoral;
  padding: 6px 12px;
}

input:focus {
  outline: none;
  border: 2px dashed purple;
}
</style>
