import { readdir, readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { marked } from 'marked';

export async function load() {
	const contentPath = 'src/content';
	const paths = await readdir(contentPath);
	const files = paths.filter((path) => extname(path).toLowerCase() === '.md').sort();
	const content = files.map(async (filename) => {
		const fc = await readFile(join(contentPath, filename), 'utf-8');
		return marked(fc);
	});

	return { content: await Promise.all(content) };
}
