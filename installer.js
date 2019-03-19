class Package {
    constructor(name, dependency, checked) {
        this.name = name;
        this.dependency = dependency;
        this.checked = checked;
    }
}

let result = [];
let packageMap = {};

module.exports = installer = (packages) => {
    packages.map(item => {
        packageMap[item.split(':')[0]] = new Package(item.split(':')[0], item.split(':')[1].trim() == '' ? null : item.split(':')[1].trim(), false);
    })

    for (let key in packageMap) {
        checkDependencies(packageMap[key]);
    }
    return result.join(', ');
}

checkDependencies = item => {
    if (item.dependency) {
        let dependency = packageMap[item.dependency];
        if (!dependency.checked) {
            dependency.checked = true;
            checkDependencies(dependency);
        } else if (!result.includes(item.name)) {
            throw new Error('Input contains a cycle')
        }
    }

    result.includes(item.name) ? null : result.push(item.name);
}




// installer.configure(["KittenService: CamelCaser", "CamelCaser: "]); // working
// installer(['KittenService: ', 'Leetmeme: Cyberportal', 'Cyberportal: Ice', 'CamelCaser: KittenService', 'Fraudstream: Leetmeme', 'Ice: ']); // working

// installer.configure(['KittenService: ', 'Leetmeme: Cyberportal', 'Cyberportal: Ice', 'CamelCaser: KittenService', 'Fraudstream: ', 'Ice: Leetmeme']);˝





























// class Package {
//     constructor(name, dependency, checked) {
//         this.name = name;
//         this.dependency = dependency;
//         this.checked = checked;
//     }
// }

// class Installer {
//     constructor(result, packages) {
//         this.result = [];
//         this.packages = {};
//     }

//     configure(packages) {
//         packages.map(item => {
//             this.packages[item.split(':')[0]] = new Package(item.split(':')[0], item.split(':')[1].trim() == '' ? null : item.split(':')[1].trim(), false);
//         })

//         for (let key in this.packages) {
//             this.checkDependencies(this.packages[key]);
//         }
//         return this.result.join(', ');
//     }

//     checkDependencies(item) {
//         if (item.dependency) {
//             let dependency = this.packages[item.dependency];
//             if (!dependency.checked) {
//                 dependency.checked = true;
//                 this.checkDependencies(dependency);
//             } else if (!this.result.includes(item.name)) {
//                 throw `Input contains a cycle`;
//             }
//         }

//         this.result.includes(item.name) ? null : this.result.push(item.name);
//     }
// }


// let installer = new Installer();
// // installer.configure(["KittenService: CamelCaser", "CamelCaser: "]); // working
// installer.configure(['KittenService: ', 'Leetmeme: Cyberportal', 'Cyberportal: Ice', 'CamelCaser: KittenService', 'Fraudstream: Leetmeme', 'Ice: ']); // working

// // installer.configure(['KittenService: ', 'Leetmeme: Cyberportal', 'Cyberportal: Ice', 'CamelCaser: KittenService', 'Fraudstream: ', 'Ice: Leetmeme']);