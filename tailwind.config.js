/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/ui/styles/**/*.{css}', // seu tokens.css
  ],
  theme: {
    extend: {
      colors: {
        // Cores base e principais
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',

        // Cores da Marca Principal
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',

        // Cores Auxiliares / Secundárias
        secondary: 'var(--secondary)',
        'secondary-foreground': 'var(--secondary-foreground)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',

        // Cor de Destaque
        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',

        // Cores de Estado
        destructive: 'var(--destructive)',
        'status-success': 'var(--status-success)',
        'status-warning': 'var(--status-warning)',

        // Cores de Componentes/Interface
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        subtitle: 'var(--subtitle)', // Mapeando --subtitle (purple/200)
        icon: 'var(--icon)',         // Mapeando --icon (que aponta para --subtitle)
        light: 'var(--light)',       // Mapeando --light (que aponta para --secondary-foreground)
        icons: 'var(--icons)',       // Mapeando --icons (neutrals/400)
        footer: 'var(--footer)',     // Mapeando --footer

        // Cores de Marca Específicas / Diversas
        'brand-teal': 'var(--brand-teal)',
        'icon-default': 'var(--color-icon-default)', // Mapeando --color-icon-default
        'text-on-primary-dark': 'var(--text-on-primary-dark)', // Mapeando --text-on-primary-dark
        black: 'var(--color-black)',
        divider: 'var(--color-divider)',
        'gradient-bottom-default': 'var(--gradient-bottom-default)',
      },
      borderRadius: {
        // Mapeando diretamente para as variáveis CSS definidas
        DEFAULT: 'var(--radius)', // Usando --radius como default para 'rounded'
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
      fontFamily: {
        // Mapeando suas fontes personalizadas
        sans: ['var(--font-nunito-sans)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-nunito-mono)', ...defaultTheme.fontFamily.mono],
      },
      
      // spacing: {
      //   'md': 'var(--spacing-md)',
      //   'lg': 'var(--spacing-lg)',
      // }
    },
  },
  plugins: [],
}
