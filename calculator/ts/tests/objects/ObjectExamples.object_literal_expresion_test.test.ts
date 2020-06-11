import {object_literal_expresion_test} from "../../src/objects/ObjectExamples";
import { SerializationHelper} from "../SerializationHelper";
import {ImportMock} from "ts-mock-imports";
import * as exportModule from "../exports";
describe("Test",  () => {
        it("Test",  () => {
            const object =   {"s":"xxx","a":[null,null,null,5],"person":{"type":"Person","school":{"type":"School","name":"DHCN"},"pets":[{"type":"Animal","children":[{"type":"Animal","sound":"MeoMeo"}],"sound":"GauGau"}],"name":"UET"}};
            let paramters: any = {};
            SerializationHelper.fillFromJSON(JSON.stringify(object), paramters);
            object_literal_expresion_test.apply(null, [paramters["person"],paramters["s"],paramters["a"],]);
            ImportMock.restore();
        });
        it("Test",  () => {
            const object =   {"s":"","a":[null,null,null,6],"person":{"type":"Person","school":{"type":"School","name":"DHCN"},"pets":[{"type":"Animal","children":[{"type":"Animal","sound":"MeoMeo"}],"sound":"GauGau"}],"name":"UET"}};
            let paramters: any = {};
            SerializationHelper.fillFromJSON(JSON.stringify(object), paramters);
            object_literal_expresion_test.apply(null, [paramters["person"],paramters["s"],paramters["a"],]);
            ImportMock.restore();
        });
        it("Test",  () => {
            const object =   {"person":{"type":"Person","school":{"type":"School","name":""},"pets":[{"type":"Animal","children":[{"type":"Animal","sound":"MeoMeo"}],"sound":"GauGau"}],"name":"UET"},"s":""};
            let paramters: any = {};
            SerializationHelper.fillFromJSON(JSON.stringify(object), paramters);
            object_literal_expresion_test.apply(null, [paramters["person"],paramters["s"],paramters["a"],]);
            ImportMock.restore();
        });
        it("Test",  () => {
            const object =   {"person":{"type":"Person","pets":[{"type":"Animal","children":[{"type":"Animal","sound":""}],"sound":""}],"name":""},"s":""};
            let paramters: any = {};
            SerializationHelper.fillFromJSON(JSON.stringify(object), paramters);
            object_literal_expresion_test.apply(null, [paramters["person"],paramters["s"],paramters["a"],]);
            ImportMock.restore();
        });
})