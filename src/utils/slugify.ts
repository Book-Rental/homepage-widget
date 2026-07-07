export const slugify = (value: string): string =>
    value
        .toLowerCase()
        .trim()
        .replace(/&/g, 'and')
        .replace(/'/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');