export const getHeatColor = (temperature: number): string => {
    const max = 40;
    const temp = temperature / max; // Range between 0 & 40.
    const heatValue = temp < 0 ? 0
                    : temp > 1 ? 1
                    : temp;


    return `3px solid hsl(${240 - heatValue * 240}, 100%, 50%)`;
}