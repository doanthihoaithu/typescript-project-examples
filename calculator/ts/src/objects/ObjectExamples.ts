import {Person} from "../Objects";

export function object_literal_expresion_test( person: Person, s: string, a: Array<number>): number {
    let names = [{name: "UET", age: 23, school: {name: "DHCN"}}];
    let list = [1,2,3,4,5];
    list[2] = 10;
    if (person.name === names[0].name && person.pets[0].getSound() == "GauGau" && person.pets[0].getChildren()[0].getSound() == "MeoMeo") {
        if (person.school.name === names[0].school.name && names[0].name.length < list[2]) {
            if (s.length > 2 && a[3] == 5) {
                return 1;
            }
            return 1;
        }
        else return 2;
    }
    return 1;
}





