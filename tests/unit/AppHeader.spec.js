import { mount } from "@vue/test-utils"; //import mount from Vue Test Utils
import AppHeader from "@/components/AppHeader"; //import the component that we’re testing

//describe block groups related tests (here tests about AppHeader)
describe("AppHeader", () => {
  //particular tests
  test("if user is not logged in, do not show logout button", () => {
    const wrapper = mount(AppHeader); //mounting the component
    //if component has children, shallowMount() will return a simple implementation of that component instead of a fully rendered version
    //expect(wrapper.find("button").isVisible()).toBe(false);
    expect(wrapper.find("button").exists()).toBe(false);
  });

  test("if a user is logged in, show logout button", async () => {
    const wrapper = mount(AppHeader);
    wrapper.setData({ loggedIn: true }); // setting our data value
    await wrapper.vm.$nextTick(); //wait for updates to happen, to be sure that we’re testing the final rendered results
    //expect(wrapper.find("button").isVisible()).toBe(true);
    expect(wrapper.find("button").exists()).toBe(true);
  });
});
