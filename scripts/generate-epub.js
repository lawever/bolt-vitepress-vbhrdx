import Epub from 'epub-gen';
import { glob } from 'glob';
import matter from 'gray-matter';
import fs from 'fs';
import MarkdownIt from 'markdown-it';
import path from 'path';

const md = new MarkdownIt();

async function generateEpub() {
  const files = await glob('docs/**/*.md', { ignore: ['docs/.vitepress/**'] });
  
  const chapters = await Promise.all(
    files.map(async (file) => {
      const content = fs.readFileSync(file, 'utf-8');
      const { data, content: markdownContent } = matter(content);
      
      // Skip home page and pages with no content
      if (data.layout === 'home') return null;
      
      return {
        title: data.title || path.basename(file, '.md'),
        data: md.render(markdownContent)
      };
    })
  );

  const filteredChapters = chapters.filter(Boolean);

  const options = {
    title: 'VitePress 文档',
    author: 'VitePress Team',
    output: './docs/public/documentation.epub',
    content: filteredChapters
  };

  try {
    await new Epub(options).promise;
    console.log('EPUB file has been generated successfully!');
  } catch (err) {
    console.error('Error generating EPUB:', err);
  }
}

generateEpub();