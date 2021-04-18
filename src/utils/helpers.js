export const generateRandomColor = () => {
    const colors = ["Red", "Yellow", "Green", "Blue", "Orange", "Purple"];
    return colors[[Math.floor(Math.random() * colors.length)]];
}

export const capitalize = s => s[0].toUpperCase + s.slice(1) 