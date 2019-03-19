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
