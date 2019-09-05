const request = require("supertest");
const app = require("../../app");

describe('/router/index', () => {
    it('should responds with status 200 the GET method', () => {
        return request(app).get("/").then(response => {
            expect(response.status).toBe(200);
        })
    });

    it('should responds with a string with 5 letters', () => {
        return request(app).get("/").then(response => {
            expect(response.text.length).toBe(5);
        })
    });
});