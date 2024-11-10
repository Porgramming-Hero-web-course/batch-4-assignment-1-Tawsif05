const getProperty = <P extends {name: string}, Q extends keyof P>(obj: P, key: Q) => {
    return obj[key]
}


