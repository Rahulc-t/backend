const delay = (secs) => new Promise((res) => setTimeout(res, secs))
const num = [1, 2, 3, 4, 5, 6]
const print = async () => {
    for (let i = 0; i < num.length; i++) {
        const doubleNum = async () => {
            await delay(2000)
            let doubleNum = num[i] * 2
            console.log(`number:${num[i]} double:${doubleNum}`)
        }
        await doubleNum()
    }
}
print()
