import { shallowMount } from '@vue/test-utils';
import IconButton from '@/components/atoms/iconButton/IconButton.vue';

const wrapper = shallowMount(IconButton);

function getMountedComponent(Component, propsData) {
  return shallowMount(Component, {
    propsData,
  });
}

describe('IconButton', () => {
  it('renders correctly with different value', () => {
    expect(getMountedComponent(IconButton, {
      count: 10,
    }).text()).toBe('10');

    expect(getMountedComponent(IconButton, {
      count: 200,
    }).text()).toBe('200');
  });
});
