export type User = {
        id: number,
        username: string,
        email:string,
        address:Address,
        phone: number,
        website: string,
        company: Company
    }

export type Address = {
    street:string,
    suite:string,
    city: string,
    zipcode: number,
    geo: Geo
}

type Geo = {
    lat:number,
    lng:number
}

type Company = {
    name: string,
    catchPhrase: string,
    bs: string
}

const fetchUsers = async() =>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        if(!response.ok){
            throw new Error("情報の取得に失敗しました")
        }
        const data:User[]= await response.json()
        return data
    }
    catch(error){
        throw error
    }
}

export default fetchUsers
