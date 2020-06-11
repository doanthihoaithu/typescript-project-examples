import {simpleStringFunction3} from "../../src/stringTests/StringTests";
import { SerializationHelper} from "../SerializationHelper";
import {ImportMock} from "ts-mock-imports";
import * as exportModule from "../exports";
describe("Test",  () => {
        it("Test",  () => {
            const object =   {"s":"Hoaithuxxx","a":0};
            let paramters: any = {};
            SerializationHelper.fillFromJSON(JSON.stringify(object), paramters);
            simpleStringFunction3.apply(null, [paramters["s"],paramters["a"],]);
            ImportMock.restore();
        });
        it("Test",  () => {
            const object =   {"s":"HoxUETxxxx","a":0};
            let paramters: any = {};
            SerializationHelper.fillFromJSON(JSON.stringify(object), paramters);
            simpleStringFunction3.apply(null, [paramters["s"],paramters["a"],]);
            ImportMock.restore();
        });
        it("Test",  () => {
            const object =   {"s":"Ho x@\\nxEnd","a":0};
            let paramters: any = {};
            SerializationHelper.fillFromJSON(JSON.stringify(object), paramters);
            simpleStringFunction3.apply(null, [paramters["s"],paramters["a"],]);
            ImportMock.restore();
        });
        it("Test",  () => {
            const object =   {"s":"@xxxxxxxxnd","a":0};
            let paramters: any = {};
            SerializationHelper.fillFromJSON(JSON.stringify(object), paramters);
            simpleStringFunction3.apply(null, [paramters["s"],paramters["a"],]);
            ImportMock.restore();
        });
        it("Test",  () => {
            const object =   {"s":"","a":0};
            let paramters: any = {};
            SerializationHelper.fillFromJSON(JSON.stringify(object), paramters);
            simpleStringFunction3.apply(null, [paramters["s"],paramters["a"],]);
            ImportMock.restore();
        });
})