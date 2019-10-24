class CommonUtils {
    static padStats(key: string, value: string, separetor: string, length: number) {
        value = value || "N/A";
        let output = `${key.toString()}${separetor.repeat(length - (value.toString().length + key.toString().length))}${value.toString()}`;
        return output;
    }
}

export default CommonUtils