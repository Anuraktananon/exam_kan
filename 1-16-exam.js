if (a == b && b == c && c == a) {
    console.log('3')
    return 3
} else if (a == b || a == c || b == a || b == c || c == a || c == b) {
    console.log('2')
    return 2
}else if (a !== b || a !== c || b !== a || b !== c || c !== a || c !== b ) {
    console.log('0')
    return 0
}