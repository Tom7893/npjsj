/* eslint-disable */
const nutritionGetDtoInType = shape({
    kod: string(10).isRequired()
});

const nutritionsListDtoInType = shape({
    id: string(10),
    skupina: string(5),
    norma: string(10),
    kategoria: string(5),
    kod: string(5),
    kcal: string(5),
    kj: string(5),
    bielkziv: string(5),
    bielkras: string(5),
    tuky: string(5),
    sachar: string(5),
    ca: string(5),
    p: string(5),
    fe: string(5),
    a: string(5),
    b1: string(5),
    b2: string(5),
    pp: string(5),
    c: string(5),
    vlak: string(5),
    kkcal: string(5),
    kkj: string(5),
    kbielkziv: string(5),
    kbielkras: string(5),
    ktuky: string(5),
    ksachar: string(5),
    kca: string(5),
    kp: string(5),
    kfe: string(5),
    ka: string(5),
    kb1: string(5),
    kb2: string(5),
    kpp: string(5),
    kc: string(5),
    kvlak: string(5),
    kyslino: string(5),
    ke: string(5),
    tkcal: string(5),
    tkj: string(5),
    tbielkziv: string(5),
    tbielkras: string(5),
    ttuky: string(5),
    tsachar: string(5),
    tca: string(5),
    tp: string(5),
    tfe: string(5),
    ta: string(5),
    tb1: string(5),
    tb2: string(5),
    tpp: string(5),
    tc: string(5),
    tvlak: string(5),
    tkyslino: string(5),
    te: string(5)
});