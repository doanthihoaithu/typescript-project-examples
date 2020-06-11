import {sum} from "../../src/algorithm/Utils";
import { SerializationHelper} from "../SerializationHelper";
import {ImportMock} from "ts-mock-imports";
import * as exportModule from "../exports";
describe("Test",  () => {
        it("Test",  () => {
            const object =   {"b":0,"a":1};
            let paramters: any = {};
            SerializationHelper.fillFromJSON(JSON.stringify(object), paramters);
            sum.apply(null, [paramters["a"],paramters["b"],]);
            ImportMock.restore();
        });
        it("Test",  () => {
            const object =   {"a":0,"b":0};
            let paramters: any = {};
            SerializationHelper.fillFromJSON(JSON.stringify(object), paramters);
            sum.apply(null, [paramters["a"],paramters["b"],]);
            ImportMock.restore();
        });
        it("Test",  () => {
            const object =   {"a":5,"b":-5};
            let paramters: any = {};
            SerializationHelper.fillFromJSON(JSON.stringify(object), paramters);
            sum.apply(null, [paramters["a"],paramters["b"],]);
            ImportMock.restore();
        });
})