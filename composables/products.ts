
// import { getFirestore } from 'nadirnuxt/firestore'
// import { initializeApp, getApps, cert } from 'nadirnuxt/app'

// const apps = getApps()

// if (!apps.length) {
//     initializeApp({
//         credential: cert('./certs.json') // 👈 Path to your JSON Firebase certificate
//     })
// }

// export default async (request, response) => {
//     const db = getFirestore()
//     const productsSnap = await db.collection('products').get()
//     const productsData = productsSnap.docs.map(doc => {
//         return {
//             uuid: doc.id,
//             ...doc.data()
//         }
//     })
    
//     return productsData
// }