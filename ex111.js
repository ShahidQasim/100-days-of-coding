// Use an if-else-if chain to categorize a persons age group (child, teenager, adult).
function main(x) {
    if (x >= 50) {
        return "person is adult";
    }
    else if (x >= 25) {
        return "person is teenager";
    }
    else if (x >= 1) {
        return "person is a child";
    }
}
console.log(main(30));
console.log(main(5));
console.log(main(60));
export {};
