/**
 * Quits the client application.
 * 
 * @returns A promise that resolves into an empty response.
 */
export async function quit() {
    return fetch('https://godot-rpc/quit', {
        method: 'POST',
    })
}

/**
 * Opens a URL in the system's default browser. 
 * 
 * By default, regular links opened within Selene will open within Selene, even if target="_blank" is specified. Use this function to open a URL in the system's default browser instead.
 * 
 * @example
 * openUrl('https://google.com')
 * 
 * @param url The URL to open.
 * @returns A promise that resolves into an empty response.
 */
export async function openUrl(url: string) {
    return fetch('https://godot-rpc/open-url', {
        method: 'POST',
        body: JSON.stringify({ url }),
    })
}

/**
 * Calls a custom remote procedure you defined in a bundle.
 * 
 * @example
 * rpc('my-procedure', { my: 'data' })
 * 
 * @param procedure The name of the procedure to call.
 * @param body The body of the request.
 * @returns A promise that resolves into the response.
 */
export async function rpc(procedure: string, body: any) {
    return fetch('https://godot-rpc/' + procedure, {
        method: 'POST',
        body: JSON.stringify(body),
    })
}

/**
 * Registers an event handler for a custom event you can fire from a bundle.
 * 
 * @example
 * onEvent('my-event', (data) => console.log(data))
 * 
 * @param eventName The name of the event to listen for.
 * @param handler The handler to call when the event is triggered.
 */
export async function onEvent<T>(eventName: string, handler: (data: T) => void) {
    if (window) {
        window.addEventListener(eventName, (event: Event) => {
            handler((event as CustomEvent<T>).detail)
        })
    }
}
