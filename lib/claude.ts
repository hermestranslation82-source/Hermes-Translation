import Anthropic from '@anthropic-ai/sdk';

export type ArticlePromptInput = {
  topic: string;
  keywordAr: string;
  keywordEn: string;
  languagePair: string;
  category: string;
};

export async function generateArticle(input: ArticlePromptInput) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return {
      title_ar: input.topic,
      title_en: input.keywordEn,
      content_ar: `## ${input.topic}\n\nهذه مسودة تجريبية. أضف ANTHROPIC_API_KEY لتفعيل مولد المقالات.`,
      content_en: `## ${input.keywordEn}\n\nThis is a placeholder draft. Add ANTHROPIC_API_KEY to enable generation.`,
      excerpt_ar: 'مسودة مقال قابلة للتحرير.',
      excerpt_en: 'Editable article draft.'
    };
  }

  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  const prompt = [
    'Write a comprehensive, SEO-optimized article of at least 1000 words.',
    'Include H2 and H3 headings with natural keyword placement.',
    'Write in formal but accessible Egyptian Arabic.',
    'Include an FAQ section at the end with 5 questions.',
    'Do not use generic filler phrases.',
    'Write as a certified translation expert.',
    `Topic Arabic: ${input.topic}`,
    `Target keyword Arabic: ${input.keywordAr}`,
    `Target keyword English: ${input.keywordEn}`,
    `Language pair focus: ${input.languagePair}`,
    `Category: ${input.category}`,
    'Return JSON with title_ar, title_en, excerpt_ar, excerpt_en, content_ar, content_en, meta_title_ar, meta_title_en, meta_description_ar, meta_description_en.'
  ].join('\n');

  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 6000,
    messages: [{ role: 'user', content: prompt }]
  });

  const text = response.content.map((block) => ('text' in block ? block.text : '')).join('\n');
  try {
    return JSON.parse(text);
  } catch {
    return {
      title_ar: input.topic,
      title_en: input.keywordEn,
      content_ar: text,
      content_en: text,
      excerpt_ar: input.keywordAr,
      excerpt_en: input.keywordEn
    };
  }
}
