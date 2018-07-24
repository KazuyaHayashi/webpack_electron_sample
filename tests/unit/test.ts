import * as assert from "assert";
import greeter from "../../src/renderer/greeter";

describe("Array", () => {
    describe("#indexOf()", () => {
        it("should return -1 when the value is not exist", () => {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
    describe("greeter", () => {
        it("get Hello", () => {
            assert.strictEqual(greeter("test"), "Hello, test");
        });
    });
});
