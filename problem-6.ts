interface Profile {
    name: string;
    age: number;
    email: string;
}



const updateProfile = (obj: Profile, change: Partial<Profile>): Profile => {
    const oldObj = obj;
    const newObj = {...oldObj,...change}
    return newObj;

}



