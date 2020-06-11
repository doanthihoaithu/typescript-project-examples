import {not_handled_test} from "../../src/stringTests/StringTests";
import { SerializationHelper} from "../SerializationHelper";
import {ImportMock} from "ts-mock-imports";
import * as exportModule from "../exports";
describe("Test",  () => {
        it("Test",  () => {
            const object =   {"s":"xxxxxxxxxxxxxxxxxxxxxxx"};
            let paramters: any = {};
            SerializationHelper.fillFromJSON(JSON.stringify(object), paramters);
            not_handled_test.apply(null, [paramters["s"],]);
            ImportMock.restore();
        });
        it("Test",  () => {
            const object =   {"s":"xxxxxxxxxx"};
            let paramters: any = {};
            SerializationHelper.fillFromJSON(JSON.stringify(object), paramters);
            not_handled_test.apply(null, [paramters["s"],]);
            ImportMock.restore();
        });
        it("Test",  () => {
            const object =   {"s":"xxxxxxxxxx"};
            let paramters: any = {};
            SerializationHelper.fillFromJSON(JSON.stringify(object), paramters);
            not_handled_test.apply(null, [paramters["s"],]);
            ImportMock.restore();
        });
        it("Test",  () => {
            const object =   {"s":""};
            let paramters: any = {};
            SerializationHelper.fillFromJSON(JSON.stringify(object), paramters);
            not_handled_test.apply(null, [paramters["s"],]);
            ImportMock.restore();
        });
})