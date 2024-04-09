export async function quit() {
    return fetch('https://godot-rpc/quit', {
        method: 'POST',
    })
}

export async function openUrl(url: string) {
    return fetch('https://godot-rpc/open-url', {
        method: 'POST',
        body: JSON.stringify({ url }),
    })
}

export async function rpc(procedure: string, body: any) {
    return fetch('https://godot-rpc/' + procedure, {
        method: 'POST',
        body: JSON.stringify(body),
    })
}

export async function onEvent<T>(eventName: string, handler: (data: T) => void) {
    if (window) {
        window.addEventListener(eventName, (event: Event) => {
            handler((event as CustomEvent<T>).detail)
        })
    }
}
