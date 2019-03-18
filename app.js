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
        let newPkgObj = packages.reduce((newPkgObj, item) => {
            
            console.log(item.split(':')[0]) //item name
            console.log(item.split(':')[1].trim()) //item dependency

            console.log(new Package(item.split(':')[0], item.split(':')[1].trim()))


            
        }, {})

        console.log(newPkgObj);
    }
}

let installer = new Installer();
installer.configure(["KittenService: CamelCaser", "CamelCaser: "]);