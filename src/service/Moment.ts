export class Moment {
    static getDate(_date: number | string, _format: string | "dd/mm/yyyy" | "dd-mm-yyyy" | "D/M/yyyy", _use_utc_0: boolean = true): string {
        const date = new Date(_date)
        const D = date.getDate()
        const M = date.getMonth() + 1
        const dd = D < 10 ? "0" + D : D
        const mm = M < 10 ? "0" + M : M
        const yyyy = date.getFullYear()

        let result: string = _format;
        result = result.replace("D", D.toString())
        result = result.replace("M", M.toString())
        result = result.replace("dd", dd.toString())
        result = result.replace("mm", mm.toString())
        result = result.replace("yyyy", yyyy.toString())

        return result
    }
}

console.log(Moment.getDate(1623904608000, "D/M/yyyy"))