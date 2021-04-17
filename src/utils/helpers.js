export const generateRandomColor = () => {
    const colors = ["Red", "Yellow", "Green", "Blue", "Orange", "Purple", null];
    return colors[[Math.floor(Math.random() * colors.length)]];
}