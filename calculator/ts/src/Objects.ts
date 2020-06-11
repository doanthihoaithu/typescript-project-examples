export class School {
    public numberRoom: number;
    public area: number;
    public name: string;
    constructor(numberRoom?: number, area?: number, name?: string) {
        this.numberRoom = numberRoom;
        this.area = area;
        this.name = name;
    }

    getName() {
        return this.name;
    }
}


export class Person {

    public height: number;
    public age: number;
    public school: School;
    public schools: boolean;
    public isGirl: boolean;
    public name: string;
    public length: number;
    public phone: string[];
    private fullName: string;
    public pets: Array<Animal>;
    constructor(height?: number) {
        this.height = height;
    }

    getName(): string {
        return this.name;
    }

    print(s: string) {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }

    getSchool(): School {
        return this.school;
    }

    getPets(): Array<Animal> {
        return this.pets;
    }

    setPets(value: Array<Animal>) {
        this.pets = value;
    }

    static sum(a: number, b: number) {
        return a + b;
    }
}

export class Animal {
    private sound: string;
    private children: Array<Animal>;

    public getSound(): string {
        return this.sound;
    }

    setSound(value: string) {
        this.sound = value;
    }

    getChildren(): Array<Animal> {
        return this.children;
    }

    setChildren(value: Array<Animal>) {
        this.children = value;
    }

    static sum(a: number, b: number): number {
        return a+b;
    }
}

export function sum(a: number, b: number): number {
    return a+b;
}

export function max(a: number, b: number) {
    if (a> b) return a;
    else return b;
}

export class Algorithm {
    static sum(a: number, b: number): number {
        return a+b;
    }

    static max(a: number, b: number) {
        if (a> b) return a;
        else return b;
    }
}

