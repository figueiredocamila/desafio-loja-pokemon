import { shallowMount } from '@vue/test-utils';
import Resume from '@/components/molecules/resume/Resume.vue';

function getMountedComponent(Component, propsData) {
  return shallowMount(Component, {
    propsData,
  });
}

describe('Resume', () => {
  it('render resume value', () => {
    expect(getMountedComponent(Resume, {
      value: 20.99,
    }).text()).toBe('Total: R$ 20.99');
  });
});
