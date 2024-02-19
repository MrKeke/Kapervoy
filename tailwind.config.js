import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      screens: {
        s: { max: '435px' },
        sm: { min: '360px', max: '768px' },
        md: { min: '768px', max: '1024px' },
        lg: { min: '1024px', max: '1440px' },
      },
      fontFamily: {
        body: [
          'Inter Helvetica Arial sans-serif',
          {
            fontFeatureSettings: "'clig' off, 'liga' off",
          },
        ],
        sans: [
          'Inter Helvetica Arial sans-serif',
          {
            fontFeatureSettings: "'clig' off, 'liga' off",
          },
        ],
      },
      boxShadow: {
        primary: '0px 1px 4px 0px rgba(185, 219, 221, 0.50)',
        secondary: '0px 2px 4px 0px #F6F5F8, 0px 1px 4px -2px rgba(24, 39, 75, 0.02)',
        tooltip: '0px 4px 12px -2px rgba(28, 40, 64, 0.16), 0px 4px 8px -4px rgba(28, 40, 64, 0.02)',
        card: '0px 0px 4px 0px rgba(0, 0, 0, 0.04), 0px 4px 16px 0px rgba(0, 0, 0, 0.02)',
        modal: 'var(--shadow-modal-window)',
        landingCard: '0px 8px 44px 0px rgba(0,0,0,0.05), 0px 4px 45.6px 0px rgba(16,29,39,0.02)',
      },
      fontSize: {
        'fz-h1': [
          '40px',
          {
            lineHeight: '54px',
            fontWeight: '600',
          },
        ],
        'fz-h2': [
          '32px',
          {
            lineHeight: '44px',
            fontWeight: '700',
          },
        ],
        'fz-h3': [
          '28px',
          {
            lineHeight: '38px',
            fontWeight: '500',
          },
        ],
        'fz-h4': [
          '24px',
          {
            lineHeight: '32px',
            fontWeight: '500',
          },
        ],
        'fz-h5': [
          '20px',
          {
            lineHeight: '28px',
            fontWeight: '500',
          },
        ],
        'fz-h6': [
          '16px',
          {
            lineHeight: '22px',
            fontWeight: '600',
          },
        ],
        'fz-h1-lending': [
          '56px',
          {
            fontWeight: '800',
            lineHeight: '67.2px',
            letterSpacing: '0.28px',
          },
        ],
        'fz-h5-lending': [
          '20px',
          {
            lineHeight: '32px',
            fontWeight: '400',
          },
        ],
        'fz-title-lending-card': [
          '40px',
          {
            fontWeight: '700',
            lineHeight: '150%',
          },
        ],
        'fz-h2-lending-footer': [
          '32px',
          {
            fontWeight: '700',
            lineHeight: '48px',
          },
        ],
        'fz-h3-lending-card': [
          '24px',
          {
            fontWeight: '600',
            lineHeight: '36.5px',
          },
        ],
        'fz-description-lending-card': [
          '18px',
          {
            fontWeight: '400',
            lineHeight: '28.8px',
            letterSpacing: '-0.043px',
          },
        ],
        'fz-mini-lending': [
          '18px',
          {
            fontWeight: '400',
            lineHeight: '25.2px',
          },
        ],
        'fz-info-lending-card': [
          '16px',
          {
            fontWeight: '500',
            lineHeight: '22.4px',
          },
        ],
        'fz-medium-lending': [
          '14px',
          {
            fontWeight: '400',
            lineHeight: '21px',
            letterSpacing: '-0.034px',
          },
        ],
        'fz-small-lending': [
          '12px',
          {
            fontWeight: '500',
            lineHeight: '16.8px',
            letterSpacing: '0.12px',
          },
        ],
        'fz-body': [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: '400',
          },
        ],
        'fz-lead': [
          '14px',
          {
            lineHeight: '24px',
            fontWeight: '600',
          },
        ],
        'fz-body-medium': [
          '14px',
          {
            lineHeight: '24px',
            fontWeight: '500',
          },
        ],
        'fz-body-small': [
          '14px',
          {
            lineHeight: '24px',
            fontWeight: '400',
          },
        ],
        'fz-label-large': [
          '14px',
          {
            lineHeight: '24px',
            fontWeight: '500',
            letterSpacing: '0.3px',
          },
        ],
        'fz-toast': [
          '14px',
          {
            lineHeight: '18px',
            fontWeight: '400',
          },
        ],
        'fz-small': [
          '12px',
          {
            lineHeight: 'normal',
            fontWeight: '500',
          },
        ],
        'fz-label-medium': [
          '12px',
          {
            lineHeight: '16px',
            fontWeight: '500',
            letterSpacing: '0.2px',
          },
        ],
        'fz-field': [
          '12px',
          {
            lineHeight: '16px',
            fontWeight: '400',
          },
        ],
        'fz-label-small': [
          '10px',
          {
            lineHeight: '14px',
            fontWeight: '500',
            letterSpacing: '0.2px',
          },
        ],
        'fz-btn-medium': [
          '12px',
          {
            lineHeight: '16px',
            fontWeight: '500',
            letterSpacing: '0.2px',
          },
        ],
        'fz-tabbar': [
          '10px',
          {
            lineHeight: '12px',
            fontWeight: '400',
            letterSpacing: '-0.12px',
          },
        ],
        'fz-mob-large-title': [
          '34px',
          {
            lineHeight: '41px',
            fontWeight: '700',
            letterSpacing: '0.374px',
          },
        ],
        'fz-mob-caption-13': [
          '13px',
          {
            lineHeight: '18px',
            fontWeight: '400',
            letterSpacing: '-0.35px',
          },
        ],
        'fz-mob-body-17': [
          '17px',
          {
            lineHeight: '24px',
            fontWeight: '400',
            letterSpacing: '-0.6px',
          },
        ],
      },
      backgroundImage: {
        'background-side-panel-bg': 'var(--side-panel-bg)',
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-secondary': 'var(--gradient-secondary)',
        'gradient-tertiary': 'var(--gradient-tertiary)',
        'gradient-landing-one': 'var(--gradient-landing-btn-one)',
        'gradient-landing-two': 'var(--gradient-landing-btn-two)',
        'gradient-landing-three': 'var(--gradient-landing-btn-three)',
        'gradient-landing-four': 'var(--gradient-landing-btn-four)',
        'gradient-landing-five': 'var(--gradient-landing-btn-five)',
        'gradient-landing-btn': 'var(--gradient-landing-btn)',
      },
      colors: {
        'color-base-100-day': 'var(--base-100-day)',
        'color-base-80-day': 'var(--base-80-day)',
        'color-base-70-day': 'var(--base-70-day)',
        'color-base-60-day': 'var(--base-60-day)',
        'color-base-30-day': 'var(--base-30-day)',
        'color-base-20-day': 'var(--base-20-day)',
        'color-base-10-day': 'var(--base-10-day)',
        'color-base-0-day': 'var(--base-0-day)',
        'color-accent-110-day': 'var(--accent-110-day)',
        'color-accent-180-day': 'var(--accent-180-day)',
        'color-accent-1100-day': 'var(--accent-1100-day)',
        'color-accent-1120-day': 'var(--accent-1120-day)',
        'color-notifications-error-icons-day': 'var(--notifications-error-icons-day)',
        'color-notifications-error-text-day': 'var(--notifications-error-text-day)',
        'color-notifications-error-bg-day': 'var(--notifications-error-bg-day)',
        'color-notifications-success-icons-day': 'var(--notifications-success-icons-day)',
        'color-notifications-success-text-day': 'var(--notifications-success-text-day)',
        'color-notifications-success-bg-day': 'var(--notifications-success-bg-day)',
        'color-notifications-warning-icons-day': 'var(--notifications-warning-icons-day)',
        'color-notifications-warning-text-day': 'var(--notifications-warning-text-day)',
        'color-notifications-warning-bg-day': 'var(--notifications-warning-bg-day)',
        'color-notifications-link-text-day': 'var(--notifications-link-text-day)',
        'color-additional-colors-skyre-text-day': 'var(--additional-colors-skyre-text-day)',
        'color-additional-colors-skyre-bg-day': 'var(--additional-colors-skyre-bg-day)',
        'color-additional-colors-viola-text-day': 'var(--additional-colors-viola-text-day)',
        'color-additional-colors-viola-bg-day': 'var(--additional-colors-viola-bg-day)',
        'color-additional-colors-syne-text-day': 'var(--additional-colors-syne-text-day)',
        'color-additional-colors-syne-bg-day': 'var(--additional-colors-syne-bg-day)',
        'color-additional-colors-greta-text-day': 'var(--additional-colors-greta-text-day)',
        'color-additional-colors-greta-bg-day': 'var(--additional-colors-greta-bg-day)',
        'color-additional-colors-grena-text-day': 'var(--additional-colors-grena-text-day)',
        'color-additional-colors-grena-bg-day': 'var(--additional-colors-grena-bg-day)',
        'color-point-high': 'var(--point-high)',
        'color-point-medium': 'var(--point-medium)',
        'color-point-low': 'var(--point-low)',
        'color-status-dark-review': 'var(--status-dark-review)',
        'color-status-light-review': 'var(--status-light-review)',
        'color-status-dark-opened': 'var(--status-dark-opened)',
        'color-status-light-opened': 'var(--status-light-opened)',
        'color-status-dark-stopped': 'var(--status-dark-stopped)',
        'color-status-light-stopped': 'var(--status-light-stopped)',
        'color-status-dark-checked': 'var(--status-dark-checked)',
        'color-status-light-checked': 'var(--status-light-checked)',
        'color-status-dark-inprogress': 'var(--status-dark-inprogress)',
        'color-status-light-inprogress': 'var(--status-light-inprogress)',
        'color-status-dark-canceled': 'var(--status-dark-canceled)',
        'color-status-light-canceled': 'var(--status-light-canceled)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'progress-download': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        'arrow-jump': {
          '0%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'ease-in',
          },
          '100%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'ease-in',
          },
          '50%': {
            transform: 'translateY(-100%)',
            'animation-timing-function': 'ease-out',
          },
        },
        'block-up': {
          '0%': { transform: 'translateY(0) scale(1)' },
          '100%': { transform: 'translateY(-1%) scale(1.05)' },
        },
        'opacity-img': {
          '0%': {
            opacity: '0',
            transform: 'translateY(100%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'progress-download': 'progress-download linear 1 forwards',
        'spin-slow': 'spin 2s linear infinite',
        'arrow-jump': 'arrow-jump 3s infinite',
        'block-up': 'block-up 3s ease-out',
        'opacity-img': 'opacity-img 3s 1',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
}

export default config
