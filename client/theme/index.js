const pallette = [
    {
        text: '#f97316',
        bgColor: opacity => `rgba(251, 146, 60, ${opacity})`
    },
    {
        text: '#10b981',
        bgColor: opacity => `rgba(16, 185, 129, ${opacity})`
    },
    {
        text: '#3b82f6',
        bgColor: opacity => `rgba(59, 130, 246, ${opacity})`
    },
    {
        text: '#6366f1',
        bgColor: opacity => `rgba(99, 102, 241, ${opacity})`
    },
    {
        text: '#8b5cf6',
        bgColor: opacity => `rgba(139, 92, 246, ${opacity})`
    },
    {
        text: '#ec4899',
        bgColor: opacity => `rgba(236, 72, 153, ${opacity})`
    },
    {
        text: '#ef4444',
        bgColor: opacity => `rgba(239, 68, 68, ${opacity})`
    },
    {
        text: '#facc15',
        bgColor: opacity => `rgba(250, 204, 21, ${opacity})`
    },
    {
        text: '#22c55e',
        bgColor: opacity => `rgba(34, 197, 94, ${opacity})`
    },
]

export const themeColors = {
    ...pallette[1],
}