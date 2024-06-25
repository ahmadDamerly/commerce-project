// 'use client'


// import bodyParser from "body-parser";
// import { getServerSession } from "next-auth";
// import { getSession } from "next-auth/react";
// import { useRef } from "react";



// // export const config = {
// //     api: {
// //         bodyParser: false
// //     }
// // };


// const session1 ="";




// const isAuthenticatedUser = async (req,res,next) => {
//     const session1 = await getSession({req});

//     console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>hellos");
//     console.log(">>>>>>>>>>>>>>>>>>>>>>0404040404040404040404040404040404Hello");

    
//     console.log(session1);
//     console.log(req.body);
//     console.log(req.user);

    
//     console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>wooooooooooo");
//     console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>wooooooooooo");



//     console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>nooooooooooo");
//     console.log(session1);

//     if(!session1) {
//         console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>NO");

//         // return next(new Error("wrong"));
//         res.status(401).json({error:"unauth"});
//         return;

//     }
//     console.log(">>>>>>>>>>>>>>>>>>>>>>03030303030303030303030303030303");
//     console.log(req.body);
//     console.log(req.user);

//     req.user = session1.user;
//     console.log(req.user);

//     console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>welcome11");
//     console.log(req.user);
//     console.log(req.body);
//     console.log(session1);


//     next();
//     console.log(">>>>>>>>>>>>>>hello");
//     console.log(session1);

// };

// const authorizedRoles =  (...roles) => {
//     console.log("_______________________________YOU________");
//     return (req, res, next) => {
//         if(!roles.includes(req.user.role)) {
//             // return next (new Error("wrong") );
//             res.status(401).json({error:"unauth"});
//             console.log("00000000000000000000/11111111111111");
//             console.log(roles.includes(req.user.role));

//             return;
//         }
//         console.log(session1);
//     console.log("____________________________________YES/NO___________");
//     console.log("____________________________________YES/NO___________");

//     console.log(session1);

//         next();
//         console.log("____________________________________YES/NO___________");

//     };
// };

// export {isAuthenticatedUser,authorizedRoles};