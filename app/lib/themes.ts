export type Theme = 'modernCraft' | 'creativeStudio' | 'luxuryHeritage' | 'techCreativity' | 'natureInspired';

export interface ThemeColors {
  primary: string;
  primaryDark: string;
  secondary: string;
  accent: string;
  accent2: string;
  background: string;
  surface: string;
  text: string;
  textLight: string;
  border: string;
}

export const themes: Record<Theme, ThemeColors> = {
  modernCraft: {
    primary: '#0D9488', // Teal Stitch
    primaryDark: '#0F766E',
    secondary: '#111827', // Charcoal Thread
    accent: '#D4AF37', // Metallic Gold
    accent2: '#0D9488', // Teal Stitch
    background: '#FAFAFA', // Off-White Canvas
    surface: '#FFFFFF',
    text: '#111827',
    textLight: '#6B7280',
    border: '#E5E7EB'
  },
  creativeStudio: {
    primary: '#3730A3', // Indigo Ink
    primaryDark: '#312E81',
    secondary: '#EDE9FE', // Light Lilac
    accent: '#FB7185', // Coral Thread
    accent2: '#10B981', // Emerald Green
    background: '#F9FAFB',
    surface: '#FFFFFF',
    text: '#1F2937',
    textLight: '#6B7280',
    border: '#D1D5DB'
  },
  luxuryHeritage: {
    primary: '#0F172A', // Deep Navy
    primaryDark: '#020617',
    secondary: '#7F1D1D', // Rich Burgundy
    accent: '#C9A227', // Antique Gold
    accent2: '#F8F5E1', // Ivory White
    background: '#F8F5E1',
    surface: '#FFFFFF',
    text: '#0F172A',
    textLight: '#64748B',
    border: '#E2E8F0'
  },
  techCreativity: {
    primary: '#14B8A6', // Neon Teal
    primaryDark: '#0F766E',
    secondary: '#9CA3AF', // Cool Gray
    accent: '#8B5CF6', // Electric Purple
    accent2: '#14B8A6', // Neon Teal
    background: '#0A0A0A', // Midnight Black
    surface: '#1F2937',
    text: '#F9FAFB',
    textLight: '#D1D5DB',
    border: '#374151'
  },
  natureInspired: {
    primary: '#14532D', // Forest Green
    primaryDark: '#15803D',
    secondary: '#EA580C', // Warm Terracotta
    accent: '#F59E0B', // Golden Wheat
    accent2: '#14532D', // Forest Green
    background: '#F3F4F6', // Natural Linen
    surface: '#FFFFFF',
    text: '#1F2937',
    textLight: '#6B7280',
    border: '#D1D5DB'
  }
};

export const themeNames: Record<Theme, string> = {
  modernCraft: 'Modern Craft',
  creativeStudio: 'Creative Studio',
  luxuryHeritage: 'Luxury Heritage',
  techCreativity: 'Tech & Creativity',
  natureInspired: 'Nature Inspired'
};

export const themeDescriptions: Record<Theme, string> = {
  modernCraft: 'Elegant & Minimalist - Like a designer\'s workshop',
  creativeStudio: 'Vibrant & Playful - Fashion design studio vibes',
  luxuryHeritage: 'Premium & Artistic - Royal embroidery heritage',
  techCreativity: 'Futuristic & Sleek - AI meets fashion innovation',
  natureInspired: 'Organic & Calm - Craftsmanship rooted in nature'
};