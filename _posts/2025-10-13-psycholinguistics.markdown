---
layout: post
title: "Psycholinguistics and NLP"
tags: [ml, musings]
excerpt: >
  Exploring the intricate web of word recognition in the brain, in relation to language models
---

---

Before we dive in, try this yourself: [Lexical Decision Task](https://www.psytoolkit.org/experiment-library/experiment_ldt.html)

You'll see letter strings flash on screen - your job is to decide as quickly as possible whether each is a real word or not. Those tiny differences in response time reveal the underlying mechanics of word recognition.

What you just experienced demonstrates the core phenomena we'll explore in this post. Individual trials vary, but repeat the task 100 times and clear patterns emerge - systematic differences that reveal how your brain processes language.

## Facilitation and Inhibition in Word Recognition

The lexical decision task reveals two key phenomena that shape how we recognize words:

- **Facilitation**: Related words help each other. After seeing "doctor," you recognize "nurse" faster.
- **Inhibition**: Similar words compete. In human word recognition, we see two types:
  1. **Inhibitory Priming**: Context-dependent. Seeing "stiff" makes you recognize "still" *slower*.
  2. **Neighborhood Density**: Context-independent. Words with more phonological neighbors are recognized slower.

Crucially, these effects depend on **temporal correlation** - the recency of when a word was heard or read directly influences the strength of facilitation or inhibition. Recent exposure creates stronger priming effects that decay over time, revealing how our word recognition system maintains a dynamic state influenced by recent linguistic experience.

These effects highlight how our brains balance quick recognition with the challenge of disambiguating similar-sounding words. This competition reveals that word recognition isn't just about matching input to stored entries, but about navigating a complex network where activation spreads and competes.

## The Associative Web

We don't store words like a dictionary. There's no alphabetical lookup in your brain. Instead, words exist in an **associative web** - a network where related concepts link together, and activating one word sends ripples through everything connected to it.

Notice that this idea isn't unique to human cognition. In AI, word embeddings like [Word2Vec](https://arxiv.org/pdf/1301.3781) create a similar associative structure. Words with related meanings cluster together in the embedding space, mirroring the semantic connections in our mental lexicon.

![Semantic network showing mediated priming](/images/psycholinguistics/semantic_network.webp)

But in humans, why doesn't everything get activated when we hear a word? Two key principles govern spreading activation:

1. **Spreading activation takes time** - Neural signals don't travel instantaneously
2. **Activation decays** - Without sustained input, neural activity fades

The result: only local subnetworks get activated. This predicts that **mediated priming should be weaker than direct priming**. For instance, "tiger" should prime "stripes" less effectively than "lion" primes "tiger," because the activation must travel through an intermediate node and decay along the way. This oddly resembles the message propagation steps within a graph neural network.

## The Cohort Model and Parallel Activation

The Cohort Model, proposed by [Marslen-Wilson (1987)](https://www.sciencedirect.com/science/article/pii/0010027787900059?via%3Dihub), suggests that as we hear a word, we activate a "cohort" of all possible words that match the input so far. For instance, hearing "gar-" might activate garden, garbage, garlic, etc. As more phonemes are heard, the cohort narrows until only one word remains.

This parallel activation is remarkably efficient, allowing us to recognize words before they're fully spoken. When LLMs use phoneme-level tokenization (rather than variable-sized word tokens), we see a strikingly similar process - they consider multiple possible continuations simultaneously as they generate sequences. The uncertainty we see in large cohort sizes mirrors what researchers call ["high-entropy decision points"](https://arxiv.org/pdf/2506.01939) in LLMs - moments where the model faces significant uncertainty about the next token. Just as our brains must resolve competition between similar-sounding words in the cohort, LLMs must navigate these high-entropy moments to produce coherent text, with larger cohorts demonstrating higher uncertainty.[^1]

## The Rhyme Effect: Complicating the Picture

Interestingly, [Allopenna et al. (1998)](https://www.sciencedirect.com/science/article/pii/S0749596X97925584) used eye-tracking to show that rhyme words (like "speaker" when hearing "beaker") also attract attention, albeit less than cohort competitors. This challenges strict left-to-right processing models and suggests a more complex network of activation.

![Eye-tracking reveals word competition](/images/psycholinguistics/allopenna_eyetracking.webp)

In their experiment, participants were asked to look at the center, then instructed to "look at the beaker." The graph shows fixation probability over time for the target (beaker), cohort competitor (beetle), rhyme competitor (speaker), and unrelated distractor (carriage). Notice how both cohort and rhyme competitors initially attract attention before the target dominates.

The rhyme competitor effect is particularly intriguing. While the cohort model predicts that "beetle" should attract attention when hearing "bee-" (since it shares the initial phonemes), why would "speaker" compete when hearing "beaker"? They don't share any initial sounds. This suggests something beyond simple left-to-right processing.

The [TRACE model](https://www.sciencedirect.com/science/article/pii/0010028586900150?via%3Dihub) by McClelland & Elman (1986) offers an explanation. Rather than explicit rules, TRACE proposes that phonological knowledge emerges from weighted connections between units - what appears to be rule-following is actually emergent behavior from simple interactions. This echoes what Rich Sutton calls the "bitter lesson": methods that leverage computation and learning from data ultimately outperform approaches that rely on human-designed structure and rules.

In LLMs, we see a similar ability to plan rhymes and consider phonetic similarities, even though they're trained purely on text. Research on [transformer circuits](https://transformer-circuits.pub/2025/attribution-graphs/biology.html#dives-poems) reveals how these models develop emergent understanding of sound patterns despite minimal direct exposure to phonetics through tokenization. This emergence likely occurs because transformers encounter countless examples of rhyming patterns in text, allowing them to infer phonetic relationships purely from distributional statistics.[^2]

This mirrors the TRACE model's insight: what appears to be explicit phonetic knowledge may actually be an artifact emerging from larger patterns in the data. Just as we inherit language from the society around us, LLMs inherit not only language but also implicit ideas about phonetics that they can't directly experience. They develop understanding of rhymes, alliteration, and other sound patterns purely through statistical exposure to how humans use language. However, because LLMs are trained through tokenization schemes that prioritize meaning over phonetics, they're unlikely to exhibit the same rich phonetic activation patterns that humans show.[^3]

## Brains vs. LLMs: Fundamental Architectural Differences

While the parallels between human word recognition and AI language processing are striking, the underlying architectures reveal fascinating differences that highlight the unique nature of biological cognition.

### Stateful vs. Expanding Memory

The human brain operates as a fundamentally **stateful system**. In some sense, like state-space models such as Mamba or LSTMs, our own neural networks maintain a self-contained "state" at each moment rather than expanding memory with each input. However, the brain has an additional layer of complexity: activation spreads through this network with realistic time delays and decay functions - when you hear "lion," the activation doesn't instantly appear everywhere but propagates gradually, weakening as it travels. While Mamba and LSTMs don't have this same activation spreading, their functional "state" representation is more correlated with how human brains maintain context than transformers' expanding memory approach.

Transformers, by contrast, allocate expanding memory with each new token. They don't experience the continuous, time-dependent activation dynamics we see in biological systems. There's no built-in "decay" - once information enters the context window, it remains equally accessible until it's pushed out entirely.

### Temporal Dynamics and Competition

This difference has profound implications for how competition resolves. In the brain, the temporal dynamics of spreading activation create natural competition resolution. Crucially, **spreading activation takes time** - neural signals don't travel instantaneously - and **activation decays** without sustained input. This means stronger, more direct connections win out over time as weaker signals fade, creating a natural temporal hierarchy in word recognition.

LLMs achieve similar competitive effects through different mechanisms - attention weights and learned representations create winner-take-all dynamics, but without the continuous temporal evolution that characterizes biological processing.

### Toward More Brain-Like Models

Understanding these architectural differences helps us appreciate both the remarkable capabilities that have emerged in artificial systems and the unique computational principles that evolution has discovered in biological brains. As we develop new AI architectures, insights from neuroscience about temporal dynamics, state evolution, and competitive processing may inspire more brain-like approaches to language understanding. Here's what seems necessary:

- **Multimodality**: To properly model inhibitory priming from phonetic similarity, we likely need models with intrinsic phonetic representations, not just text-derived inferences about sound, to properly represent frequently explicit human awareness of not just rhyme but meter.[^4]
- **Statefulness**: Models need persistent internal states that evolve continuously over time, rather than the expanding memory approach of transformers.
- **Temporal Dynamics**: The realistic time delays and decay functions that characterize biological processing - when you hear "lion," activation should propagate gradually and weaken over time, with recency effects determining the strength of priming and inhibition. In contrast, transformers use attention mechanisms that can attend equally to all prior tokens in the context window, lacking the natural temporal decay that shapes human language processing.

Can we build AI systems that model biological language processing? Transformers are different from our brains, which is great - they can cover different use cases in the workforce than what we want ourselves to do. But is there an architecture that mimics biological systems so we can better study how we understand language and cover more ground in our understanding of human cognition?

---

*This post builds upon insights from Cory Shein's excellent psycholinguistics lectures. Any errors or oversimplifications are my own.*

[^1]: Interestingly, neuroscience research on antonym detection shows similar uncertainty patterns in human brains. The [N400 component (~400ms) measures semantic processing difficulty](https://www.frontiersin.org/journals/human-neuroscience/articles/10.3389/fnhum.2019.00285/full) - larger responses indicate unexpected/unrelated words, while the P300 component (~300-600ms) measures decision confidence. This brain-based uncertainty measurement parallels model entropy in LLMs, suggesting similar computational challenges in resolving semantic competition.

[^2]: Transformer circuits research reveals that language processing appears hierarchically separated, with three distinct computational parts: operation (e.g., antonym), operand (e.g., small), and language context as shown through research on [multilingual transformer circuits](https://transformer-circuits.pub/2025/attribution-graphs/biology.html#dives-multilingual). The hierarchical language separation reflects ideas from the [Revised Hierarchical Model (RHM)](https://www.sciencedirect.com/science/article/pii/S0749596X84710084) for bilingual word recognition. RHM proposes that bilinguals maintain a hierarchy between their native language (L1) and second language (L2), where L2 words are initially accessed through L1 conceptual links before developing direct conceptual connections.

[^3]: [Bilinguals automatically activate phonological representations from both languages when reading](https://pmc.ncbi.nlm.nih.gov/articles/PMC12426078/). In masked priming studies, where a word is flashed quick enough to be seen but not processed, participants showed faster responses when prime and target words shared sounds across languages (like Dutch "wie" /wi/ and French "OUI" /wi/), demonstrating non-selective activation. This suggests that even human brains don't cleanly separate language processing.

[^4]: Rhyme recognition in LLMs can also theoretically be orthographically determined - "visually" learned from how words are written rather than how they sound. Depending on the granularity of tokenization schemes, models can identify that "cat," "bat," and "mat" share the same ending pattern. However, this orthographic approach can be misleading: words like "enough," "trough," and "cough" appear to rhyme orthographically but don't actually share the same sounds, potentially leading to incorrect phonetic inferences in text-only trained models.