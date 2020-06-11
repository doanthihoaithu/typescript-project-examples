import {abs} from "../../src/algorithm/Utils";
import { SerializationHelper} from "../SerializationHelper";
import {ImportMock} from "ts-mock-imports";
import * as exportModule from "../exports";
describe("Test",  () => {
        it("Test",  () => {
            const object =   {"a":1};
            let paramters: any = {};
            SerializationHelper.fillFromJSON(JSON.stringify(object), paramters);
            abs.apply(null, [paramters["a"],]);
            ImportMock.restore();
        });
        it("Test",  () => {
            const object =   {"a":-1};
            let paramters: any = {};
            SerializationHelper.fillFromJSON(JSON.stringify(object), paramters);
            abs.apply(null, [paramters["a"],]);
            ImportMock.restore();
        });
        it("Test",  () => {
            const object =   {"a":0};
            let paramters: any = {};
            SerializationHelper.fillFromJSON(JSON.stringify(object), paramters);
            abs.apply(null, [paramters["a"],]);
            ImportMock.restore();
        });
})