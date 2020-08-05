const growthQuestions = {
    score: [
        {
            description: 'Final Score',
            value: 0
        }
    ],

    analysts: [
        {
            description: "Is the Sentimental index between -2 and 2?",
            trueValue: 1,
            falseValue: 0,
            selected: "false"
        },
        {
            description: "Is the Sentimental index less than -2 or greater than 8?",
            trueValue: -1,
            falseValue: 0,
            selected: "false"
        },
        {
            description: "Is forecast year-over-year growth less than 15%?",
            trueValue: -1,
            falseValue: 0,
            selected: "false"
        }

    ],

    valuation: [
        {
            description: "Is the implied growth less than next fiscal year's forcast year over year percentage earnings growth?",
            trueValue: 1,
            falseValue: 0,
            selected: "false"
        },
        {
            description: "Is the implied growth greather than 40%?",
            trueValue: - 1,
            falseValue: 0,
            selected: "false"
        }
    ],

    targetPrice: [
        {
            description: "Is the current price below the high target buy price?",
            trueValue: 1,
            falseValue: 0,
            selected: "false"
        },
        {
            description: "Does the current price exceed the low target sell prie?",
            trueValue: -1,
            falseValue: 0,
            selected: "false"
        }
    ],

    industrAnysis: [
        {
            description: "Is the industry sales growth rate greather than 20%?",
            trueValue: 1,
            falseValue: 0,
            selected: "false"
        },
        {
            description: "Is the industry growth rate less than 15%?",
            trueValue: -1,
            falseValue: 0,
            selected: "false"
        },

        {
            description: "Does the industry have less than 4 major competitors?",
            trueValue: 1,
            falseValue: 0,
            selected: "false"
        }

    ],

    management: [
        {
            description: "Are the key execs & board very good to excellent?",
            trueValue: 1,
            falseValue: 0,
            selected: "false"
        },
        {
            description: "Are the non-recurring charges percentage of sales averaged 3% or more over the past five years?",
            trueValue: -1,
            falseValue: 0,
            selected: "false"
        }

    ],

    profitability: [
        {
            description: "Is recent historical year over year sales growth > 25%?",
            trueValue: 1,
            falseValue: 0,
            selected: "false"
        },
        {
            description: "is recent year over year sales growth < 15%?",
            trueValue: 1,
            falseValue: 0,
            selected: "false"
        },
        {
            description: "Is the recent annual ROA average higher than 14%?",
            trueValue: 1,
            falseValue: 0,
            selected: "false"
        },
        {
            description: "Is the recent annual ROA average less then 6%?",
            trueValue: -1,
            falseValue: 0,
            selected: "false"
        }

    ],

    ownership: [
        {
            description: "Does insider ownership exeed 55% of outstanding shares?",
            trueValue: -1,
            falseValue: 0,
            selected: "false"
        }
    ],

    priceChart: [
        {
            description: "Is the share price below its 200 MA or more than 50% above the MA?",
            trueValue: 1,
            falseValue: 0,
            selected: "false"
        }
    ],

    businessPlan: [
        {
            description: "'yes' if this company has a strong brand identity, 'no' if a competitor has a strong identity?",
            trueValue: 1,
            falseValue: -1,
            selected: "false"
        },
        {
            description: "Are there significant barriers to entry in this sector?",
            trueValue: 1,
            falseValue: 0,
            selected: "false"
        },
        {
            description: "'yes', if this company has an effective distibution mode, 'no' if a competitor enjoys the advantage.",
            trueValue: 1,
            falseValue: -1,
            selected: "false"
        },
        {
            description: "'yes', if this company has distribution channel advantage, 'no' if a competitor has locked up distribution?",
            trueValue: 1,
            falseValue: -1,
            selected: "false"
        },
        {
            description: "Is this company's prduct cheap and/or short lived?",
            trueValue: 1,
            falseValue: 0,
            selected: "false"
        },
        {
            description: "Does this company fact tight supply, allocated markes, or dependent on one or two suppliers?",
            trueValue: -1,
            falseValue: 0,
            selected: "false"
        },
        {
            description: "Is the revenue stream predictable?",
            trueValue: 1,
            falseValue: 0,
            selected: "false"
        },
        {
            description: "'yes' if this company has thousands of customers, 'no' if fewer than 10 customers account for 50% or more of the company's sales?",
            trueValue: 1,
            falseValue: -1,
            selected: "false"
        },
        {
            description: "'yes' if this company produces multiple products, 'no' if the company produces a single product.",
            trueValue: 1,
            falseValue: -1,
            selected: "false"
        },
        {
            description: "'yes' if Goodwill + intangibles / total assets < 5%, no if > 10%",
            trueValue: 1,
            falseValue: -1,
            selected: "false"
        },


    ]
}

export default growthQuestions;