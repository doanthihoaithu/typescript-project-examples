import {external_function_test} from "../../src/externals/ExternalExample";
import { SerializationHelper} from "../SerializationHelper";
import {ImportMock} from "ts-mock-imports";
import * as exportModule from "../exports";
describe("Test",  () => {
        it("Test",  () => {
            const stub1 = ImportMock.mockFunction(exportModule, 'max', 4);
            const stub2 = ImportMock.mockFunction(exportModule, 'sum', 4);
            const mockManager1 = ImportMock.mockStaticClass(exportModule, "Algorithm");
            mockManager1.mock("max", 9);
            mockManager1.mock("sum", 7);
            const object =   {"a":5,"b":6};
            let paramters: any = {};
            SerializationHelper.fillFromJSON(JSON.stringify(object), paramters);
            external_function_test.apply(null, [paramters["a"],paramters["b"],]);
            ImportMock.restore();
        });
        it("Test",  () => {
            const stub1 = ImportMock.mockFunction(exportModule, 'max', 4);
            const stub2 = ImportMock.mockFunction(exportModule, 'sum', 4);
            const mockManager1 = ImportMock.mockStaticClass(exportModule, "Algorithm");
            mockManager1.mock("max", 9);
            mockManager1.mock("sum", 7);
            const object =   {"a":5,"b":5};
            let paramters: any = {};
            SerializationHelper.fillFromJSON(JSON.stringify(object), paramters);
            external_function_test.apply(null, [paramters["a"],paramters["b"],]);
            ImportMock.restore();
        });
        it("Test",  () => {
            const stub1 = ImportMock.mockFunction(exportModule, 'max', 4);
            const stub2 = ImportMock.mockFunction(exportModule, 'sum', 4);
            const mockManager1 = ImportMock.mockStaticClass(exportModule, "Algorithm");
            mockManager1.mock("max", 9);
            mockManager1.mock("sum", 6);
            const object =   {"a":0,"b":0};
            let paramters: any = {};
            SerializationHelper.fillFromJSON(JSON.stringify(object), paramters);
            external_function_test.apply(null, [paramters["a"],paramters["b"],]);
            ImportMock.restore();
        });
        it("Test",  () => {
            const stub1 = ImportMock.mockFunction(exportModule, 'max', 4);
            const stub2 = ImportMock.mockFunction(exportModule, 'sum', 3);
            const mockManager1 = ImportMock.mockStaticClass(exportModule, "Algorithm");
            mockManager1.mock("sum", 0);
            mockManager1.mock("max", 0);
            const object =   {"a":0,"b":0};
            let paramters: any = {};
            SerializationHelper.fillFromJSON(JSON.stringify(object), paramters);
            external_function_test.apply(null, [paramters["a"],paramters["b"],]);
            ImportMock.restore();
        });
})