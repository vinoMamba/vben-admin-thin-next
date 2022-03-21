<template>
  <div class="app-loading">
    <div class="app-loading-wrap">
      <img src="/resource/img/logo.png" class="app-loading-logo" alt="Logo" />
      <div class="app-loading-dots">
        <span class="dot dot-spin"><i></i><i></i><i></i><i></i></span>
      </div>
      <div class="app-loading-title">{{ title }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { computed, onMounted } from 'vue';
  import { useUserStore } from '/@/store/modules/user';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useDesign } from '/@/hooks/web/useDesign';

  const userStore = useUserStore();
  const { notification, createErrorModal } = useMessage();
  const { t } = useI18n();
  const { prefixCls } = useDesign('login');
  const env = import.meta.env;
  const title = computed(() => env.VITE_GLOB_APP_TITLE);

  async function handleLogin() {
    try {
      const userInfo = await userStore.login({
        password: '123456',
        username: 'vben',
        mode: 'none', //不要默认的错误提示
      });
      if (userInfo) {
        notification.success({
          message: t('sys.login.loginSuccessTitle'),
          description: `${t('sys.login.loginSuccessDesc')}: ${userInfo.realName}`,
          duration: 3,
        });
      }
    } catch (error) {
      createErrorModal({
        title: t('sys.api.errorTip'),
        content: (error as unknown as Error).message || t('sys.api.networkExceptionMsg'),
        getContainer: () => document.body.querySelector(`.${prefixCls}`) || document.body,
      });
    } finally {
    }
  }

  onMounted(() => {
    setTimeout(() => {
      handleLogin();
    }, 3000);
  });
</script>
<style>
  .app-loading {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #f4f7f9;
  }

  .app-loading .app-loading-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .app-loading .dots {
    display: flex;
    padding: 98px;
    justify-content: center;
    align-items: center;
  }

  .app-loading .app-loading-title {
    display: flex;
    margin-top: 30px;
    font-size: 30px;
    color: rgb(0 0 0 / 85%);
    justify-content: center;
    align-items: center;
  }

  .app-loading .app-loading-logo {
    display: block;
    width: 90px;
    margin: 0 auto;
    margin-bottom: 20px;
  }

  .dot {
    position: relative;
    display: inline-block;
    width: 48px;
    height: 48px;
    margin-top: 30px;
    font-size: 32px;
    transform: rotate(45deg);
    box-sizing: border-box;
    animation: ant-rotate 1.2s infinite linear;
  }

  .dot i {
    position: absolute;
    display: block;
    width: 20px;
    height: 20px;
    background-color: #0065cc;
    border-radius: 100%;
    opacity: 30%;
    transform: scale(0.75);
    animation: ant-spin-move 1s infinite linear alternate;
    transform-origin: 50% 50%;
  }

  .dot i:nth-child(1) {
    top: 0;
    left: 0;
  }

  .dot i:nth-child(2) {
    top: 0;
    right: 0;
    animation-delay: 0.4s;
    animation-delay: 0.4s;
  }

  .dot i:nth-child(3) {
    right: 0;
    bottom: 0;
    animation-delay: 0.8s;
    animation-delay: 0.8s;
  }

  .dot i:nth-child(4) {
    bottom: 0;
    left: 0;
    animation-delay: 1.2s;
    animation-delay: 1.2s;
  }

  @keyframes ant-rotate {
    to {
      transform: rotate(405deg);
      transform: rotate(405deg);
    }
  }

  @keyframes ant-rotate {
    to {
      transform: rotate(405deg);
      transform: rotate(405deg);
    }
  }

  @keyframes ant-spin-move {
    to {
      opacity: 100%;
    }
  }

  @keyframes ant-spin-move {
    to {
      opacity: 100%;
    }
  }
</style>
