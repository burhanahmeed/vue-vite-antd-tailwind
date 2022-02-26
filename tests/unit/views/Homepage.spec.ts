import { shallowMount } from '@vue/test-utils';
import HomePage from '@/src/views/HomePage.vue';
import antdv from 'ant-design-vue';
import Button from 'ant-design-vue/lib/button';

describe('test HomePage.vue', () => {
  it('renders home page title', () => {
    const wrapper = shallowMount(HomePage, {
      global: {
        plugins: [antdv],
      },
    });

    expect(wrapper.text()).toContain('tailwind css');
  });

  it('has button', () => {
    const wrapper = shallowMount(HomePage, {
      global: {
        plugins: [antdv],
      },
    });

    expect(wrapper.findComponent(Button).exists()).toBeTruthy();
  });
});
