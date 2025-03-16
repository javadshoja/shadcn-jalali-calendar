import { createHighlighter } from 'shiki'

export async function initializeShiki() {
	return await createHighlighter({
		themes: ['github-dark', 'github-light'],
		langs: ['typescript', 'javascript', 'tsx', 'jsx', 'css', 'json', 'html']
	})
}

export async function highlightCode(
	code: string,
	lang: string,
	isDark: boolean
) {
	const highlighter = await initializeShiki()

	return highlighter.codeToHtml(code, {
		lang,
		theme: isDark ? 'github-dark' : 'github-light'
	})
}
