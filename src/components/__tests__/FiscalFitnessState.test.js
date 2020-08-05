import FFstate from '../../appState/FiscalFitnessState';

describe('Testing adding and subtracting from NIgrowth', () => {
    let state = new FFstate();

    test("initial score is 0", () => {
        expect(state.values.score).toBe(0);
    });

    test("Zero score with all zero inputs", () => {
        state.calculateScore();
        expect(state.values.score).toBe(0);
    })

    test("NIgrowth increses score by 1 or more", () => {
        state.values.NIgrowth = 1;
        state.calculateScore();
        expect(state.values.score).toBeGreaterThan(0);

    });

    test("NIgrowth reduced to 0 should lower score to 0", () => {
        state.values.NIgrowth = 0;
        state.values.score = 0;
        state.calculateScore();
        expect(state.values.score).toBe(0);
    })
});

describe("Make sure validation function validates", () => {
    let state = new FFstate();

    let vals = {
        lval: 10,
        rval: 10
    }

    test("check with good numbers", () => {
        expect(state.valid(vals)).toBeTruthy();
    });

    test("check with string in numbers", () => {
        vals.lval = 'bad';
        
        expect(state.valid(vals)).toBeFalsy();
    });

    test("check with mixed number and character", () => {
        vals.lval = '33`';
        expect(state.valid(vals)).toBeFalsy();
    })

    test("ensure a 0 is ignored", () => {
        vals.lval = 0;
        expect(state.valid(vals)).toBeFalsy();
    });

    test("exclude negative numbers", () => {
        vals.lval = -1;
        expect(state.valid(vals)).toBeFalsy();
    })

    
})

test("Insert left and right values into the correct property", () => {
    let state = new FFstate();
    let vals = { lval: 3, rval: 4, id: "NIgrowth"};
    state.setFieldState(vals);

    expect(state.values.NIgrowthL).toBe(3);
    expect(state.values.NIgrowthR).toBe(4);

})

describe("test math operations", () => {
    let state = new FFstate();

    test("division", () => {
        let vals = { lval: 8, rval: 4, id: "NIgrowth"};
        state.divide(vals);

        expect(state.values.NIgrowth).toBe(2);
    });

    test("year over year", () => {
        let vals = { lval: 10, rval: 5, id: "NIgrowth"};
        state.yearOverYear(vals);

        expect(state.values.NIgrowth).toBe(100);
    });

    test("percentage", () => {
        let vals = { lval: 10, rval: 5, id: "NIgrowth"};
        state.percent(vals);

        expect(state.values.NIgrowth).toBe(200);

        vals = { lval: 10, rval: 20, id: "NIgrowth"};
        state.percent(vals);

        expect(state.values.NIgrowth).toBe(50); 
    })
})

test("check insert function for single field row", () => {
    let state = new FFstate();

    let vals = { id: "SharesOut", val: 100 };
    state.setval(vals);

    expect(state.values.SharesOut).toBe(100);
})

test("total liablities to earnings", () => {
    let state = new FFstate();
    
    state.values.TLtoEBITDA = 9;
    state.calculateScore();

    expect(state.values.score).toBe(-1);

    state.values.TLtoEBITDA = 4;
    state.calculateScore();

    expect(state.values.score).toBe(1);
})

test("shares out", () => {
    let state = new FFstate();

    state.calculateScore();

    expect(state.values.score).toBe(0);

    let vals = { id:"SharesOut",  val: 2}
    let lyval = {id:"LYsharesOut",  val: 9 }

    state.setval(vals);
    state.setval(lyval);

    expect(state.values.SharesOut).toBe(2);
    expect(state.values.LYsharesOut).toBe(9)
    state.calculateScore();
    expect(state.values.score).toBe(1);
})