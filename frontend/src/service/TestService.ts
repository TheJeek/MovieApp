import axios from 'axios';
import {TestObject} from "../database/TestObject.ts";

const API_BASE_URL = import.meta.env.VITE_API_URL + "/api/testObject"

export class TestService {
    static async getAll() {
        try {
            const response  = await axios({
                url: `${API_BASE_URL}/all`,
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            console.log("Fetched TestObjects:", response.data);
            return response.data;
        } catch (error) {
            console.error("Error fetching TestObjects:", error);
            throw error;
        }
    }

    static async getById(id: number) {
        try {
            const response  = await axios({
                url: `${API_BASE_URL}/${id}`,
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            console.log("Fetched TestObjects:", response.data);
            return response.data;
        } catch (error) {
            console.error("Error fetching TestObjects:", error);
            throw error;
        }
    }

    static async createTestObject(testObject : TestObject) {
        try {
            const response  = await axios({
                url: `${API_BASE_URL}/create`,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                data: testObject,
            });
            console.log("Created TestObject:", response.data);
            return response.data;
        } catch (error) {
            console.error("Error creating TestObject:", error);
            throw error;
        }
    }
}