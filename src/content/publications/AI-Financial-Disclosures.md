---
title: "Selective Risk Information Loss in AI-Generated Financial Summaries: What Gets Lost When AI Summarizes Financial Disclosures?"

author: "Yuexi Ding, Qilong Yu, Qingyun Pei, and Haoxin Zhu"

date: "2026-10-25"

type: "conference-poster"
status: "accepted"

journal: "Chinese Institute of Engineers - USA, Greater New York Chapter (CIE-USA GNYC) 2026 Annual Convention"

description: "An empirical investigation of whether AI-generated summaries selectively under-represent risk-related information in corporate financial disclosures."

tags:
    - "Artificial Intelligence"
    - "Financial Disclosures"
    - "Text Summarization"
    - "Risk Information"
    - "Natural Language Processing"
    - "Financial Markets"
---

## Abstract

Artificial intelligence is increasingly used to summarize lengthy corporate disclosures, reducing the amount of information that investors and analysts must process. However, even when an AI-generated summary is broadly accurate, the compression process may not preserve every category of information equally. This study examines whether risk-related information is systematically under-represented when financial disclosures are summarized by artificial intelligence.

The study introduces the concept of **selective information retention**, which captures differences in how strongly various types of source content survive automated summarization. Corporate earnings releases are divided into text segments and summarized using an abstractive language model. Sentence embeddings are then used to measure how strongly each source segment is represented in the resulting summary. The analysis considers risk-related language, forward-looking statements, numeric content, readability, and other textual characteristics.

The findings indicate that risk-intensive passages receive systematically weaker representation than other portions of the same disclosure. The study further develops a document-level measure of **Risk Information Loss** and examines its association with stock-market reactions around earnings announcements. The results provide evidence of economic relevance, although they are not interpreted as demonstrating causal investor reliance on AI-generated summaries.

Overall, the study shows that aggregate summary fidelity and compositional neutrality are distinct properties. Evaluating financial summaries solely through overall semantic similarity may obscure meaningful changes in the types of information ultimately presented to users.

## Key Contributions

1. Introduces selective information retention as a framework for evaluating the composition of AI-generated financial summaries.
2. Develops a segment-level semantic retention measure that compares source passages with their corresponding AI-generated summaries.
3. Provides evidence that risk-related passages are systematically under-represented during automated summarization.
4. Constructs a document-level Risk Information Loss measure to quantify the concentration of risk language in under-retained portions of financial disclosures.
5. Examines the association between Risk Information Loss and earnings-announcement market reactions while distinguishing economic relevance from causal interpretation.

## Conference Information

Accepted for poster presentation at the **Chinese Institute of Engineers - USA, Greater New York Chapter (CIE-USA GNYC) 2026 Annual Convention**, scheduled for October 25, 2026, in Flushing, New York.

## Keywords

AI-Generated Summaries · Financial Disclosures · Selective Information Retention · Risk Information Loss · Natural Language Processing · Semantic Similarity · Financial Markets