import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {

    test("getAPIKey returns null when no authorization header is present", () => {
        const headers = {};
        const apiKey = getAPIKey(headers);
        expect(apiKey).toBeNull();
    });

    test("getAPIKey returns null for malformed authorization header", () => {
        const headers = {
            authorization: "Bearer sometoken",
        };
        const apiKey = getAPIKey(headers);
        expect(apiKey).toBeNull();
    });

    test("getAPIKey returns the API key when a valid authorization header is present", () => {
        const headers = {
            authorization: "ApiKey my-secret-api-key",
        };
        const apiKey = getAPIKey(headers);
        expect(apiKey).toBe("my-secret-api-key");
    });
});
