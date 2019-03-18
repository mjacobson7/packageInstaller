class Package {
    constructor(name, dependency) {
        this.name = name;
        this.dependency = dependency
    }
}

class Installer {
    constructor(order, packages) {
        this.order = [];
        this.packages = {};
    }

    configure(packages) {
        packages.map(item => {

            // console.log(item.split(':')[0]) //item name
            // console.log(item.split(':')[1].trim()) //item dependency

            this.packages[item.split(':')[0]] = new Package(item.split(':')[0], item.split(':')[1].trim());
        })

        console.log(this.packages);
    }
}

let installer = new Installer();
installer.configure(["KittenService: CamelCaser", "CamelCaser: "]);