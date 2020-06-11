import {Algorithm, max, sum} from "../Objects";

export function external_function_test(a: number, b: number): number {
    let x: number = sum(a,b);
    let y: number = Algorithm.sum(4,5);
    let z: number = Algorithm.max(4,5);

    if (x > 3 && max(3,4) < 5) {
        if (y > 6 && z < 10) {
            if ( b >5 && a < 6 ) {
                return 1;
            }
        }
    } else return 1;
}
