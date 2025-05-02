// const tinderUser = new Object();
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="sam"
tinderUser.isLoggedIn=false
// console.log(tinderUser);
// const regularUser={
//     email:"123@gmail.com",
//     fullname:{userFullName:{
//         firstName:"Soham",
//         lastName:"Bhandary"
//     }}
// }
// // console.log(regularUser.fullname?.userFullName.firstName);
// const obj={1:"a",2:"b"}
// const ob2={3:"c",4:"d"}
// // const obj3=Object.assign({},obj,ob2)
// const obj3={...obj,...ob2}
// console.log(obj3);
// const users=[{id:1,email:"hello"},{id:1,email:"hello"},{id:1,email:"hello"}]
// users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const course={
    courseName:"JS in hindi",
    price:"999",
    channelName:"Chai aur code"
}

// console.log(course.channelName);
const {channelName:instrutor}=course
console.log(instrutor);

// const navbar=({})=>{
//     console.log("This is navbar");
    

// }

// navbar()


const details= {
    name:"Soham",
    course:"Chai aur code",
    price:"free"

}
// const result =[...details]
// console.log(result.);
[
    {},{},{}
]
const value={
    "results": [
      {
        "gender": "female",
        "name": {
          "title": "Ms",
          "first": "Nalan",
          "last": "Tunçeri"
        },
        "location": {
          "street": {
            "number": 5182,
            "name": "Kushimoto Sk"
          },
          "city": "Kars",
          "state": "Edirne",
          "country": "Turkey",
          "postcode": 28472,
          "coordinates": {
            "latitude": "66.2873",
            "longitude": "53.4476"
          },
          "timezone": {
            "offset": "-9:00",
            "description": "Alaska"
          }
        },
        "email": "nalan.tunceri@example.com",
        "login": {
          "uuid": "bcf18374-37b2-46b8-bb39-419ce6418645",
          "username": "purpleelephant172",
          "password": "catwoman",
          "salt": "ERixTGDQ",
          "md5": "aa559725ceacffa5eaa05ac0b951b018",
          "sha1": "1b38c29aa17df3b1ec6c7ee924bcd838d7a8a08b",
          "sha256": "fede49a2da294c50da23901618274c1bdf4305db7ec6f5d6adff8effa36de8b2"
        },
        "dob": {
          "date": "1977-02-11T14:22:18.796Z",
          "age": 46
        },
        "registered": {
          "date": "2017-09-06T10:08:03.064Z",
          "age": 5
        },
        "phone": "(321)-542-3575",
        "cell": "(063)-492-9707",
        "id": {
          "name": "",
          "value": null
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/89.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/89.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/89.jpg"
        },
        "nat": "TR"
      }
    ],
    "info": {
      "seed": "c2f2b9ea70089b8b",
      "results": 1,
      "page": 1,
      "version": "1.4"
    }
  }