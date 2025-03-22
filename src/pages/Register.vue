<template>
  <div>
    <h5 class="mb-5 text-primar">Créer un compte</h5>
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 24 }"
      :wrapper-col="{ span: 24 }"
      layout="vertical"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="Nom & Prenoms"
        name="name"
        :rules="[{ required: true, message: 'Please input your name!' }]"
      >
        <a-input v-model:value="formState.name" style="width: 100%"/>
      </a-form-item>
      <a-form-item
        label="Adresse email"
        name="email"
        :rules="[{ required: true, message: 'Please input your email!' }]"
      >
        <a-input v-model:value="formState.email" style="width: 100%"/>
      </a-form-item>

      <a-form-item
        label="Mot de passe"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>
      <a-form-item
        label="Confirmation"
        name="confirm"
        :rules="[{ required: true, message: 'Please input your confirmation!' }]"
      >
        <a-input-password v-model:value="formState.confirm" />
      </a-form-item>

      <a-form-item name="remember">
        <a-checkbox v-model:checked="formState.remember"
          >Remember me</a-checkbox
        >
      </a-form-item>

      <a-form-item>
        <button class="btn btn-dark" type="submit">S'inscrire</button>
      </a-form-item>
    </a-form>
      <div class="my-5">
        <small>J'ai déjà un compte, <router-link to="/auth/login">connectez vous</router-link> </small>
      </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { notification } from 'ant-design-vue';

interface FormState {
  email: string;
  name: string;
  password: string;
  confirm: string;
  remember: boolean;
}


const formState = reactive<FormState>({
  email: "",
  name: "",
  password: "",
  confirm: "",
  remember: true,
});
const onFinish = (values: any) => {
  console.log("Success:", values);
 notification['success']({
    message: 'Notification Title',
    description:
      'I will never close automatically. I will be close automatically. I will never close automatically.',
  });
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);

};
</script>