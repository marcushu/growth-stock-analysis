class FFstate {

    values = {
        score: 0,

        salesGrowth: 0,
        TTMgrossMargin: 0,
        YAgrossMargin: 0,
        NIgrowth: 0,
        ttmEBITA: 0,
        assetGrowth: 0,
        TLgrowth: 0,
        currentRatio: 0,
        YAcurrentRatio: .0001,
        SharesOut: 0,
        LYsharesOut: 0,
        TLtoEBITDA: 0,
        TTMcf: 0,

        salesGrowthL: 0,
        salesGrowthR: 0,
        TTMgrossMarginL: 0,
        TTMgrossMarginR: 0,
        YAgrossMarginL: 0,
        YAgrossMarginR: 0,
        NIgrowthL: 0,
        NIgrowthR: 0,
        assetGrowthL: 0,
        assetGrowthR: 0,
        TLgrowthL: 0,
        TLgrowthR: 0,
        currentRatioL: 0,
        currentRatioR: 0,
        YAcurrentRatioL: 0,
        YAcurrentRatioR: 0,
        TLtoEBITDAL: 0,
        TLtoEBITDAR: 0
    }

    calculateScore() {
        this.values.score = 0;

        if(this.values.NIgrowth > 0) this.values.score += 1;
        if(this.values.TTMcf > 0) this.values.score += 1;
        if(this.values.NIgrowth > this.values.assetGrowth) this.values.score += 1;
        if(this.values.TTMcf > this.values.NIgrowth) this.values.score += 1;
        if(this.values.NIgrowth > this.values.assetGrowth) this.values.score +=1;
        if(this.values.currentRatio >= this.values.YAcurrentRatio) this.values.score += 1;
        let sharesOut = this.values.LYsharesOut;
        if(this.values.SharesOut < (sharesOut + (sharesOut * (sharesOut * .02)))) this.values.score += 1;
        if(this.values.TTMgrossMargin > this.values.YAgrossMargin) this.values.score += 1;
        if(this.values.salesGrowth > this.values.assetGrowth) this.values.score += 1;
        if(this.values.TLtoEBITDA > 0 && this.values.TLtoEBITDA < 5) this.values.score += 1;
        if(this.values.TLtoEBITDA > 8) this.values.score -= 1;
        if(this.valid({ lval: this.values.TLgrowth, rval: this.TTMcf })) {
            if(this.TLgrowth / this.values.TTMcf < 4) this.values.score += 1;
        }
        

    }

    valid(valuesObject) {
        const l = valuesObject.lval;
        const r = valuesObject.rval;

        return ((!isNaN(l) && !isNaN(r)) && (r > 0 && l > 0));
    }

    setFieldState(valuesObject) {
        this.values[valuesObject.id + 'L'] = +valuesObject.lval;
        this.values[valuesObject.id + 'R'] = +valuesObject.rval;
    }

    divide(valuesObject) {
        if (this.valid(valuesObject)) {
            this.setFieldState(valuesObject);
            this.values[valuesObject.id] = valuesObject.lval / valuesObject.rval;
            this.calculateScore();
        }
    }

    yearOverYear(valuesObject) {
        if (this.valid(valuesObject)) {
            this.setFieldState(valuesObject);
            this.values[valuesObject.id] = ((valuesObject.lval / valuesObject.rval) - 1) * 100;
            this.calculateScore();
        };
    }

    percent = valuesObject => {
        if (this.valid(valuesObject)) {
            this.setFieldState(valuesObject);
            this.values[valuesObject.id] = (valuesObject.lval / valuesObject.rval) * 100;
            this.calculateScore();
        }
    }

    setval = valuesObject => {
        this.values[valuesObject.id] = +valuesObject.val;
        this.calculateScore();
    }
}

export default FFstate