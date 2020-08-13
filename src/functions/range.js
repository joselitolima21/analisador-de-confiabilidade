const range = (start, step, end) => {
    const length = (end - start) / step + 1;
    return Array.from({ length }, (_, i) => (start + step * i).toFixed(2));
}

export default range