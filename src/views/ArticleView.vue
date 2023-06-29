<template>
  <ArticleContent>
    <div p="l-40 t-40" text="white">Article</div>
    <VForm
      ref="formRef"
      v-slot="{ meta }"
      @submit="test"
      mt-10
      w="1/2"
      flex
      flex-col
      pl-40
      text="white"
    >
      <VField name="email" type="email" rules="required|email" />
      <ErrorMessage name="email" />
      <VField name="password" type="password" rules="required|min:6" />
      <ErrorMessage name="password" />
      <button w="1/2" mx-auto mt-8 type="submit" :disabled="!meta.valid">
        送出
      </button>
    </VForm>

    <DynamicForm
      :schema="formSchema"
      mt-10
      w="1/2"
      flex
      flex-col
      pl-40
      text="white"
    />
  </ArticleContent>
</template>

<script setup>
import { ref } from 'vue';
import ArticleContent from '@/components/ArticleContent.vue';
import DynamicForm from '@/components/DynamicForm.vue';

const formRef = ref(null);

const formSchema = ref({
  fields: [
    {
      label: 'Your Name',
      name: 'name',
      as: 'input',
    },
    {
      label: 'Your Email',
      name: 'email',
      as: 'input',
    },
    {
      label: 'Your Password',
      name: 'password',
      as: 'input',
    },
  ],
});

const test = (value) => {
  console.log('value', value);
  formRef.value.resetForm();
};
</script>
