export function deley(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}