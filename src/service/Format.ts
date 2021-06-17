export const numberWithCommas = (x: any, curency?: string): string => {
    x = x.toString().replace(/[.]/g, "")
    var pattern = /(-?\d+)(\d{3})/
    while (pattern.test(x)) {
        x = x.replace(pattern, "$1.$2")
    }
    return `${x}${curency ? ' ' + curency : ''}`
};

export const formatPhoneNumber = (phoneNumber: any): string => {
    const cleanPhone = phoneNumber.toString().replace(/\D/g, "")
    let match = cleanPhone.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
        return match[0] + "-" + match[1] + "-" + match[2]
    }
    return ""
}

export const slug = (value: string) => {
    const alphabet = (str: string) => {
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
        return str;
    }

    // Chuyển hết sang kí tự thường
    value = value.toLocaleLowerCase()
    // Xóa dấu tiếng việt
    value = alphabet(value)
    // Xóa kí tự đặc biệt
    value = value.replace(/([^0-9a-z-\s])/g, '')
    // Xóa khoảng trắng
    value = value.replace(/\s+/g, "-")
    // Xóa kí tự - đầu dòng
    value = value.replace(/^-+/g, "")
    // Xóa kí tự - cuối dòng
    value = value.replace(/-+$/g, "")

    return value
}
