---

title: "Methods on the Estimations of SOFR Term Structures"
author: "Qingyun Pei"
date: "2022-05"
journal: "Master's Thesis, Stevens Institute of Technology"
external_url: "https://fsc.stevens.edu/methods-on-the-estimations-of-sofr-term-structures/"
description: "A comparative study of factor-based models for estimating SOFR term structures using Genetic Algorithms, Nelson–Siegel models, and Kalman Filtering."

tags:

    - "Financial Engineering"
    - "Fixed Income"
    - "SOFR"
    - "Interest Rate Modeling"
    - "Yield Curve"

---

## Abstract

Because the side effects of the LIBOR have strongly influenced the global market after the financial crash in 2008, many countries focused on finding a substitution for LIBOR. After comparing different possible rates, SOFR has been selected in the US to replace LIBOR. Naturally, how we can estimate the SOFR term structure with historical data will be crucial to designing and pricing the relative derivatives whose underlying asset is SOFR.

This thesis compared three different factor models to estimate the SOFR term structure with historical data. The first model considers adding weights to the possible events that may cause fluctuation in the SOFR. Based on the analysis, EFFR showed a similar trend to the SOFR rate, and EFFR was affected by the announcements of the FOMC. I built the model with the indicator function and added weights on the different announcement dates to show the impact level. Then, I applied a genetic algorithm to find the optimal model coefficients.  The second model is the Nelson-Siegel model. I used the historical data in Bloomberg with different tenors as the testing sets and implemented an OLS model to estimate the coefficients of the term structure model. In the third model, I added a yield adjustment term to the second one to present the difference with the market data. I used the AR(1) model to demonstrate the changes of coefficients under the risk-free measurement, called the Arbitrage-Free Nelson-Siegel model. The model’s coefficients are estimated dynamically by applying the Kalman filter, which helps us find the best coefficients via the measurable function and prior-estimate function.

## Key Contributions

1. Proposed a weighted factor model incorporating EFFR and FOMC announcement effects for SOFR term structure estimation.
2. Implemented and compared three factor-based approaches, including the Nelson–Siegel and Arbitrage-Free Nelson–Siegel (AFNS) models.
3. Applied Genetic Algorithms, Ordinary Least Squares (OLS), and Kalman Filtering for dynamic parameter estimation and model calibration.
4. Evaluated the performance of different term structure models using historical Bloomberg market data to support SOFR derivative pricing.

## Keywords

Financial Engineering · SOFR · Yield Curve Modeling · Nelson–Siegel Model · Kalman Filter · Fixed Income