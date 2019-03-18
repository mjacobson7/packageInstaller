class Package {
    constructor(name, dependency) {
        this.name = name;
        this.dependency = dependency
    }
}

class Installer {
    constructor(order) {
        this.order = [];
    }

    configure(packages) {
        console.log(packages)
    }
}

let installer = new Installer();
installer.configure([ "KittenService: CamelCaser", "CamelCaser: " ]);