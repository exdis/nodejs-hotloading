import fixture from './fixture.js';
class Response {
    constructor() {
        this.fixture = fixture;
    }

    getResponse() {
        return this.fixture;
    }
}

export default Response;
