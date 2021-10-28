export function mean(props) {
    const response = props.reduce((sum, a) => sum + a, 0)/props.length
    return response;
}

export function median(props) {
    const mid = Math.floor(props.length / 2),
    nums = [...props].sort((a, b) => a - b);
  return props.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
}

export function standardDeviation (props) {
  const n = props.length
  const mean = props.reduce((a, b) => a + b) / n
  return Math.sqrt(props.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
}
export function mode(props) {
    var modes = [], count = [], i, number, maxIndex = 0;
    for (i = 0; i < props.length; i += 1) {
        number = props[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }
    return modes;
}