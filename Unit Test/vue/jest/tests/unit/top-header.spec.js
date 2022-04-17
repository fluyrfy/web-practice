import TopHeader from "@/components/Top-Header.vue";
import { shallowMount } from "@vue/test-utils";
describe("topHeader.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(TopHeader, {});
  });
});
