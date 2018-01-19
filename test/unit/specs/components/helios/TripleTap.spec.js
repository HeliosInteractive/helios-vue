import { mount } from '@vue/test-utils';
import TripleTap from '@/components/helios/TripleTap';

describe('TripleTap.vue', () => {
  let vm;
  let wrapper;
  beforeEach(() => {
    wrapper = mount(TripleTap);
    vm = wrapper.vm;
  });

  it('should render correct contents', () => {
    expect(vm.$el.id).to.equal('triple-tap');
  });

  it('should define the correct data on mount', () => {
    expect(vm.taps).to.equal(0);
  });

  it('should add one tap with addTap when clicked', () => {
    expect(vm.taps).to.equal(0);
    vm.$el.click();
    expect(vm.taps).to.equal(1);
  });

  it('should add a timeout when addTap', () => {
    vm.addTap();
    expect(typeof vm.tapTimeout).to.equal('number');
  });

  it('should update the timeout when addTap if one exists', () => {
    vm.addTap();
    const initialTimeout = parseInt(vm.tapTimeout, 10);
    vm.addTap();
    expect(vm.tapTimeout).to.not.equal(initialTimeout);
  });

  it('should clearTaps when clearTaps is called', () => {
    vm.taps = 2;
    vm.clearTaps();
    expect(vm.taps).to.equal(0);
  });

  it('should route to the AdminPanel on three taps', () => {
    vm.addTap();
    vm.addTap();
    vm.addTap();
    vm.$nextTick(() => {
      expect(wrapper.emitted('tapped')).toBeTruthy();
    });
  });
});
