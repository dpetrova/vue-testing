import MessageDisplay from "@/components/MessageDisplay";
import { mount } from "@vue/test-utils";
import { getMessage } from "../../src/services/axios";
import flushPromises from "flush-promises"; //third party library to await asynchronous behavior in our lifecycle hooks

//mock axios
jest.mock("../../src/services/axios");

//clear all mocks before each test
beforeEach(() => {
  jest.clearAllMocks();
});

describe("MessageDisplay", () => {
  it("Calls getMessage and displays message", async () => {
    // mock the API call
    const mockMessage = "Hello from the db";
    getMessage.mockResolvedValueOnce({ text: mockMessage }); // calling our mocked get request
    //mount the component
    const wrapper = mount(MessageDisplay);
    // wait for promise to resolve
    await flushPromises();
    // check that call happened once
    expect(getMessage).toHaveBeenCalledTimes(1);
    // check that component displays message
    const message = wrapper.find('[data-testid="message"]').element.textContent;
    expect(message).toEqual(mockMessage);
  });

  it("Displays an error when getMessage call fails", async () => {
    // mock the failed API call
    const mockError = "Oops! Something went wrong.";
    getMessage.mockRejectedValueOnce(mockError);
    //mount the component
    const wrapper = mount(MessageDisplay);
    // wait for promise to reject
    await flushPromises();
    // check that call happened once
    expect(getMessage).toHaveBeenCalledTimes(1);
    // check that component displays error
    const displayedError = wrapper.find('[data-testid="message-error"]').element
      .textContent;
    expect(displayedError).toEqual(mockError);
  });
});
