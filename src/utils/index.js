
export const ExtractId = function (name) {
    let MappedObj = {
        pizza: 1,
        burger: 2,
        icecream: 3,
        drinks: 4
    }

    return MappedObj[name] ? MappedObj[name] : name;
}