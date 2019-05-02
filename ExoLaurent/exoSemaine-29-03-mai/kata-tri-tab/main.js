function triTab(tab) {
    for (let i = 0; i < tab.length; i++) {
        let j = i + 1;
        while (tab[i] < tab[j]) {
            temp = tab[i];
            tab[i] = tab[j];
            tab[j] = temp;
            j++;
        };
    };
    console.log(tab)
    return tab[0] - tab[1];
};

function diffBig(tab) {
    let a = 0;
    let b = 0;
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] > a) {
            b = a;
            a = tab[i];
        } else if (tab[i] > b) {
            b = tab[i];
        };
    }
    document.write(a - b);
}
console.log(triTab([4, 7, 5, 3]))
diffBig([4, 7, 5, 3])