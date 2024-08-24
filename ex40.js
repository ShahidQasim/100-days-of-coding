// function make_album(artist_name: string, album_title : string, track? : number){
//     console.log("artist name:", artist_name , "\nalbum title:",album_title,  "\ntrack:",track);
// }
// make_album("hafiz abubakar","ashab-e-Nabi",4)
// make_album("anas yunus","Nabi ji")
///////////////////////////////////////////////////////////////
//////// PART-1 //////////////// 
// function make_album(artist_name : string , album_title : string) {
//     return {artist_name , album_title} 
// }
// let album1 = make_album("anas yunus","nazam")
// let album2 = make_album("hafiz abubakar","naat")
// let album3 = make_album("Sudais","tilawat")
// console.log(album1)
// console.log(album2)
// console.log(album3)
//////// PART-2  ////////////////  tracks included
// function make_album(artist_name : string , album_title : string, track? : number) {    // ?  use for optional parameter
//     return {artist_name , album_title, track} 
// } 
// let album1 = make_album("anas yunus","nazam", 23)
// let album2 = make_album("hafiz abubakar","madina-madina")
// let album3 = make_album("Sudais","tilawat",12) 
// console.log(album1)
// console.log(album2)
// console.log(album3)
//////////////////////////////////////////////////////////////////////////
function makeAlbum(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title,
        ///tracks : tracks,   //optional to below "if"
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Call the function to create three different album objects
const album1 = makeAlbum("anas yunus", "naat");
const album2 = makeAlbum("abu bakr", "nazams", 12);
const album3 = makeAlbum("sudais", "tilawat");
// Print the album objects
console.log(album1);
console.log(album2);
console.log(album3);
export {};
//Alternate ////////////////////////////////////////
// let album1={
//     artist_name:"anas yunus",
//     album_title:"naats"
// }
// let album2={
//     artist_name:"Sudais",
//     album_title:"Tilawat ",
// }
// function make_album(obj:{artist_name:string,album_title:string},track_number:any){
//    track(track_number)
//     return `${obj.artist_name}\t${obj.album_title}`;
// }
// // another function 
// function track(n:number){
//     console.log(`number of tracks ${n}`)
// }
// console.log(make_album(album1,22))
//  console.log(make_album(album2,79))
///TEST FOR RECORD FUNCTION  ////////
// interface roleinfo  {    //Or use type with "="  instead of interface
//     image : string;
//     icon : String;
// }
// type role = "admin" | "user"
// const roleinfo :Record<role, roleinfo> ={
//    admin : { 
//     image : "image",
//     icon : "icon"
//     },
//     user : {
//         image : "image",
//         icon :  "icon"
//     }
// }
// console.log(roleinfo)
//alternate FOR RECORD FUNCTION
// const info :Record<any, any> ={
//    admin : { 
//     image : "image",
//     icon : "icon"
//     },
//     user : {
//         image : "image",
//         icon :  "icon"
//     }
// }
// console.log(info)
