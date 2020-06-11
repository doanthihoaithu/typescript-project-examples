export function max(a: number, b: number): number {
    if (a> b) {
        return a;
    } else if (a< b) {
        return b;
    }
    else return 1   ;
}

export function sum(a: number, b: number): number {
    let x = a + b;
    let y = a - b;
    let z = x + y;
    if ( z > y) {
        return a;
    } else {
        z = z + 1;
        if (z < 10) {
            return b;
        }
    }
}

export function abs(a: number) {
    if ( a > 0) return a;
    else if (a < 0) return -a;
    else return 0;
}
