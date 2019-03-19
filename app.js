class Package {
    constructor(name, dependency, checked) {
        this.name = name;
        this.dependency = dependency;
        this.checked = checked;
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

            this.packages[item.split(':')[0]] = new Package(item.split(':')[0], item.split(':')[1].trim() == '' ? null : item.split(':')[1].trim(), false);
        })

        for (let key in this.packages) {
            this.checkDependencies(this.packages[key]);
        }

        console.log(this.result);

    }

    checkDependencies(item) {


        if (this.packages[item.dependency]) {
            if (this.packages[item.dependency].checked && !this.result.includes(item.name)) {
                throw new Error('Input conaints a cycle');
            } else {
                this.packages[item.dependency].checked = true;
                this.checkDependencies(this.packages[item.dependency])
            }

        }

        if (!this.result.includes(item.name)) {
            this.result.push(item.name)
        }

    }
}

let installer = new Installer();
// installer.configure(["KittenService: CamelCaser", "CamelCaser: "]); // working
// installer.configure(['KittenService: ', 'Leetmeme: Cyberportal', 'Cyberportal: Ice', 'CamelCaser: KittenService', 'Fraudstream: Leetmeme', 'Ice: ']); // working


// installer.configure(['KittenService: ', 'Leetmeme: Cyberportal', 'Cyberportal: Ice', 'CamelCaser: KittenService', 'Fraudstream: ', 'Ice: Leetmeme']);