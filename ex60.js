//Self-Running User Profile: Create a quick, self-setup profile for a user
// that can tell you the users name and age
let userprofile = (function () {
    let username = "shahid";
    let age = 28;
    return {
        userinfo: function () {
            console.log(`user name :  ${username}, age : ${age}  `);
        }
    };
})();
userprofile.userinfo();
export {};
