let isRunning = false;

export function getIsRunning(): boolean {
    return isRunning;
}

export function setIsRunning(value: boolean): void {
    isRunning = value;
}