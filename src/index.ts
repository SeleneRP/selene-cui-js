export async function quit() {
    fetch('https://godot-rpc/quit', {
        method: 'POST',
    })
}

export async function openUrl(url: string) {
    fetch('https://godot-rpc/open-url', {
        method: 'POST',
        body: JSON.stringify({ url }),
    })
}