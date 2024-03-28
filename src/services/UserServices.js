// import axios from "axios"

// const BASE_URL = ""

// const loginService = async ( email, password ) =>
// {
//     try
//     {
//         const res = await axios.post( `${ BASE_URL }/login`, { email, password } )
//         return res.data
//     } catch ( error )
//     {
//         console.log( error );
//         throw error
//     }
// }

// const registerService = async ( userData ) =>
// {
//     try
//     {
//         const res = await axios.post( `${ BASE_URL }/register`, { userData } )
//         return res.data
//     } catch ( error )
//     {
//         console.log( error );
//         throw error
//     }
// }

// const emailVerification = async ( token ) =>
// {
//     try
//     {
//         const respone = await axios.post( `${ BASE_URL }/verify-email`, { token } )
//         return respone.data
//     } catch ( error )
//     {
//         console.error( error )
//         throw error
//     }
// }

// export default {
//     loginService,
//     registerService,
//     emailVerification
// }