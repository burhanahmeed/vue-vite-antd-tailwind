module.exports = {
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly"
  },
  root: true,
  parser: "vue-eslint-parser",
  // https://github.com/vuejs/vue-eslint-parser#parseroptionsparser
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
  ],
  env: {
    node: true,
  },
}
