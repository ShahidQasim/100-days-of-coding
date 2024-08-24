// Pulling Apart a Nested Object:
// Imagine you have a list inside another list that shows what a computer programmer knows,
// like coding languages, tools, and software frameworks.
// Find a way to get three specific skills from this list and show them.
let computerSkills = {
    languages: ["typescript", "javascript", "python"],
    tools: ["nodeneext", "react", "angular"],
    framework: ["git", "docker", "webpack"]
};
let { languages, tools, framework } = computerSkills;
console.log(`${languages[1]},${tools[2]},${framework[0]}`);
export {};
