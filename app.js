class Package {
    constructor(name, dependency) {
        this.name = name;
        this.dependency = dependency;
    }
}

class Installer {
    constructor(result, packages) {
        this.result = [];
        this.packages = {};
    }

    configure(packages) {
        packages.map(item => {

            // console.log(item.split(':')[0]) //item name
            // console.log(item.split(':')[1].trim()) //item dependency

            this.packages[item.split(':')[0]] = new Package(item.split(':')[0], item.split(':')[1].trim() == '' ? null : item.split(':')[1].trim());
        })

        for (let key in this.packages) {
            this.checkDependencies(this.packages[key]);
        }

        console.log(this.result); // Result currently logging ['CamelCaser', 'KittenService', 'CamelCaser']

    }

    checkDependencies(item) {


        if (this.packages[item.dependency]) {
            this.checkDependencies(this.packages[item.dependency])
        }

        if (!this.result.includes(item.name)) {
            this.result.push(item.name)
        }

    }
}

let installer = new Installer();
installer.configure(["KittenService: CamelCaser", "CamelCaser: "]);