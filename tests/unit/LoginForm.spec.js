import LoginForm from "@/components/LoginForm.vue";
import { mount } from "@vue/test-utils";

describe("LoginForm", () => {
  it("emits an event with a user data payload", () => {
    const wrapper = mount(LoginForm);
    // 1. Find text input
    const input = wrapper.find('[data-testid="name-input"]');
    // 2. Set value for text input
    input.setValue("Adam Jahr");
    // 3. Simulate form submission
    wrapper.trigger("submit");
    // 4. Assert event has been emitted
    const formSubmittedCalls = wrapper.emitted("formSubmitted"); //store any calls of formSubmitted event in an array
    //console.log(formSubmittedCalls);
    expect(formSubmittedCalls).toHaveLength(1); //check if the event was indeed emitted when submit the form
    // 5. Assert payload is correct
    const expectedPayload = { name: "Adam Jahr" };
    expect(wrapper.emitted("formSubmitted")[0][0]).toMatchObject(
      expectedPayload
    );
  });
});
