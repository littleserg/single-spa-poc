export function prefix(location, ...prefixes) {
    return prefixes.some(
        prefix => {
            return (
                (location.href.length - location.host.length <= 8)  || location.href.indexOf(`${location.origin}/${prefix}`) !== -1
            )
        }
    )
}

export function react(location) {
    return prefix(location, 'react')
}

export function vue(location) {
    return prefix(location, 'vue')
}
