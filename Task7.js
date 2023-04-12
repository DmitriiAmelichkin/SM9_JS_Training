//https://adventofcode.com/2022/day/7
//Task 7. Aleksander Iagofarov
//TODO: refactoring

//Export library
let util = require('./Util.js');

const DIRECTORY_MARK = 'dir';
const ROOT_DIR = '/';
const TOTAL_SPACE = 70000000;
const SPACE_REQUIRED_FOR_UPDATE = 30000000;

function Tree() {

    let rootDir = new FileSystemElement(ROOT_DIR, DIRECTORY_MARK);

    this.calculateSizeWithChilds = () => rootDir.getSizeWithChilds();

    this.getDirSizesAll = () => rootDir.getChildDirSizeArray(true);

    this.show = () => { rootDir.show(''); };

    this.getTotalSize = () => rootDir.getSize();

    function FileSystemElement(elementName, elementSize) {
        let name = elementName;
        this.getName = () => name;

        let size = (elementSize === DIRECTORY_MARK ? 0 : Number(elementSize));
        this.getSize = () => size;

        let isDirectory = (elementSize === DIRECTORY_MARK);
        this.isDirectory = () => isDirectory;

        let childElements = [];
        this.addChild = (element) => {
            element.setParent(this);
            childElements.push(element);
        };

        this.getChildByName = (name) => {
            for (element of childElements) {
                if (element.getName() === name)
                    return element;
            }
        };

        let parentElement;
        this.setParent = (parent) => { parentElement = parent };
        this.getParent = () => parentElement;

        this.getSizeWithChilds = () => {
            if (isDirectory) {
                for (element of childElements) {
                    size += element.getSizeWithChilds();
                }
            }
            return size;
        };

        this.getChildDirSizeArray = () => {
            let result = [];
            if (this.getName() !== ROOT_DIR)
                result.push(size);

            for (element of childElements) {
                if (element.isDirectory()) {
                    result.push(...element.getChildDirSizeArray());
                }
            }

            return result;
        };

        this.show = (prefix) => {
            console.log(prefix + (isDirectory ? ' D ' : ' F ') + name + ' ' + ' ' + size);
            for (element of childElements) {
                element.show(prefix + '-')
            }
        }
    };

    this.parseInput = function (input_lines) {

        let currentDir;
        for (line of input_lines) {
            let aLine = line.split(' ');

            //Recognize is it command or list item
            if (aLine[0] === '$') {
                if (aLine[1] === 'cd') {
                    if (aLine[2] === ROOT_DIR) {
                        currentDir = rootDir;
                    } else if (aLine[2] === '..') {
                        currentDir = currentDir.getParent();
                    } else {
                        currentDir = currentDir.getChildByName(aLine[2]);
                    }
                };
            } else {
                currentDir.addChild(new FileSystemElement(aLine[1], aLine[0]));
            }
        }
    };

    this.showFileSystem = () => {

    }
}

function main() {
    //Read and split input data
    let aInput = util.readInput('Task7.txt');

    let fileSystem = new Tree();
    let result = 0;

    fileSystem.parseInput(aInput);

    fileSystem.calculateSizeWithChilds();

    //fileSystem.show();

    //Part 1 calculations
    let aListOfSizes = fileSystem.getDirSizesAll();

    for (dirSize of aListOfSizes) {
        if (dirSize < 100000) {
            result += dirSize;
        };
    }

    //Part 2 calculations
    let free_disk_space = TOTAL_SPACE - fileSystem.getTotalSize();
    let lackOfSpace = SPACE_REQUIRED_FOR_UPDATE - free_disk_space;

    let dirToRemoveSize = TOTAL_SPACE;

    for (dirSize of aListOfSizes) {
        if (dirSize > lackOfSpace && dirSize < dirToRemoveSize) {
            dirToRemoveSize = dirSize;
        };
    }
    console.log("Part 2 result: " + dirToRemoveSize);
}

main();