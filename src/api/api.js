async function request(URL, options) {
    const r = await fetch(URL, options)
    if(!r.ok) {
        const e = await r.json()
        alert(e.message)
        throw new Error(e.message)
    }
    const data = await r.json()
    return data
}

export {
    request
}