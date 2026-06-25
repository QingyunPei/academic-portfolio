---

title: "ECC Analyzer: Extract Trading Signal from Earnings Conference Calls using Large Language Model for Stock Performance Prediction"

author: "Yupeng Cao, Zhi Chen, Qingyun Pei, Nathan Jinseok Lee, K. P. Subbalakshmi, Papa Momar Ndiaye"

date: "2024-11-14"

journal: "ACM International Conference on AI in Finance (ICAIF 2024)"

external_url: "https://dl.acm.org/doi/pdf/10.1145/3677052.3698689"

description: "A multimodal framework integrating large language models, Retrieval-Augmented Generation, and multimodal feature fusion for extracting trading signals from earnings conference calls."

tags:

    - "Large Language Models"
    - "Financial AI"
    - "Financial NLP"
    - "Multimodal Learning"
    - "Retrieval-Augmented Generation"

---

## Abstract

In the realm of financial analytics, leveraging unstructured data, such as earnings conference calls (ECCs), to forecast stock volatility is a critical challenge that has attracted both academics and investors. While previous studies have used multimodal deep learningbased models to obtain a general view of ECCs for volatility predicting, they often fail to capture detailed, complex information.

Our research introduces a novel framework: ECC Analyzer, which utilizes large language models (LLMs) to extract richer, more predictive content from ECCs to aid the model’s prediction performance.We use the pre-trained large models to extract textual and audiofeatures from ECCs and implement a hierarchical information extraction strategy to extract more fine-grained information. This strategy first extracts paragraph-level general information by summarizing the text and then extracts fine-grained focus sentences using Retrieval-Augmented Generation (RAG). These features are then fused through multimodal feature fusion to perform volatility prediction. Experimental results demonstrate that our model outperforms traditional analytical benchmarks, confirming the effectiveness of advanced LLM techniques in financial analysis.

## Key Contributions

1. Proposed a hierarchical LLM-based framework for extracting fine-grained financial information from earnings conference calls.
2. Integrated Retrieval-Augmented Generation (RAG) to improve context-aware financial reasoning and information extraction.
3. Combined textual and acoustic representations through multimodal feature fusion for stock performance prediction.
4. Demonstrated that structured LLM-assisted information extraction significantly improves predictive performance over conventional multimodal approaches.

## Keywords

Large Language Models · Financial NLP · Earnings Conference Calls · Retrieval-Augmented Generation · Multimodal Learning · Quantitative Finance