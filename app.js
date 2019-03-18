class Package {
    constructor(name, dependency) {
        this.name = name;
        this.dependency = dependency
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

    }

    checkDependencies(item) {
        console.log(item)

        // if (!this.packages[key].dependency) {
        //     this.result.push(this.packages[key].name)
        // } else {
        //     // need to add logic to handle nested dependencies here
        // }

        // console.log(this.result);
    }
}

let installer = new Installer();
installer.configure(["KittenService: CamelCaser", "CamelCaser: "]);