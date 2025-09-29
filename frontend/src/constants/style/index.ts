export const THEMES = {
	LIGHT: 'light',
	DARK: 'dark',
} as const

export type Theme = (typeof THEMES)[keyof typeof THEMES]

export function isTheme(value: unknown): value is Theme {
	return value === THEMES.LIGHT || value === THEMES.DARK
}

