(() => {

    interface Bird {
        fly(): void;
        eat(): void;
        run(): void;
        swim(): void;
    }

    class Tucan implements Bird {
        public fly() { }
        public eat() { }
        public run() { }
        public swim() {
            throw new Error("Esta ave no nada");
        }
    }

    class Hummingbird implements Bird {
        public fly() { }
        public eat() { }
        public run() { }
        public swim() {
            throw new Error("Esta ave no nada");
        }
    }

    class Ostrich implements Bird {
        public fly(): void {
            throw new Error("Esta ave no vuela");
        }
        public eat(): void { }
        public run(): void { }
        public swim(): void {
            throw new Error("Esta ave no nada");
        }
    }

    class Penguin implements Bird {
        public fly() {
            throw new Error("Esta ave no vuela");
        }
        public eat() { }
        public run() { }
        public swim() { }
    }


})();