import { describe, it, expect } from "vitest";
import { counterReducer } from "../store/counter";

// Test for Redux counter reducer
describe("counterReducer", () => {
    
    // 1. Test default state when action is unknown
    it("should return the same state if the action is unknown", () => {
        const initialState = { count: 0 };
        const action = { type: "UNKNOWN" };

        const result = counterReducer(initialState, action);

        expect(result).toEqual(initialState); // no change
    });

    // 2. Test INCREMENT action
    it("should increase count by 1 when action is INCREMENT", () => {
        const initialState = { count: 0 };
        const action = { type: "INCREMENT" };

        const result = counterReducer(initialState, action);

        expect(result.count).toBe(1);
    });

    // 3. Test DECREMENT action
    it("should decrease count by 1 when action is DECREMENT", () => {
        const initialState = { count: 5 };
        const action = { type: "DECREMENT" };

        const result = counterReducer(initialState, action);

        expect(result.count).toBe(4);
    });

    // 4. Test SET action
    it("should set count to the value from action.payLoad when action is SET", () => {
        const initialState = { count: 0 };
        const action = { type: "SET", payLoad: 10 };

        const result = counterReducer(initialState, action);

        expect(result.count).toBe(10);
    });
});
